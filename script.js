// JavaScript code to show and hide the loader and overlay
document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('.central-section');
    const loader = document.querySelector('.loader');
    const overlay = document.querySelector('.overlay');

    // Show the loader and overlay
    loader.style.display = 'block';
    overlay.style.display = 'block';

    // Set a timer to hide the loader and overlay after 3 seconds (adjust the time as needed)
    const loaderTimer = setTimeout(() => {
        loader.style.display = 'none';
        overlay.style.display = 'none';
        mainSection.classList.remove('loading');
    }, 2000); // 3000 milliseconds (3 seconds)
});
