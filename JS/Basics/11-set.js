// Set

// Declaración -- se tiene que declarar asi
let mySet = new Set()
console.log(mySet).  //set vacio 

// Inicialización
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"]) // Para inicializar un set con datos van entre [] 
console.log(mySet)


//------------------------------------------------------------------------------------------------
//                                       METODOS COMUNES.                                         |
//------------------------------------------------------------------------------------------------

// ADD Y DELETE

mySet.add("https://moure.dev") // añade un nuevo elemento al array
console.log(mySet)

mySet.delete("https://moure.dev") // elimina un elemento del array
console.log(mySet)

/* 
    Elimina un valor especifico del array devolviendote un true o false. 
    Te devuelve true si el elemento en el Set existe y ha sido eliminado
    Te devuelve falso si el elemento en el Set NO existe
*/
console.log(mySet.delete("Brais")) // Existe --> True
console.log(mySet.delete(4)) // NO Existe --> False

console.log(mySet)

// HAS -- Comprobamos si esiste, te devuelve tambiñen un boolean si existe true si no false

console.log(mySet.has("Moure")) // Existe en el array moure te devuelve TRUE
console.log(mySet.has("Brais")) // NO Existe en el array Brais te devuelve FALSE

// SIZE -- Te devuelve el tamaño del array (parecido al length)
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet) //Crear variable, llamamos al array, decimos de donde cogemos (from) un set
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray) // Inicializar un nuevo set y le pasamos el array
console.log(mySet)

//------------------------------------------------------------------------------------------------
//                                   DIFERENCIA ENTRE SET Y ARRAY                                 |
//------------------------------------------------------------------------------------------------

// Los SET NO admite duplicados mientras que los ARRAYS SI

mySet.add("braismoure@mouredev.com") // SI ORIGINAL
mySet.add("braismoure@mouredev.com") // NO
mySet.add("braismoure@mouredev.com") // NO
mySet.add("BraisMoure@mouredev.com") // SI DIFERNTE CON MAYUSCULA
console.log(mySet)

