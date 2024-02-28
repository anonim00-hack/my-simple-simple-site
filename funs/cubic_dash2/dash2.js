document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameZone = document.getElementById('game-zone');
    let isJumping = false;

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ' && !isJumping) {
            jump();
            player.classList = player.classList.add
        }
    });

    function jump() {
        isJumping = true;
        player.style.animation = 'jumpAnimation 1s';
        setTimeout(() => {
            player.style.animation = 'none';
            isJumping = false;
        }, 1000);
    }
    setInterval(function () {
        const cub = document.createElement('div');
        gameZone.appendChild(cub)
        cub.classList.add('cub');
    }, 2000
    )
})