let image = document.querySelector(".image")
let coinTitle = document.querySelector(".coin-title")
const triggerButton = document.querySelector(".button")

let coin = 0;

function triggerCoin () {
    coin = Math.floor(Math.random() * 2)
    const result = coin === 1 ? true : false
    console.log(result)
    if (result) {
        image.src = "./img/heads.svg"
        coinTitle.textContent = "Heads"
    }
    
    else {
        image.src = "./img/tails.svg"
        coinTitle.textContent = "Tails"
    }
}

triggerButton.addEventListener('click', triggerCoin)
image.addEventListener('click', triggerCoin)

