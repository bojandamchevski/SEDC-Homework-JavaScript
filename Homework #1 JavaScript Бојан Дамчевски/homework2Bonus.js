var numPhones
numPhones = 30
var numPhonesText = "The number of phones is:"
console.log(numPhonesText)
console.log(numPhones)

var price = prompt("Please enter the price of the phone ($119.95)")
var priceText = "The price is:"
console.log(priceText)
console.log(price)
var tax = prompt("Please enter the tax rate (5%)")
var taxText = "The tax rate (in %) is:"
console.log(taxText)
console.log(tax)

var fullCost
fullCost=numPhones*price
var fullCostText = "The full cost of the phones is:"
console.log(fullCostText)
console.log(fullCost)

var taxPhonesText = "The tax of the phones is:"
var fullCostTax

fullCostTax=fullCost*(tax/100)

console.log(taxPhonesText)
console.log(fullCostTax)
