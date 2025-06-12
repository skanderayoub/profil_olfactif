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
  }
];

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
    personality: "Apaisante • Pure • Équilibrée • Naturelle",
    color: "#90EE90",
    recommendations: [
      { name: "Lavande Pure", desc: "Un parfum relaxant avec des notes de lavande et de romarin." },
      { name: "Menthe Fraîche", desc: "Une fragrance vivifiante avec des accents de menthe et de basilic." },
      { name: "Sauge Apaisante", desc: "Un parfum équilibré avec des notes de sauge et de thé vert." }
    ]
  }
};

let currentQuestion = 0;
let userAnswers = [];
let userData = {};

// DOM Elements
const loginSection = document.getElementById('loginSection');
const welcomeSection = document.getElementById('welcomeSection');
const quizSection = document.getElementById('quizSection');
const resultsSection = document.getElementById('resultsSection');
const loginForm = document.getElementById('loginForm');
const startQuizButton = document.getElementById('startQuiz');
const nextQuestionButton = document.getElementById('nextQuestion');
const restartQuizButton = document.getElementById('restartQuiz');
const emailProfileButton = document.getElementById('emailProfile');
const quizContainer = document.getElementById('quizContainer');
const progressText = document.getElementById('progressText');
const progressCircle = document.getElementById('progressCircle');
const welcomeName = document.getElementById('welcomeName');

// Event Listeners
loginForm.addEventListener('submit', handleLogin);
startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', handleNextQuestion);
restartQuizButton.addEventListener('click', restartQuiz);
emailProfileButton.addEventListener('click', emailProfile);

function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();

  if (name && email) {
    userData = { name, email };
    welcomeName.textContent = name;

    // Smooth transition
    loginSection.classList.add('hidden');
    setTimeout(() => {
      welcomeSection.classList.remove('hidden');
    }, 300);
  }
}

function startQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  welcomeSection.classList.add('hidden');
  setTimeout(() => {
    quizSection.classList.remove('hidden');
    displayQuestion();
    updateProgress();
  }, 300);
}

function displayQuestion() {
  const question = quizData[currentQuestion];

  quizContainer.innerHTML = `
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-charcoal mb-4">
            ${question.question}
          </h3>
          <p class="text-soft-gray text-lg">${question.subtitle}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${question.options.map((option, index) => `
            <div class="quiz-option rounded-2xl p-6 text-center" data-value="${option.value}" ${option.isDislike ? 'data-dislike="true"' : ''}>
              <div class="text-4xl mb-3">${option.emoji}</div>
              <div class="font-medium text-charcoal">${option.text}</div>
            </div>
          `).join('')}
        </div>
      `;

  // Add click handlers to options
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      option.classList.toggle('selected');
      updateNextButton();
    });
  });

  nextQuestionButton.disabled = true;
}

function updateNextButton() {
  const selectedOptions = document.querySelectorAll('.quiz-option.selected');
  nextQuestionButton.disabled = selectedOptions.length === 0;
}

function handleNextQuestion() {
  const selectedOptions = Array.from(document.querySelectorAll('.quiz-option.selected')).map(option => ({
    value: option.dataset.value,
    isDislike: option.dataset.dislike === 'true'
  }));

  if (selectedOptions.length > 0) {
    userAnswers.push(selectedOptions);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      updateProgress();
      displayQuestion();
    } else {
      showResults();
    }
  }
}

function updateProgress() {
  const progress = (currentQuestion / quizData.length) * 100;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = `${currentQuestion + 1}/6`;
}

function showResults() {
  quizSection.classList.add('hidden');
  setTimeout(() => {
    resultsSection.classList.remove('hidden');
    calculateAndDisplayProfile();
  }, 300);
}

function calculateAndDisplayProfile() {
  const profileScores = { floral: 0, woody: 0, fruity: 0, spicy: 0, citrus: 0, herbal: 0 };

  userAnswers.forEach(answers => {
    answers.forEach(answer => {
      if (answer.isDislike) {
        profileScores[answer.value] -= 1;
      } else {
        profileScores[answer.value] += 1;
      }
    });
  });

  // Normalize scores for chart
  const normalizedScores = Object.fromEntries(
    Object.entries(profileScores).map(([key, value]) => [key, Math.max(0, value)])
  );

  const sortedProfiles = Object.entries(profileScores).sort((a, b) => b[1] - a[1]);
  const primaryProfile = sortedProfiles[0][0];
  const secondaryProfile = sortedProfiles[1][1] > 0 ? sortedProfiles[1][0] : null;

  // Create radar chart
  createRadarChart(normalizedScores);

  // Display profile results
  displayProfileResults(primaryProfile, secondaryProfile);
}

