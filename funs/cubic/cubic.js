const lvl = document.getElementById('lvl')
const elcubic = document.querySelector('.cubic_box');
const elcubic2 = document.querySelector('.red_cubic');
const elenemy = document.querySelector('.enemy');
const elnum = document.querySelector('.number');
const elApply = document.querySelector('.apply');
const lvlBox = document.querySelector('.box');
const bgBright = document.querySelector('.gray');
const elTextInp = document.querySelector('.inp_text');
const bgInp = document.querySelector('#bg');
const body = document.querySelector('body');
const color = elTextInp.textContent.split('').reverse();
color.unshift('#');
const color2 = color.join('').slice(0, -1);
const random = Math.trunc(Math.random() * 500 + 1) + 'px, ' + Math.trunc(Math.random() * 300 + 1)
bgInp.addEventListener('input',()=>{
    body.style.background = bgInp.value;
    elcubic2.style.background = color2;
    elTextInp.textContent = bgInp.value;
})
elApply.addEventListener('click', () => {
    if (lvl.value !== 'none') {
        bgBright.classList.remove('gray');
        lvlBox.style.display = 'none';
    }
    if (lvl.value === 'ease') {
        // Функция для проверки столкновения
        function checkCollision1() {
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
        });
        setInterval(function () {
            checkCollision1();
        }, 100
        )
    }
    if (lvl.value === 'norm') {
        // Функция для проверки столкновения
        function checkCollision2() {
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
                elcubic2.style.transform = 'translate(' + random + 'px)';
                // Изменяем положение elcubic2
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
        });
        setInterval(function () {
            if (lvl.value == 'norm') {
                checkCollision2();
                elcubic2.style.transform = 'translate(' + Math.trunc(Math.random() * 1000 + 1) + 'px, ' + Math.trunc(Math.random() * 300 + 1) + 'px)';
            }
        }, 300
        )
    }
    if (lvl.value === 'hard') {
        // Функция для проверки столкновения
        function checkCollision3() {
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
                elcubic2.style.transform = 'translate(' + random + 'px)';
                // Изменяем положение elcubic2
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
        });
        setInterval(function () {
            checkCollision3();
            elcubic2.style.transform = 'translate(' + Math.trunc(Math.random() * 500 + 1) + 'px, ' + Math.trunc(Math.random() * 300 + 1) + 'px)';
        }, 100
        )
    }
})
document.addEventListener('DOMContentLoaded', () => {
    lvlBox.style.display = 'block';
    bgBright.classList.add('gray');
})