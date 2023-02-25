const menu = document.getElementById('menu')
const menunav = document.getElementById('menunav')

menu.addEventListener('click', clicar)

function clicar(){
    if(menunav.style.display === 'none'){
        menunav.style.display = 'flex'
    }else{
        menunav.style.display = 'none'
    }
}
