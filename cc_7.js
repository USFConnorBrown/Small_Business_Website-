//Step 5:
document .addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('newHeadline');
    const button = document.getElementById('updateCTA');
    const cta = document.querySelector('.hero h2');
    button.addEventListener('click', () => {
       const newText = input.ariaValueMax.trim();
       if (newText !== '') {
           cta.textContent = newText;
       }
    });
});