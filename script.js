const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// Modal elements
const confirmModal = document.getElementById('confirmModal');
const modalQuestion = document.getElementById('modalQuestion');
const modalMessage = document.getElementById('modalMessage');
const modalYes = document.getElementById('modalYes');
const modalNo = document.getElementById('modalNo');

let noClickCount = 0;

// Romantic questions for "No" button
const romanticQuestions = [
    "Would you say yes if I brought you flowers? 🌸",
    "What if a puppy asked you for me? 🐶",
    "If I sang you a love song, would you reconsider? 🎶",
    "How about a ring and a puppy? 💍🐕",
    "Can you resist this much cuteness? 🥺🐾",
    "If I promised you chocolate and cuddles? 🍫🤗",
    "Would you be my Valentine if I made you smile? 😊",
    "What if I wrote you a poem? 📜💖",
    "If I gave you a hundred reasons to say yes? 💯",
    "Will you say yes for the puppies? 🐶💕"
];
let romanticIndex = 0;
let modalStep = 0;

yesBtn.addEventListener('click', () => {
    // Show confirmation modal at a random spot
    showModalAtRandom();
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    // Show a romantic question in a random spot
    showRomanticQuestion();
});

// Modal logic for Yes confirmation
function showModalAtRandom() {
    modalStep = 1;
    showModalStep();
}

function showModalStep() {
    confirmModal.classList.add('show');
    confirmModal.style.justifyContent = 'flex-start';
    confirmModal.style.alignItems = 'flex-start';
    const randX = Math.random() * 70; // percent
    const randY = Math.random() * 70;
    confirmModal.querySelector('.modal-content').style.marginLeft = randX + 'vw';
    confirmModal.querySelector('.modal-content').style.marginTop = randY + 'vh';
    if (modalStep === 1) {
        modalQuestion.textContent = 'Nijanga??';
        modalMessage.textContent = '';
    } else if (modalStep === 2) {
        modalQuestion.textContent = 'Oppukuntunava??';
        modalMessage.textContent = '';
    }
}

modalYes.addEventListener('click', () => {
    if (modalStep === 0) return;
    if (modalStep === 1) {
        modalStep = 2;
        showModalStep();
    } else if (modalStep === 2) {
        confirmModal.classList.remove('show');
        showBigKiss();
        yesBtn.disabled = true;
        noBtn.disabled = true;
        createConfetti();
        modalStep = 0;
    }
});

modalNo.addEventListener('click', () => {
    confirmModal.classList.remove('show');
    message.innerHTML = '';
    message.style.color = '#ff6b6b';
    modalStep = 0;
});

// Romantic question logic for No button
function showRomanticQuestion() {
    // Pick a random question
    const question = romanticQuestions[romanticIndex % romanticQuestions.length];
    romanticIndex++;
    // Show question in a random spot
    const qDiv = document.createElement('div');
    qDiv.className = 'message';
    qDiv.style.position = 'fixed';
    qDiv.style.zIndex = 9999;
    qDiv.style.color = '#d63384';
    qDiv.style.background = 'rgba(255,255,255,0.95)';
    qDiv.style.borderRadius = '20px';
    qDiv.style.padding = '18px 30px';
    qDiv.style.fontSize = '22px';
    qDiv.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
    qDiv.style.animation = 'popIn 0.6s ease-out';
    // Random position
    const x = Math.random() * (window.innerWidth - 320);
    const y = Math.random() * (window.innerHeight - 80);
    qDiv.style.left = x + 'px';
    qDiv.style.top = y + 'px';
    qDiv.textContent = question;
    document.body.appendChild(qDiv);
    setTimeout(() => qDiv.remove(), 3500);
}

// Create confetti effect
function createConfetti() {
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#d63384', '#667eea', '#764ba2', '#ffc0d9'][Math.floor(Math.random() * 4)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const xMove = Math.random() * 400 - 200;
        
        confetti.animate([
            {
                transform: 'translateY(0) translateX(0) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 10}px) translateX(${xMove}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Big kiss animation
function showBigKiss() {
    // Hide the question and buttons
    const card = document.querySelector('.card');
    if (card) {
        const h1 = card.querySelector('h1');
        const btnContainer = card.querySelector('.button-container');
        if (h1) h1.style.display = 'none';
        if (btnContainer) btnContainer.style.display = 'none';
    }
    message.innerHTML = '<div class="happie-message">Yay.. Happie Happie.... Happie</div>' +
        '<div class="love-image-container"><img src="final-love.jpg" alt="I Love You" class="love-img" /><div class="i-love-you-text">I Love You</div></div>';
    message.style.color = '#d63384';
}

// Add styles for the final image, text, and top message
const loveStyle = document.createElement('style');
loveStyle.innerHTML = `
  .happie-message { font-size: 2rem; color: #d63384; font-weight: bold; margin-bottom: 18px; text-align: center; animation: popIn 1s; }
  .love-image-container { display: flex; flex-direction: column; align-items: center; margin-top: 10px; }
  .love-img { max-width: 320px; width: 90vw; border-radius: 18px; box-shadow: 0 8px 32px rgba(0,0,0,0.18); margin-bottom: 18px; animation: popIn 1s; }
  .i-love-you-text { font-size: 2.2rem; color: #d63384; font-weight: bold; animation: popIn 1.2s; text-shadow: 0 2px 8px #fff6; }
`;
document.head.appendChild(loveStyle);
// Thank you message style
const style = document.createElement('style');
style.innerHTML = `.thank-you-message { font-size: 2rem; color: #d63384; margin-top: 30px; font-weight: bold; animation: popIn 0.8s; }`;
document.head.appendChild(style);
