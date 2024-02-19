const elcubic = document.querySelector('.cubic_box');
const elcubic2 = document.querySelector('.red_cubic');
const elnum = document.querySelector('.number');

function ok() {
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
    const elbox = document.querySelector('.box')
    const elbr = document.querySelector('.bright')
    elbox.style.display = 'none'
    elbr.style.display = 'none'
}
const elbox = document.querySelector('.box')
const elbr = document.querySelector('.bright')
const eldes = document.querySelector('.description')
const elease = document.querySelector('.ease')
const elnorm = document.querySelector('.norm')
const elhard = document.querySelector('.hard')
elbox.style.display = 'none'
document.addEventListener('DOMContentLoaded', () => {
    elbox.style.display = 'block'
    elbr.style.display = 'flex'
})
elease.addEventListener('click', () => {
    eldes.textContent = 'its ease lvl , sphere slowly'
})
elnorm.addEventListener('click', () => {
    eldes.textContent = 'its normal lvl , sphere speed'
})
elhard.addEventListener('click', () => {
    eldes.textContent = 'its hard lvl , sphere speed'
})