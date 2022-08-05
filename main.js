const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
let flag = true;

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    if(flag){
        desktopMenu.classList.remove('inactive');
        flag = false;
    }else{
        desktopMenu.classList.add('inactive');
        flag = true;
    }
}
 