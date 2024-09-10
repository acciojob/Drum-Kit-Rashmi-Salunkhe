//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    // Add event listener for keydown event
    window.addEventListener('keydown', playSound);
    
    function playSound(e) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (key) {
            // Trigger the sound associated with the key
            const audio = new Audio(`sounds/${key.dataset.key}.mp3`);
            audio.play();
            key.classList.add('playing');
        }
    }
    
    // Remove the 'playing' class after animation ends
    keys.forEach(key => {
        key.addEventListener('transitionend', () => {
            key.classList.remove('playing');
        });
    });
});
