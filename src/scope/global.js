// variables

var a; /*declarando*/ 
var b = "b"; /*declaramos / asignamos */
b = "bb"; /*reasignamos*/ 
var a = "aa"; /*redeclaracion*/

// Golbal Scope

var fruit = "apple"; /*global*/

function bestFruit () {
    console.log(fruit);
}

bestFruit();

// ----------------------------------------------------------------

function countries () {
    country = "colombia"
    console.log(country)
}

countries();
console.log(country);

