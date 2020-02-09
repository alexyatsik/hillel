const navListCoursesLink = document.getElementById('navListCourses');
const navListCoursesMenu = document.getElementById('navListCoursesMenu');

window.addEventListener('click', event => {

    event.preventDefault();

    if (event.target === navListCoursesLink) {
        navListCoursesMenu.classList.toggle('navigation__courses-list--hidden');
        return;
    } else if ( !isDescendant(navListCoursesMenu, event.target) && event.target !== navListCoursesMenu) {
        navListCoursesMenu.classList.add('navigation__courses-list--hidden');
        console.log(event.target);
    }
});