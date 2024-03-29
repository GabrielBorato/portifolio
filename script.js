const changeThemeButton = document.getElementById('changeThemeButton');
const body = document.body;
const container = document.querySelector('.container');
const linksContainer = document.querySelector('.links-container');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');

changeThemeButton.addEventListener('click', () => {
    // Toggle classes for body, container, and linksContainer
    body.classList.toggle('light-theme');
    container.classList.toggle('light-theme');
    linksContainer.classList.toggle('light-theme');
    container1.classList.toggle('light-theme');
    container2.classList.toggle('light-theme');
    container3.classList.toggle('light-theme');
    container4.classList.toggle('light-theme');
    container5.classList.toggle('light-theme');
});
