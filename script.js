
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const hearts = ['❤️', '💖', '💗', '💓', '💕', '💝'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    const size = 20 + Math.random() * 25;
    heart.style.fontSize = size + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    
    const duration = 3 + Math.random() * 4;
    heart.style.animationDuration = duration + 's';
    
    const delay = Math.random() * 2;
    heart.style.animationDelay = delay + 's';
    
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

let heartsInterval = setInterval(createHeart, 400);


const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');

//да
yesBtn.addEventListener('click', function() {
    console.log('Кнопка ДА нажата!');
    
    messageDiv.innerHTML = 'Супер) Жду с нетерпением! 💖<br><br><a href="https://t.me/sanchous62" target="_blank" class="telegram-link">ТГ</a>';
    messageDiv.style.color = '#ff6b81';
    
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    clearInterval(heartsInterval);
    heartsInterval = setInterval(createHeart, 120);
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createHeart(), i * 50);
    }
});

//неа
let originalX = 0;
let originalY = 0;

function getRandomPositionNearOriginal(btnRect) {
    const RADIUS = 350;
    const PADDING = 15;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * RADIUS;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    let newX = originalX + offsetX;
    let newY = originalY + offsetY;
    
    newX = Math.max(PADDING, Math.min(newX, window.innerWidth - btnRect.width - PADDING));
    newY = Math.max(PADDING, Math.min(newY, window.innerHeight - btnRect.height - PADDING));
    
    return { x: newX, y: newY };
}

window.addEventListener('load', () => {
    const rect = noBtn.getBoundingClientRect();
    originalX = rect.left;
    originalY = rect.top;
});

noBtn.addEventListener('mouseover', () => {
    const btnRect = noBtn.getBoundingClientRect();
    const safePos = getRandomPositionNearOriginal(btnRect);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = safePos.x + 'px';
    noBtn.style.top = safePos.y + 'px';
});

noBtn.addEventListener('click', () => {
    messageDiv.innerHTML = '';
    messageDiv.style.color = '#ff6b81';
    
    const btnRect = noBtn.getBoundingClientRect();
    const safePos = getRandomPositionNearOriginal(btnRect);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = safePos.x + 'px';
    noBtn.style.top = safePos.y + 'px';
});