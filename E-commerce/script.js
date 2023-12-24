//OPENING AND CLOSING HAMBURGER MENU//
const bar = document.getElementById('bars')
const nav = document.getElementById('navbar')
const closeButton = document.getElementById('close')

if(bar){
    bar.addEventListener('click', function () {
        nav.classList.add('active')

    })
}

if(closeButton){
    closeButton.addEventListener('click', function () {
        nav.classList.remove('active')

    })
}
