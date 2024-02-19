const elcubic = document.querySelector('.cubic_box');
const elcubic2 = document.querySelector('.red_cubic');
const elnum = document.querySelector('.number');

// Функция для проверки столкновения
function checkCollision() {
    // Получаем текущие позиции обоих элементов
    const elcubicRect = elcubic.getBoundingClientRect();
    const elcubic2Rect = elcubic2.getBoundingClientRect();

    // Проверяем на столкновение
    if (
        elcubicRect.left <= elcubic2Rect.right &&
        elcubicRect.top <= elcubic2Rect.bottom &&
        elcubicRect.right >= elcubic2Rect.left &&
        elcubicRect.bottom >= elcubic2Rect.top
    ) {
        elnum.textContent = +elnum.textContent + 1;
        // Изменяем положение elcubic2
        elcubic2.style.transform = 'translate(' + Math.trunc(Math.random() * 500 + 1) + 'px, ' + Math.trunc(Math.random() * 300 + 1) + 'px)';
    }
}
// Обработчик события нажатия клавиши
document.addEventListener('keypress', (event) => {
    if (event.key == 'w' || event.key == 'ц') {
        elcubic.style.transform = elcubic.style.transform + 'translateY(-20px)';
    }
    if (event.key == 'a' || event.key == 'ф') {
        elcubic.style.transform = elcubic.style.transform + 'translateX(-20px)';
    }
    if (event.key == 's' || event.key == 'ы') {
        elcubic.style.transform = elcubic.style.transform + 'translateY(20px)';
    }
    if (event.key == 'd' || event.key == 'в') {
        elcubic.style.transform = elcubic.style.transform + 'translateX(20px)';
    }

    // Вызываем функцию проверки столкновения после каждого изменения положения элементов
    checkCollision();
});