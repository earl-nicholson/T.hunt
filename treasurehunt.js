//alert users with a popup window
//alert("Let's play a game")

var treasure = Math.floor(Math.random() * 8)
var bomb = Math.floor(Math.random() * 8)
console.log("treasure", treasure)
console.log("bomb", bomb)

if (treasure === bomb) {
  bomb = Math.abs(bomb - 1)
} else {
  bomb = bomb
}
console.log (`new bomb`, bomb)

//function
const jigSaw = (id) => {
  console.log("id", id)
  if(id === treasure) {
    document.getElementById(id).innerHTML = "You Live 😀" //"You Win"
  } else if(id === bomb) {
    document.getElementById(id).innerHTML = "You Died 💀"//, //alert("You Lose")
  } else {
    document.getElementById(id).innerHTML = "👻"
  }
}