function createRadarChart(scores) {
  const ctx = document.getElementById('radarChart').getContext('2d');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Floral', 'Boisé', 'Fruité', 'Épicé', 'Agrumes', 'Herbacé'],
      datasets: [{
        label: 'Votre Profil',
        data: [
          scores.floral,
          scores.woody,
          scores.fruity,
          scores.spicy,
          scores.citrus,
          scores.herbal
        ],
        backgroundColor: 'rgba(212, 175, 140, 0.2)',
        borderColor: 'rgba(212, 175, 140, 1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(212, 175, 140, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 6,
          ticks: {
            stepSize: 1,
            display: false
          },
          grid: {
            color: 'rgba(212, 175, 140, 0.2)'
          },
          angleLines: {
            color: 'rgba(212, 175, 140, 0.2)'
          },
          pointLabels: {
            font: {
              size: 12,
              weight: '600'
            },
            color: '#2D2926'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function displayProfileResults(primaryProfile, secondaryProfile) {
  const profile = profiles[primaryProfile];

  let resultHTML = `
        <div class="text-center mb-6">
          <div class="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl" style="background: linear-gradient(135deg, ${profile.color}40, ${profile.color}80);">
            ${getProfileEmoji(primaryProfile)}
          </div>
          <h3 class="text-2xl md:text-3xl font-display font-bold text-charcoal mb-2">
            ${profile.title}
          </h3>
          <p class="text-sm text-soft-gray font-medium mb-4">${profile.personality}</p>
          <p class="text-soft-gray leading-relaxed mb-6">${profile.description}</p>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-charcoal mb-3">Parfums Recommandés</h4>
          ${profile.recommendations.map(rec => `
            <div class="bg-warm-white rounded-xl p-4 border border-gold-light">
              <h5 class="font-semibold text-charcoal mb-1">${rec.name}</h5>
              <p class="text-sm text-soft-gray">${rec.desc}</p>
            </div>
          `).join('')}
        </div>
      `;

  if (secondaryProfile) {
    const secondary = profiles[secondaryProfile];
    resultHTML += `
          <div class="mt-8 pt-6 border-t border-gold-light">
            <h4 class="text-lg font-semibold text-charcoal mb-3">Profil Secondaire : ${secondary.title}</h4>
            <p class="text-sm text-soft-gray mb-4">${secondary.description}</p>
            <div class="grid gap-3">
              ${secondary.recommendations.slice(0, 2).map(rec => `
                <div class="bg-champagne bg-opacity-50 rounded-xl p-3">
                  <h5 class="font-medium text-charcoal text-sm mb-1">${rec.name}</h5>
                  <p class="text-xs text-soft-gray">${rec.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;
  }

  document.getElementById('profileResult').innerHTML = resultHTML;
}

function getProfileEmoji(profileType) {
  const emojis = {
    floral: '🌸',
    woody: '🌳',
    fruity: '🍊',
    spicy: '🌶️',
    citrus: '🍋',
    herbal: '🌿'
  };
  return emojis[profileType] || '✨';
}

function emailProfile() {
  // Simulate sending email
  emailProfileButton.innerHTML = `
        <div class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Envoi en cours...
        </div>
      `;

  setTimeout(() => {
    emailProfileButton.innerHTML = '✓ Envoyé avec succès !';
    emailProfileButton.classList.add('bg-green-500', 'border-green-500');

    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate__animated animate__fadeInRight';
    successMsg.textContent = `Profil envoyé à ${userData.email} !`;
    document.body.appendChild(successMsg);

    setTimeout(() => {
      successMsg.remove();
    }, 5000);
  }, 2000);
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  resultsSection.classList.add('hidden');
  setTimeout(() => {
    welcomeSection.classList.remove('hidden');
  }, 300);

  // Reset email button
  emailProfileButton.innerHTML = 'Recevoir par email';
  emailProfileButton.classList.remove('bg-green-500', 'border-green-500');
}

// Add some interactive animations on load
document.addEventListener('DOMContentLoaded', () => {
  // Animate floating elements
  setTimeout(() => {
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.5}s`;
    });
  }, 1000);
});