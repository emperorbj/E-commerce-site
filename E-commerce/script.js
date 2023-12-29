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

  //JS FOR SINGLE PAGE: clicking to change product images dispalyed//
    const bigImage = document.getElementById('main-img')
    const smallImage = document.querySelectorAll('.small-img');
    
    smallImage[0].onclick = function(){
        bigImage.src = smallImage[0].src
    }

    smallImage[1].onclick = function(){
        bigImage.src = smallImage[1].src
    }

    smallImage[2].onclick = function(){
        bigImage.src = smallImage[2].src
    }
