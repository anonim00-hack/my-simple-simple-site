const player = document.querySelector('.player');
const gameZone = document.querySelector('.game_zone');
let jumping = 0;
document.addEventListener('mousedown',()=>{
    jumping = jumping + 1;
})
document.addEventListener('t',()=>{
    console.log(jumping);
})