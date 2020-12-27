var broj1 = prompt("Vnesi prv broj");
var broj2 = prompt("Vnesi vtor broj");
var broj3 = prompt("Vnesi tret broj");
var broj4 = prompt("Vnesi cetvrt broj");
var broj5 = prompt("Vnesi petti broj");

// --------------------------------------

var br1 = parseFloat(broj1);
var br2 = parseFloat(broj2);
var br3 = parseFloat(broj3);
var br4 = parseFloat(broj4);
var br5 = parseFloat(broj5);

// --------------------------------------
console.log("Prviot broj e:");
console.log(br1);

console.log("Vtoriot broj e:");
console.log(br2);

console.log("Tretiot broj e:");
console.log(br3);

console.log("Cetvrtiot broj e:");
console.log(br4);

console.log("Pettiot broj e:");
console.log(br5);

// --------------------------------------

if(br1>=br2 && br1>=br3 && br1>=br4 && br1>=br5){
    console.log("Prviot vnesen broj e najgolem broj");
}
else if(br2>=br1 && br2>=br3 && br2>=br4 && br2>=br5){
    console.log("Vtoriot vnesen broj e najgolem broj");
}
else if(br3>=br1 && br3>=br2 && br3>=br4 && br3>=br5){
    console.log("Tretiot vnesen broj e najgolem broj");
}
else if(br4>=br1 && br4>=br2 && br4>=br3 && br4>=br5){
    console.log("Cetvrtiot vnesen broj e najgolem broj");
}
else{
    console.log("Pettiot vnesen broj e najgolem broj");
}

// --------------------------------------