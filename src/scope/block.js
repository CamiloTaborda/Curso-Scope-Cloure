function fruit () {
    if (true) {
        var fruit1 = "banana"; /* function scope*/
        let fruit2 = "pera"; /* block scope */
        const fruit3 = "manzana"; /* block scope*/
        console.log(fruit1)
        console.log(fruit2)
        console.log(fruit3)
    }
}
fruit();