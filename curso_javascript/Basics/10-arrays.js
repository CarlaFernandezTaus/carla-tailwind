
// Declaración

let myArray = [] // se recomienda hacer esta mejor que la segunda
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

//------------------------------------------------------------------------------------------------
//                                       METODOS COMUNES.                                         |
//------------------------------------------------------------------------------------------------

myArray = []

// push y pop

/*  
    Push sirve para introducir elementos al array
    Como en el array anterior predefinido esta vacio cada push va metiendo en la posicion
    correspondiente lo que nosotros introduzcamos
*/

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

/*
    Pop: Elimina el ULTIMO elemento de array.
    Cada vez que ejecutamos pop elimina el ultimo elemento del array y lo devuelve 
    si hacemos un console log como aqui abajo.
*/
console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray) // Se podria hacer, borrandolo y luego haciendo una variable para guardar ahi el elemento borrado.

// shift y unshift

console.log(myArray.shift()) // Shift sirve para eliminar el PRIMER elemento del array y lo devuelve
console.log(myArray). // Se elimina Brais te dice lo que se ha eliminado y lo que queda que es Moure

myArray.unshift("Brais", "mouredev") // unshift para agregar uno o mas elementos al PRINCIPIO del array
console.log(myArray) // lo imprimimos y sale con los nuevos elementos añadidos.

// length

console.log(myArray.length) // Te dice la longitud del array.

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)