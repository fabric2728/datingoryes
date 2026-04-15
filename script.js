const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');

// Если нажала ДА
yesBtn.addEventListener('click', () => {
    messageDiv.innerHTML = '💖 Ура! Я тебя жду! 💖<br>Ты сделала мой день!';
    messageDiv.style.color = '#2ecc71';
    // Можно скрыть кнопки после ответа
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

// Эффект "убегающей" кнопки Нет
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 100;
    const maxY = window.innerHeight - noBtn.offsetHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transition = '0.2s ease';
});

// Если всё же умудрилась нажать Нет (на телефоне)
noBtn.addEventListener('click', () => {
    messageDiv.innerHTML = '😢 Может, передумаешь? Кнопка "Да" очень зеленая! 😉';
    messageDiv.style.color = '#e74c3c';
});