// Configuration
const WHATSAPP_NUMBER = "237656662311"; // Format: 33612345678 (sans +)

// Questions du formulaire
const questions = [
    {
        id: 1,
        question: "Êtes-vous intéressé par une connexion illimitée le mois ?",
        options: [
            "Oui",
            "Non"
        ]
    },
    {
        id: 2,
        question: "Êtes-vous sous Android ou sur iPhone ?",
        options: [
            "Android",
            "iPhone (iOS)"
        ]
    },
    {
        id: 3,
        question: "Avez-vous l'application NPV Tunnel ?",
        options: [
            "Oui, je l'ai déjà installée",
            "Non, je ne l'ai pas encore",
            "Je ne connais pas cette application"
        ]
    }
];

// Étapes du tutoriel
const tutorialSteps = [
    {
        text: "Étape 1 : Téléchargez l'application NPV Tunnel. Si vous êtes sur iPhone, allez sur l'App Store. Si vous êtes sur Android, allez sur le Play Store.",
        image: "img/1.jpeg",
        icon: "📥"
    },
    {
        text: "Étape 2 : Ouvrez l'application NPV Tunnel et acceptez les conditions d'utilisation pour continuer.",
        image: "img/2.jpeg",
        icon: "✅"
    },
    {
        text: "Étape 3 : Appuyez sur le bouton pour ajouter une nouvelle configuration VPN.",
        image: "img/3.jpeg",
        icon: "⚙️"
    },
    {
        text: "Étape 4 : Appuyez sur 'More' (Plus d'options) puis copiez votre 'Device ID' (Identifiant de l'appareil). Envoyez-nous ce Device ID sur WhatsApp pour activer votre connexion illimitée !",
        image: "img/4.jpeg",
        icon: "🔐"
    }
];

// Variables globales
let currentQuestion = 0;
let currentTutorialStep = 0;
let answers = {};
let deviceId = "";

// Navigation entre sections
function nextSection() {
    const sections = document.querySelectorAll('.section');
    const activeSection = document.querySelector('.section.active');
    const activeIndex = Array.from(sections).indexOf(activeSection);

    if (activeIndex < sections.length - 1) {
        activeSection.classList.remove('active');
        sections[activeIndex + 1].classList.add('active');

        // Initialiser la nouvelle section
        if (sections[activeIndex + 1].id === 'questionnaire') {
            displayQuestion();
        } else if (sections[activeIndex + 1].id === 'tutorial') {
            displayTutorialStep();
        } else if (sections[activeIndex + 1].id === 'contact') {
            setupWhatsAppButton();
        }
    }
}

// Affichage des questions
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        nextSection();
        return;
    }

    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    container.innerHTML = `
        <div class="question-card fade-in">
            <p class="question-number">Question ${currentQuestion + 1} sur ${questions.length}</p>
            <h3 class="question-text">${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectAnswer(${index}, '${option.replace(/'/g, "\\'")}')" data-option="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Sélection d'une réponse
function selectAnswer(index, answer) {
    const question = questions[currentQuestion];
    answers[question.id] = answer;

    // Animation de sélection
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // Passer à la question suivante après un délai
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 500);
}

// Affichage des étapes du tutoriel
function displayTutorialStep() {
    if (currentTutorialStep >= tutorialSteps.length) {
        nextSection();
        return;
    }

    const step = tutorialSteps[currentTutorialStep];
    const imageContainer = document.getElementById('tutorialImage');
    const textContainer = document.getElementById('tutorialText');

    // Afficher l'image réelle du tutoriel
    imageContainer.innerHTML = `
        <div class="tutorial-image-wrapper fade-in">
            <img src="${step.image}" alt="Étape ${currentTutorialStep + 1}" class="tutorial-screenshot" />
            <div class="tutorial-step-badge">
                <span class="step-icon">${step.icon}</span>
                <span class="step-number">Étape ${currentTutorialStep + 1}/${tutorialSteps.length}</span>
            </div>
        </div>
    `;

    // Si c'est la dernière étape, ajouter le champ Device ID
    if (currentTutorialStep === tutorialSteps.length - 1) {
        textContainer.innerHTML = `
            <p class="fade-in">${step.text}</p>
            <div class="device-id-input fade-in">
                <label for="deviceIdField">Collez votre Device ID ici :</label>
                <input type="text" id="deviceIdField" placeholder="Exemple: ABC123XYZ789" />
            </div>
        `;
    } else {
        textContainer.innerHTML = `<p class="fade-in">${step.text}</p>`;
    }

    // Changer le texte du bouton pour la dernière étape
    const btn = document.getElementById('tutorialBtn');
    if (currentTutorialStep === tutorialSteps.length - 1) {
        btn.textContent = 'Terminer';
    } else {
        btn.textContent = 'OK';
    }
}

// Passer à l'étape suivante du tutoriel
function nextTutorialStep() {
    // Si c'est la dernière étape, récupérer le Device ID
    if (currentTutorialStep === tutorialSteps.length - 1) {
        const deviceIdField = document.getElementById('deviceIdField');
        if (deviceIdField) {
            deviceId = deviceIdField.value.trim();
            if (!deviceId) {
                alert('Veuillez entrer votre Device ID avant de continuer.');
                return;
            }
        }
    }

    currentTutorialStep++;
    displayTutorialStep();
}

// Configuration du bouton WhatsApp
function setupWhatsAppButton() {
    const btn = document.getElementById('whatsappBtn');
    btn.addEventListener('click', () => {
        // Construire le message avec le Device ID
        let message = "Bonjour, je viens par rapport à la connexion illimitée.%0A%0A";
        message += `Voici mon Device ID : ${deviceId}`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Utilitaire pour ajuster les couleurs
function adjustColor(color, amount) {
    const clamp = (val) => Math.min(Math.max(val, 0), 255);
    const num = parseInt(color.replace("#", ""), 16);
    const r = clamp((num >> 16) + amount);
    const g = clamp(((num >> 8) & 0x00FF) + amount);
    const b = clamp((num & 0x0000FF) + amount);
    return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('NetFlow - Site vitrine initialisé');
});
