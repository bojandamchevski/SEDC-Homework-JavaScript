var numPhonesText = "The number of phones is:"
console.log(numPhonesText)
var numPhones = 30
console.log(numPhones)

var priceText = "The price is:"
console.log(priceText)
var price = 119.95
console.log(price)

var taxText = "The tax rate in % is:"
console.log(taxText)
var tax = 5
console.log(tax)

// -------------------------------------------------------------

var oneCostText = "The cost of one phone is:"
console.log(oneCostText)
var oneCost = null
oneCost=1*price
console.log(oneCost)

var oneCostTaxText = "The tax of one phone is:"
console.log(oneCostTaxText)
var oneCostTax = null
oneCostTax=oneCost*(tax/100)
console.log(oneCostTax)

//-------------------------------------------------------------

var fullCostText = "The full cost of all the phones is:"
console.log(fullCostText)
var fullCost = null
fullCost=numPhones*price
console.log(fullCost)

var fullCostTaxText = "The tax of all the phones is:"
console.log(fullCostTaxText)
var fullCostTax = null
fullCostTax=fullCost*(tax/100)
console.log(fullCostTax)