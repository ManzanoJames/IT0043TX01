function toggleMenu() {
    const menu = document.querySelector(".MenuLinks");
    const icon = document.querySelector(".HamburgerIcon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}