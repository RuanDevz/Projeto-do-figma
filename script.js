const menu = document.getElementById('menu')
const menunav = document.getElementById('menunav')

menu.addEventListener('click', clicar)

function clicar(){
    if(menunav.style.display === 'flex'){
        menunav.style.display = 'none'
    }else{
        menunav.style.display = 'flex'
    }
}