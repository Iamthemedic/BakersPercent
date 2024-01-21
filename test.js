
const Product = require("./ingredient")
const Recipe = require("./recipe")
// console.log("foobar")

var name = "flour"
var uom = "cup"
var amount = 2

var flour = new Product(name, uom, amount)
var water = new Product("Water","Oz", 1)

var ingredients = [
    flour,
    water
]

var myRecipe = new Recipe(name, ingredients)

console.log("Recipe: "+myRecipe.recipeName+","+myRecipe.ingredients[0].name)