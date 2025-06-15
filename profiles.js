const profiles = {
    floral: {
        title: "L'Âme Florale",
        description: "Vous êtes attiré par l'élégance et la douceur des fleurs. Votre profil olfactif est romantique, délicat et raffiné, parfait pour une présence subtile mais mémorable.",
        personality: "Romantique • Élégante • Sensible • Raffinée",
        color: "#E8A4C8",
        recommendations: [
            { name: "Rose Éternelle", desc: "Un mélange romantique de rose et de pivoine avec une touche de vanille." },
            { name: "Jasmin de Minuit", desc: "Une fragrance florale envoûtante avec des notes de jasmin et de gardénia." },
            { name: "Fleur de Printemps", desc: "Un parfum léger et frais, évoquant un jardin fleuri au printemps." }
        ]
    },
    woody: {
        title: "L'Esprit Boisé",
        description: "Vous appréciez la chaleur et la profondeur des notes boisées. Votre profil est ancré, sophistiqué et intemporel, idéal pour une aura apaisante.",
        personality: "Sophistiquée • Intemporelle • Chaleureuse • Stable",
        color: "#8B4513",
        recommendations: [
            { name: "Santal Précieux", desc: "Un parfum riche avec des notes de santal et de patchouli." },
            { name: "Cèdre Impérial", desc: "Une fragrance boisée robuste avec des accents de cèdre et de musc." },
            { name: "Bois d'Ambre", desc: "Un mélange chaleureux de bois d'ambre et de vétiver." }
        ]
    },
    fruity: {
        title: "L'Énergie Fruitée",
        description: "Vous êtes attiré par la fraîcheur et la vivacité des fruits. Votre profil est dynamique, enjoué et vibrant, parfait pour un éclat de vitalité.",
        personality: "Dynamique • Joyeuse • Vivante • Spontanée",
        color: "#FF6B9D",
        recommendations: [
            { name: "Citron Éclatant", desc: "Un parfum pétillant avec des notes de citron et de bergamote." },
            { name: "Baie Sauvage", desc: "Une fragrance fruitée avec des baies rouges et une touche de menthe." },
            { name: "Pêche Veloutée", desc: "Un parfum doux et juteux avec des notes de pêche et de vanille." }
        ]
    },
    spicy: {
        title: "L'Audace Épicée",
        description: "Vous aimez les notes audacieuses et mystérieuses des épices. Votre profil est intense, captivant et unique, idéal pour se démarquer.",
        personality: "Audacieuse • Mystérieuse • Intense • Unique",
        color: "#D2691E",
        recommendations: [
            { name: "Poivre Noir Intense", desc: "Un parfum audacieux avec des notes de poivre noir et de bois fumé." },
            { name: "Cannelle Ardente", desc: "Une fragrance épicée et chaleureuse avec des accents de cannelle." },
            { name: "Safran Mystique", desc: "Un parfum exotique avec des notes de safran et d'encens." }
        ]
    },
    citrus: {
        title: "L'Éclat d'Agrumes",
        description: "Vous êtes attiré par la fraîcheur pétillante des agrumes. Votre profil est lumineux, énergique et revigorant, parfait pour une touche de vitalité quotidienne.",
        personality: "Lumineuse • Énergique • Fraîche • Optimiste",
        color: "#FFD700",
        recommendations: [
            { name: "Bergamote Brillante", desc: "Un parfum vif avec des notes de bergamote et de citron vert." },
            { name: "Orange Solaire", desc: "Une fragrance éclatante d'orange douce et de mandarine." },
            { name: "Pamplemousse Pétillant", desc: "Un parfum frais et acidulé avec des notes de pamplemousse rose." }
        ]
    },
    herbal: {
        title: "L'Essence Herbacée",
        description: "Vous appréciez la fraîcheur apaisante des herbes. Votre profil est calme, pur et équilibré, idéal pour une sensation de sérénité naturelle.",
        personality: "ApHmApaisante • Pure • Équilibrée • Naturelle",
        color: "#90EE90",
        recommendations: [
            { name: "Lavande Pure", desc: "Un parfum relaxant avec des notes de lavande et de romarin." },
            { name: "Menthe Fraîche", desc: "Une fragrance vivifiante avec des accents de menthe et de basilic." },
            { name: "Sauge Apaisante", desc: "Un parfum équilibré avec des notes de sauge et de thé vert." }
        ]
    }
};

export { profiles };