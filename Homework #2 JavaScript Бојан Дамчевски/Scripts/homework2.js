var ime = prompt("Vnesi ime");

var prezime = prompt("Vnesi prezime");

var pozdrav = "Zdravo,";

var pretstavIme = "moeto ime e";

var pretstavPrezime = "i moeto prezime e";

var pozdravVol2 = "imaj ubav den.";

var prvDel = pozdrav + " " + pretstavIme + " " + ime;

var vtorDel = " " + pretstavPrezime + " " + prezime + ", " + pozdravVol2;

console.log(prvDel+vtorDel);

// -----------POINAKOV NACIN-----------

var ime1 = prompt("Vnesi ime");

var prezime1 = prompt("Vnesi prezime");

var pozdrav1 = "Zdravo";

var pozdravVol21 = "imaj ubav den.";

var celosno = pozdrav1 + ", se vikam " + ime1 + ", i se prezivam " + prezime1 + ", " + pozdravVol21;

console.log(celosno);

// -----------USTE EDEN NACIN-----------

var ime2 = prompt("Vnesi ime");

var prezime2 = prompt("Vnesi prezime");

var celosno2 = `Zdravo, jas sum ${ime2} i prezime mi e ${prezime2}, imaj ubav den`;

console.log(celosno2);