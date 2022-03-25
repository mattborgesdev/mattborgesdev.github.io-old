export default function initMenuMobile() {

    console.log('js funcionando!!');

}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
}

menuButton.addEventListener('click', openMenu);