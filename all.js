document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-mobile');
    var openIcon = document.querySelector('.menu-toggle-open');
    var closeIcon = document.querySelector('.menu-toggle-close');

    // 切换菜单的显示状态
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menu.style.display = 'none';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
