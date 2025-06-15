const quizData = [
    {
        question: "Quelles notes olfactives préférez-vous dans un parfum ?",
        subtitle: "Sélectionnez toutes les réponses qui vous correspondent",
        options: [
            { text: "Fleurs délicates (rose, jasmin, pivoine)", value: "floral", emoji: "🌸" },
            { text: "Bois profonds (cèdre, santal, vétiver)", value: "woody", emoji: "🌳" },
            { text: "Fruits frais (citron, pamplemousse, baies)", value: "fruity", emoji: "🍊" },
            { text: "Épices chaudes (cannelle, cardamome, poivre)", value: "spicy", emoji: "🌶️" },
            { text: "Agrumes pétillants (bergamote, citron vert, orange)", value: "citrus", emoji: "🍋" },
            { text: "Herbes fraîches (menthe, basilic, lavande)", value: "herbal", emoji: "🌿" }
        ]
    },
    {
        question: "Quels parfums vous évoquent le plus de souvenirs agréables ?",
        subtitle: "Laissez-vous guider par vos émotions",
        options: [
            { text: "Un bouquet de fleurs fraîchement cueillies", value: "floral", emoji: "💐" },
            { text: "L'odeur d'une forêt après la pluie", value: "woody", emoji: "🌲" },
            { text: "Un panier de fruits mûrs au marché", value: "fruity", emoji: "🧺" },
            { text: "Les épices d'un thé chai fumant", value: "spicy", emoji: "☕" },
            { text: "L'air frais d'un verger d'agrumes", value: "citrus", emoji: "🌳" },
            { text: "Un jardin d'herbes aromatiques au matin", value: "herbal", emoji: "🏡" }
        ]
    },
    {
        question: "Quelles notes olfactives évitez-vous généralement ?",
        subtitle: "Identifiez ce qui ne vous correspond pas",
        options: [
            { text: "Fleurs trop sucrées (ex. tubéreuse)", value: "floral", isDislike: true, emoji: "🚫" },
            { text: "Bois trop lourds (ex. oud)", value: "woody", isDislike: true, emoji: "🚫" },
            { text: "Fruits trop sucrés (ex. mangue)", value: "fruity", isDislike: true, emoji: "🚫" },
            { text: "Épices trop intenses (ex. clou de girofle)", value: "spicy", isDislike: true, emoji: "🚫" },
            { text: "Agrumes trop acides (ex. citron vert)", value: "citrus", isDislike: true, emoji: "🚫" },
            { text: "Herbes trop médicinales (ex. eucalyptus)", value: "herbal", isDislike: true, emoji: "🚫" }
        ]
    },
    {
        question: "Quel type de parfum préférez-vous pour un usage quotidien ?",
        subtitle: "Votre signature au quotidien",
        options: [
            { text: "Léger et floral, comme une brise printanière", value: "floral", emoji: "🌺" },
            { text: "Chaud et boisé, comme un feu de cheminée", value: "woody", emoji: "🔥" },
            { text: "Frais et fruité, comme un cocktail d'été", value: "fruity", emoji: "🍹" },
            { text: "Épicé et audacieux, comme une soirée exotique", value: "spicy", emoji: "✨" },
            { text: "Vif et citronné, comme une journée ensoleillée", value: "citrus", emoji: "☀️" },
            { text: "Frais et herbacé, comme un jardin matinal", value: "herbal", emoji: "🌅" }
        ]
    },
    {
        question: "Quel parfum choisiriez-vous pour une occasion spéciale ?",
        subtitle: "Votre signature pour les moments précieux",
        options: [
            { text: "Un parfum floral élégant et sophistiqué", value: "floral", emoji: "👗" },
            { text: "Un parfum boisé riche et intemporel", value: "woody", emoji: "🎩" },
            { text: "Un parfum fruité vibrant et énergique", value: "fruity", emoji: "🎉" },
            { text: "Un parfum épicé intense et mémorable", value: "spicy", emoji: "💫" },
            { text: "Un parfum d'agrumes frais et pétillant", value: "citrus", emoji: "🥂" },
            { text: "Un parfum herbacé raffiné et apaisant", value: "herbal", emoji: "🕊️" }
        ]
    },
    {
        question: "Quelles sensations recherchez-vous dans un parfum ?",
        subtitle: "L'émotion que vous souhaitez transmettre",
        options: [
            { text: "Douceur et romantisme", value: "floral", emoji: "💕" },
            { text: "Chaleur et profondeur", value: "woody", emoji: "🤗" },
            { text: "Énergie et vivacité", value: "fruity", emoji: "⚡" },
            { text: "Mystère et intensité", value: "spicy", emoji: "🔮" },
            { text: "Fraîcheur et clarté", value: "citrus", emoji: "💎" },
            { text: "Calme et sérénité", value: "herbal", emoji: "🧘" }
        ]
    },
    {
        question: "Quel environnement inspire le plus votre choix de parfum ?",
        subtitle: "Laissez-vous transporter par le lieu",
        options: [
            { text: "Un champ de fleurs en pleine floraison", value: "floral", emoji: "🌼" },
            { text: "Une forêt dense et mystérieuse", value: "woody", emoji: "🌲" },
            { text: "Un marché coloré de fruits tropicaux", value: "fruity", emoji: "🍍" },
            { text: "Un bazar oriental aux épices envoûtantes", value: "spicy", emoji: "🛒" },
            { text: "Un verger d'agrumes sous le soleil", value: "citrus", emoji: "🌞" },
            { text: "Un jardin zen aux herbes apaisantes", value: "herbal", emoji: "🪴" }
        ]
    },
    {
        question: "Quel moment de la journée associez-vous à votre parfum idéal ?",
        subtitle: "Quand votre fragrance brille-t-elle le plus ?",
        options: [
            { text: "Le matin, frais et floral", value: "floral", emoji: "🌺" },
            { text: "Le soir, chaleureux et boisé", value: "woody", emoji: "🌙" },
            { text: "L'après-midi, vibrant et fruité", value: "fruity", emoji: "🍒" },
            { text: "La nuit, audacieux et épicé", value: "spicy", emoji: "🌌" },
            { text: "À l'aube, lumineux et citronné", value: "citrus", emoji: "🌅" },
            { text: "Tout au long de la journée, frais et herbacé", value: "herbal", emoji: "🌿" }
        ]
    }
];

export { quizData };