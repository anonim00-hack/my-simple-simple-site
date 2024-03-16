const body = document.querySelector('body')
const boy = document.querySelector('.boy')
function restart() {
    let random = Math.trunc(Math.random() * 4 + 1)
    if (random == 1) {
        body.classList.add('bod1');
        body.classList.remove('bod2', 'bod3', 'bod4');
        boy.classList.add('e1');
        boy.classList.remove('e2', 'e3', 'e4');
        boy.style.transform = 'translate(' + Math.trunc(Math.random() * 1100 + 1) + 'px,' + Math.trunc(Math.random() * 500 + 1) + 'px' + ')';
    }
    if (random == 2) {
        body.classList.add('bod2');
        body.classList.remove('bod1', 'bod3', 'bod4');
        boy.classList.add('e2');
        boy.classList.remove('e1', 'e3', 'e4');
        boy.style.transform = 'translate(' + Math.trunc(Math.random() * 1100 + 1) + 'px,' + Math.trunc(Math.random() * 500 + 1) + 'px' + ')';
    }
    if (random == 3) {
        body.classList.add('bod3');
        body.classList.remove('bod2', 'bod1', 'bod4');
        boy.classList.add('e3');
        boy.classList.remove('e2', 'e1', 'e4');
        boy.style.transform = 'translate(' + Math.trunc(Math.random() * 1100 + 1) + 'px,' + Math.trunc(Math.random() * 500 + 1) + 'px' + ')';
    }
    if (random == 4) {
        body.classList.add('bod4');
        body.classList.remove('bod2', 'bod3', 'bod1');
        boy.classList.add('e4');
        boy.classList.remove('e2', 'e3', 'e1');
        boy.style.transform = 'translate(' + Math.trunc(Math.random() * 1100 + 1) + 'px,' + Math.trunc(Math.random() * 500 + 1) + 'px' + ')';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    restart()
})
boy.addEventListener('mousedown', () => {
    restart()
})