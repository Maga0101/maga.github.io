// Функция для цифровых часов
function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Форматируем время с ведущими нулями
    const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    
    // Выводим время в цифровые часы
    document.querySelector('.digital-clock').textContent = timeString;
}

// Функция для аналоговых часов (у вас уже есть)
function updateAnalogClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

// Обновляем оба типа часов
function updateAllClocks() {
    updateDigitalClock();
    updateAnalogClock();
}

// Запускаем часы
setInterval(updateAllClocks, 1000);
updateAllClocks(); // Первый запуск сразу