// Reasignar y Redeclarar 

var firstName; //undefined
firstName = "camilo";
console.log (firstName);

// ------------------------------------------------
var lastName = "camilo";  // declarar / asignar
lastName = "ana";  // reasignar 
console.log(lastName);

// ------------------------------------------
var secondName = "camilo"; // declarar / asignar 
var secondName = "ana";  // reasignando
console.log(secondName);

// --------------------------------------------

let fruit = "apple"; 
fruit = "kiwi";
// con let se puede reasignar pero no redeclarar

const animal = "dog"
animal = "cat"; // error
console.log(animal);
// con const no se puede ni reasignar ni redeclarar


const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);