// Strings (cadenas de texto)

// Concatenación

let myName = "Carla"
let greeting = "Hola, " + myName + "!" //greeting como saludo
console.log(greeting)
console.log(typeof greeting) //typeof para saber el tipo que es

// Longitud

console.log(greeting.length) //Saber el tamaño del texto

// Acceso a caracteres (se empieza a contar desde la posicion 0)

console.log(greeting[0]) //te dice que hay en la posicion 0
console.log(greeting[11]) // te dice que hay en la posicion 11

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice de donde encuentra ese indice
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola")) // Incluye (comprueba si existe --> booleans)
console.log(greeting.includes("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 10)) // Sección (se queda entre se rango)
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo (primero lo que tiene que encontrar y luego lo que quiere reemplazar )

// Template literals (plantillas literales)

// Strings en varias líneas, solo se puede hacer con estas comillas ``
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)