const elbody = document.querySelector('body')
const elinp = document.querySelector('input')
const elp = document.querySelector('p')
function one() {
    elinp.value += '1';
}
function two() {
    elinp.value += '2';
}
function tree() {
    elinp.value += '3';
}
function four() {
    elinp.value += '4';
}
function five() {
    elinp.value += '5';
}
function six() {
    elinp.value += '6';
}
function seven() {
    elinp.value += '7';
}
function eight() {
    elinp.value += '8';
}
function nine() {
    elinp.value += '9';
}
function zero() {
    elinp.value += '0';
}
function backspace() {
    var value = elinp.value;
    elinp.value = value.slice(0, -1);
}

function plus() {
    elinp.value += '+';
    elinp.value = elinp.value.replaceAll('++','+')
}
function minus() {
    elinp.value += '-';
    elinp.value = elinp.value.replaceAll('--','-')
}
function skob1() {
    elinp.value += '(';
}
function skob2() {
    elinp.value += ')';
}
function umn() {
    elinp.value += '*';
    elinp.value = elinp.value.replaceAll('**','*')
}
function del() {
    elinp.value += '/';
    elinp.value = elinp.value.replaceAll('//','/')
}
function ravno() {
    elp.textContent = eval(elinp.value)
}