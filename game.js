score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 39) {
        char = document.querySelector('.char');
        char.classList.add('anido');
        setTimeout(() => {
            char.classList.remove('anido')
        }, 600);
    }
    if (e.keyCode == 38) {
        char = document.querySelector('.char');
        charX = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
        char.style.left = charX + 112 + "px";
    }
    if (e.keyCode == 37) {
        char = document.querySelector('.char');
        charX = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
        char.style.left = (charX - 112) + "px";
    }
}

setInterval(() => {
    char = document.querySelector('.char');
    over = document.querySelector('.over');
    obs = document.querySelector('.obs');

    dx = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(char, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obs, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obs, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        over.innerHTML = "Game is Over please reload page "
        obs.classList.remove('obsani')

    }
    else if (offsetX < 146 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obs, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obs.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 600);

    }

}, 10);

function updateScore(score) {
    cont.innerHTML = "Score is: " + score
}