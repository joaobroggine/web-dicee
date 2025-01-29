var arrayNumbers = [
    1,2,3,4,5,6
]

var randomNumber = arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)]
var randomNumber2 = arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)]

document.querySelector("img").src = "./images/dice" + randomNumber + ".png"

document.querySelector(".img2").src = "./images/dice" + randomNumber2 + ".png"

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins"
}
else if (randomNumber < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Wins"
}
