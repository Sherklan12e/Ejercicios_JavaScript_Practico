document.addEventListener('DOMContentLoaded', function () {
    const navbarList = document.getElementById('navbar-list');
    const navbarToggle = document.getElementById('navbar-toggle');

    navbarToggle.addEventListener('click', function () {
        navbarList.classList.toggle('show');
    });
});
