const container4 = document.querySelector('.container4');
const formContainer = document.querySelector('.form-container');
const container5 = document.querySelector('.container5');

let currentContainer = container4;

function showNextContainer() {
    currentContainer.style.display = 'none';

    if (currentContainer === container4) {
        formContainer.style.display = 'block';
        currentContainer = formContainer;
    } else if (currentContainer === formContainer) {
        container5.style.display = 'block';
        currentContainer = container5;
    } else if (currentContainer === container5) {
        container4.style.display = 'block';
        currentContainer = container4;
    }
}

setInterval(showNextContainer, 5000); 
const gameBlock = document.querySelector('.gameBlock');
const gameBlock1 = document.querySelector('.gameBlock1');
const gameBlock2 = document.querySelector('.gameBlock2');

let currentGameContainer = gameBlock; // Исправленное имя

function switchToNextGame() { 
    currentGameContainer.classList.remove('active');

    if (currentGameContainer === gameBlock) {
        gameBlock1.classList.add('active');
        currentGameContainer = gameBlock1;
    } else if (currentGameContainer === gameBlock1) {
        gameBlock2.classList.add('active');
        currentGameContainer = gameBlock2;
    } else if (currentGameContainer === gameBlock2) {
        gameBlock.classList.add('active');
        currentGameContainer = gameBlock;
    }
}

setInterval(switchToNextGame, 5000); 

function openInstagram() {
    window.open('https://www.instagram.com/no1.balykchy/', '_blank');
}

function scroollToPages(sectionClass) {
    // 1. Покажите элемент
    const section = document.querySelector("." + sectionClass);
    section.classList.add('active');
  
    // 2. Сделайте скроллинг к элементу
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
    // 3. Сделайте элемент невидимым
    section.classList.remove('active');
  }
  function openWhatsapp() {
    const phoneNumber = "+996556020769"; // Номер телефона
    const message = "Привет! Хочу забронировать место."; // Сообщение (можно изменить)

    // Формируем ссылку на WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Откроем ссылку в новом окне
    window.open(whatsappUrl, '_blank');
}
function switchElementPosition() {
    const myElement = document.querySelector('.my-element');
    if (window.innerWidth < 768) { 
      myElement.style.order = '1'; // Отображаем первым в мобильной версии
    } else { 
      myElement.style.order = '2'; // Отображаем вторым в десктопной версии
    }
  }
  
  // Вызываем функцию при загрузке страницы и при изменении размера окна
  window.onload = switchElementPosition;
  window.addEventListener('resize', switchElementPosition);