const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: canvas.height / 2,
    width: 70,
    height: 70,
    velocityY: 0,
    jumping: false
};

let isGameOver = false;
let gravity = 0.3;
let obstacles = [];

function drawPlayer() {
    // Draw image player
    var playerImage = new Image();
    playerImage.src = '/img/Im.jpg';
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function jump() {
    player.velocityY = -10;
    player.jumping = true;
}

function generateObstacle() {
    const obstacleWidth = 150;
    const obstacleHeight = 200;
    let obstacleX;
    let obstacleY;

    do {
        obstacleX = canvas.width;
        obstacleY = Math.random() * (canvas.height - obstacleHeight);
    } while (obstacles.some(obstacle => {
        // Проверяем пересечение с уже существующими препятствиями
        return (
            obstacleX < obstacle.x + obstacle.width &&
            obstacleX + obstacleWidth > obstacle.x &&
            obstacleY < obstacle.y + obstacle.height &&
            obstacleY + obstacleHeight > obstacle.y
        );
    }));

    const obstacle = {
        x: obstacleX,
        y: obstacleY,
        width: obstacleWidth,
        height: obstacleHeight
    };
    obstacles.push(obstacle);
}

function checkCollision() {
    for (let obstacle of obstacles) {
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            gameOver();
        }
    }
}

function gameOver() {
    isGameOver = true;
    obstacles = [];
    player.velocityY = 0;
    alert('Game Over! Press "OK" to restart.');
    resetGame();
}

function resetGame() {
    player.x = 50;
    player.y = canvas.height / 2;
    isGameOver = false;
}

function updateObstacles() {
    obstacles.forEach((obstacle) => {
        obstacle.x -= 5;
    });

    obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);

    if (Math.random() < 0.01) {
        generateObstacle();
    }
}

function updatePlayer() {
    player.velocityY += gravity;
    player.y += player.velocityY;

    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.jumping = false;
    }
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        var obstacleImage = new Image();
        obstacleImage.src = '/img/domla.jpg';
        ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!isGameOver) {
        updatePlayer();
        updateObstacles();
        checkCollision();
        drawPlayer();
        drawObstacles();
        requestAnimationFrame(update);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ц' || event.key === 'w' || event.key === 'W' || event.key === 'Ц') {
        jump();
    }
});

update();
