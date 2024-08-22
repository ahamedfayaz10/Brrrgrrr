var listOfIngredients = document.getElementsByClassName("ingredients-list")[0]
var patty = document.getElementById("patty")
var cheese = document.getElementById("cheese")
var tomatoes = document.getElementById("tomatoes")
var onions = document.getElementById("onions")
var lettuce = document.getElementById("lettuce")
var inr = document.getElementById("price")
const bunprice = 30
let currentprice = bunprice
const prices = {
    patty: 80,
    cheese: 10,
    onions: 20,
    tomatoes: 20,
    lettuce: 20
}

function add(event){
    var ingredient = event.target.id
    var ingredientName = event.target.textContent
    var listItems = Array.from(listOfIngredients.children)

    var existingItem = listItems.find(item => item.textContent === ingredientName)

    if (existingItem){
        listOfIngredients.removeChild(existingItem)
        currentprice -= prices[ingredient]
        inr.textContent = "INR " + currentprice
        event.target.style.backgroundColor = ""
    }
    else{
        var list = document.createElement("p")
        list.textContent = ingredientName
        listOfIngredients.appendChild(list)
        currentprice += prices[ingredient]
        inr.textContent = "INR " + currentprice
        event.target.style.backgroundColor = "rgb(231, 212, 40)"
    }
}

patty.addEventListener("click",add)
cheese.addEventListener("click",add)
tomatoes.addEventListener("click",add)
onions.addEventListener("click",add)
lettuce.addEventListener("click",add)

var popup = document.getElementsByClassName("popup")[0]
function show(){
    popup.style.display = "block"
}
function cancel(){
    popup.style.display = "none"
}


