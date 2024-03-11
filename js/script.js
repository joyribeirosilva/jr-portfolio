document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 700;

    for (let i = 0; i < numberOfStars; i++) {
        createStar(starsContainer);
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});
//mouse
document.addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = (e.pageY - (Math.random() * 20)) + 'px';
    sparkle.style.left = (e.pageX - (Math.random() * 20)) + 'px';
    document.getElementById('sparkles').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});
//EFEITO DO NOME
document.addEventListener('DOMContentLoaded', function () {
    const typingContainer = document.getElementById('typing-container');
    const textToType = "JOYCE RIBEIRO";

    function typeNextLetter(index) {
        typingContainer.textContent += textToType[index];

        if (index < textToType.length - 1) {
            setTimeout(() => typeNextLetter(index + 1),300);
        } else {
            setTimeout(() => {
                typingContainer.textContent = '';
                typeNextLetter(0);
            }, 1000);
        }
    }

    typeNextLetter(0);
});




