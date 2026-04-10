// кнопка бургер
function burgerMenu(selector) {
    const menu = document.querySelector(selector);
    const button = menu.querySelector('.burger-menu_button, .burger-menu_lines');
    const links = menu.querySelectorAll('.burger-menu_link');
    const overlay = menu.querySelector('.burger-menu_overlay');

    const toggleMenu = () => {
        menu.classList.toggle('burger-menu_active');

        const isActive = menu.classList.contains('burger-menu_active');
        document.body.style.overflow = isActive ? 'hidden' : 'visible';
    };

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    overlay.addEventListener('click', toggleMenu);
}

burgerMenu('.mobile-only-burger');


// Tod-добавление заданий
// function addTask() {
//     let input = document.querySelector()
// }
