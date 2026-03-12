// 1.Escribe un comentario en una líneaa
    // Esto sería un comentario en una línea

// 2.Escribe un comentario de varias lineas
    /* Esto seria un comentario 
        de varias 
        lineas 
    
        */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
    let nombre = "Carla"
    console.log(nombre)

    let años = 18
    console.log("Tengo " + años + "años")

    let soyCarla = true;
    console.log("Soy carla? " + soyCarla)

    let comemosHoy = null
    console.log("comemos hoy: " + comemosHoy)

    let numeroGrande = 19204894823982948492482048924820948294n
    console.log("Esto es un numero grande: " + numeroGrande)

    let otroGrande = BigInt(985278472895895787937859637896873968)
    console.log("Esto es otro numero grande" + otroGrande)

// 4. Modifica los valores de las variables por otros del mismo tipo
    soyCarla = false
    console.log("Soy carla? " + soyCarla)

    años = 20
    console.log("Ahora tengo: " + años + " años")
