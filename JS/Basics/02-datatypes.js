// TIPOS DE DATOS PRIMITIVOS

// String (cadenas de texto)
let name = "Carla Fernandez"
let alias = 'Carla'
let email = `carlafernandez@carla.com`

// Number (Números)
let age = 37 // Entero
let height = 1.77 // Decimal

//Boolen (booleanos)
let isTeacher = false
let isStudent = true

//Undefined --> no tiene ningun valor asociado
let undefinedValue
console.log(undefinedValue)

// Null --> Valor asociado pero nulo
let nullValue = null
console.log(nullValue)

// Symbol (identificadores unicos para objetos )
let mySymbol = Symbol("mysymbol")

//BigInt (Numero muy grande que para printearlo por pantalla y que salga entero se pone una n al final)
let numeroGrande = 1000000049209834982394824994028394284309242934878973543n
console.log(numeroGrande)

let numeroGrandesinN = 143729847834729803482938209348920480294382
console.log(numeroGrandesinN)

let numeroConBigInt = BigInt(729845723957252248274052745892852) // En vez de terminar con n se puede meter en un () y también saldría entero
console.log(numeroConBigInt)