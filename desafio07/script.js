const filterElement = document.querySelector("header form input")
const cards = document.querySelectorAll("section.cards .card")

filterElement.addEventListener("input", filterCards)

function filterCards() {
if(filterElement.value){
for(let card of cards){
let title = card.querySelector('h3')
title = title.textContent.toLowerCase()
console.log(title)
let filterText = filterElement.value.toLowerCase()
if(!title.includes(filterText)){

card.style.display='none'

}else{
card.style.display = "block"


}



}


}else{
for(card of cards){
card.style.display='block'

}

}

}
