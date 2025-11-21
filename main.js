let image = document.querySelector(".image")
let coinShadow = document.querySelector(".coin-shadow")
let coinTitle = document.querySelector(".coin-title")
const triggerButton = document.querySelector(".button")

let coin = 0;

function triggerCoin () {
    image.classList.remove('spin')
    coinShadow.classList.add('unvisible')
    coin = Math.floor(Math.random() * 2)
    const result = coin === 1 ? true : false
    image.classList.add('spin')
    
    setTimeout (() => {
            if (result) {
        image.src = "./img/heads.svg"
        coinShadow.classList.remove('unvisible')
        coinTitle.textContent = "Heads"
    }
    
    else {
        image.src = "./img/tails.svg"
        coinShadow.classList.remove('unvisible')
        coinTitle.textContent = "Tails"
    }

    }, 380)
};

triggerButton.addEventListener('click', triggerCoin)
image.addEventListener('click', triggerCoin)

