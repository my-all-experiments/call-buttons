$(document).ready(function () {
    var arrMenus = ['Home', 'About', 'Projects', 'Contact'];
    for (let subMenu = 0; subMenu < arrMenus.length; subMenu++) {
        $('.website-nav-bar').append('<li "><a  class="sub-menu-'+ arrMenus[subMenu] + '" href="' + arrMenus[subMenu] + '">' + arrMenus[subMenu] + '</a></li>')
    }
});




