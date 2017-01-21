const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this
        .classList
        .add('trigger-enter');
    background
        .classList
        .add('open');

    setTimeout(() => this.classList.contains('trigger-enter') && this
        .classList
        .add('trigger-enter-active'),
    150);

    const dropdown = this.querySelector('.dropdown');
    const dropdown_coords = dropdown.getBoundingClientRect();
    const nav_coords = nav.getBoundingClientRect();

    background.style.width = `${dropdown_coords.width}px`;
    background.style.height = `${dropdown_coords.height}px`;

    background.style.transform = `
        translate(${
            dropdown_coords.left - nav_coords.left
        }px, ${
                dropdown_coords.top - nav_coords.top
        }px)
    `;
}

function handleLeave() {
    this
        .classList
        .remove('trigger-enter', 'trigger-enter-active');
    background
        .classList
        .remove('open');
}

triggers
.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers
.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
