import requests
from bs4 import BeautifulSoup
import json
import time
import pandas as pd
from urllib.parse import urljoin

# Configuration
BASE_URL = "https://www.olfastory.com"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
HEADERS = {"User-Agent": USER_AGENT}

# Liste pour stocker les données
parfums = []

# Fonction pour scraper une page de parfum
def scrape_parfum(url):
    try:
        response = requests.get(url, headers=HEADERS)
        if response.status_code != 200:
            print(f"Erreur {response.status_code} pour {url}")
            return None

        soup = BeautifulSoup(response.text, "html.parser")

        # Extraction des données (à adapter selon la structure HTML)
        parfum = {}
        
        # Nom du parfum
        name_tag = soup.find("h1", class_="product-title")  # Vérifiez la classe réelle
        parfum["name"] = name_tag.text.strip() if name_tag else "Inconnu"

        # Marque
        brand_tag = soup.find("span", class_="brand-name")  # Vérifiez la classe
        parfum["brand"] = brand_tag.text.strip() if brand_tag else "Inconnu"

        # Notes olfactives
        notes = {"top_notes": [], "heart_notes": [], "base_notes": []}
        notes_section = soup.find("div", class_="notes")  # Vérifiez la classe
        if notes_section:
            for note_type in ["top", "heart", "base"]:
                notes_list = notes_section.find_all("span", class_=f"{note_type}-note")
                notes[f"{note_type}_notes"] = [note.text.strip() for note in notes_list]
        parfum.update(notes)

        # Famille olfactive
        family_tag = soup.find("span", class_="family")  # Vérifiez la classe
        parfum["family"] = family_tag.text.strip() if family_tag else "Inconnu"

        # Description
        desc_tag = soup.find("div", class_="description")  # Vérifiez la classe
        parfum["description"] = desc_tag.text.strip() if desc_tag else ""

        # Image
        img_tag = soup.find("img", class_="product-image")  # Vérifiez la classe
        parfum["image_url"] = urljoin(BASE_URL, img_tag["src"]) if img_tag else ""

        # Autres champs (à compléter selon la structure)
        parfum["year"] = "Inconnu"  # Cherchez un champ pour l'année
        parfum["intensity"] = "Inconnu"
        parfum["longevity"] = "Inconnu"
        parfum["gender"] = "Inconnu"
        parfum["occasion"] = "Inconnu"
        parfum["season"] = "Inconnu"
        parfum["price_range"] = "Inconnu"
        parfum["brand_type"] = "Inconnu"
        parfum["natural_ingredients"] = "Inconnu"
        parfum["tags"] = []

        return parfum

    except Exception as e:
        print(f"Erreur lors du scraping de {url}: {e}")
        return None

# Fonction pour récupérer les URLs des parfums
def get_parfum_urls():
    urls = []
    page = 1
    while True:
        list_url = f"{BASE_URL}/parfums?page={page}"
        response = requests.get(list_url, headers=HEADERS)
        if response.status_code != 200:
            break

        soup = BeautifulSoup(response.text, "html.parser")
        parfum_links = soup.find_all("a", class_="parfum-link")  # Vérifiez la classe
        if not parfum_links:
            break

        for link in parfum_links:
            urls.append(urljoin(BASE_URL, link["href"]))
        
        page += 1
        time.sleep(2)  # Respecter le serveur

    return urls

# Scraper les parfums
parfum_urls = get_parfum_urls()
for url in parfum_urls:
    parfum_data = scrape_parfum(url)
    if parfum_data:
        parfums.append(parfum_data)
    time.sleep(2)  # Respecter le serveur

# Exporter en JSON
with open("parfums.json", "w", encoding="utf-8") as f:
    json.dump(parfums, f, ensure_ascii=False, indent=2)

# Exporter en CSV (optionnel)
df = pd.DataFrame(parfums)
df.to_csv("parfums.csv", index=False)

print(f"Scraping terminé. {len(parfums)} parfums extraits.")