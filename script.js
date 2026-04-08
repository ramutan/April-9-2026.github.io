const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// Sound references
const soundJump = document.getElementById('sound-jump');
const soundCoin = document.getElementById('sound-coin');

// Handle YES click: Play coin sound and switch pages
yesBtn.addEventListener('click', () => {
    soundCoin.play(); // Play "Ca-ching!" sound
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

// Handle NO hover: Play jump sound and move the button
noBtn.addEventListener('mouseover', () => {
    soundJump.play(); // Play jump sound

    // Calculate a random position anywhere on the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
