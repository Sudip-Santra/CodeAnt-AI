// Select the elements
const menuIcon = document.querySelector('.sidebar .menu-icon');
const closeIcon = document.querySelector('.sidebar .close-icon');
const sidebarMenu = document.querySelector('.sidebar-menu');

function toggleMenu() {
    const isMenuVisible = sidebarMenu.classList.toggle('show'); 
    menuIcon.style.display = isMenuVisible ? 'none' : 'block'; 
    closeIcon.style.display = isMenuVisible ? 'block' : 'none'; 
}

