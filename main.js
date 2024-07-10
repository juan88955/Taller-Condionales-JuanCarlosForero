// //01 comparar numeros
// let numero1 = 12;
// let numero2 = 9;

// if (numero1 > numero2) {
//     console.log("El primer número (12) es mayor que el segundo número (9).");
// }


// //02 comparar igualdad
// let numero1 = 3;
// let numero2 = 2;

// if (numero1 === numero2) {
//     console.log("Los números son iguales.");
// } else {
//     console.log("Los números son diferentes.");
// }


// //03 numero es el mas grande o si son iguales
// let num1 = 5;
// let num2 = 3;

// if (num1 > num2) {
//     console.log("El primer número (" + num1 + ") es el más grande.");
// } else if (num2 > num1) {
//     console.log("El segundo número (" + num2 + ") es el más grande.");
// } else {
//     console.log("Los números son iguales (" + num1 + ").");
// }


// //04 numero chico 
// let num1 = 32;
// let num2 = 24;
// let num3 = 12;

// if (num1 <= num2 && num1 <= num3) {
//     alert("El número más chico es: " + num1);
// } else if (num2 <= num1 && num2 <= num3) {
//     alert("El número más chico es: " + num2);
// } else {
//     alert("El número más chico es: " + num3);
// }


// //05 Comparar altura-Comparar edad
// let persona1 = {
//     nombre: "Luz",
//     edad: 48,
//     altura: 158
// };

// let persona2 = {
//     nombre: "David",
//     edad: 26,
//     altura: 180
// };

// if (persona1.altura > persona2.altura) {
//    alert(persona1.nombre + " es más alta que " + persona2.nombre);
// } else if (persona2.altura > persona1.altura) {
//    alert(persona2.nombre + " es más alto que " + persona1.nombre);
// } else {
//    alert(persona1.nombre + " y " + persona2.nombre + " tienen la misma altura");
// }

// if (persona1.edad > persona2.edad) {
//    alert(persona1.nombre + " es mayor que " + persona2.nombre);
// } else if (persona2.edad > persona1.edad) {
//    alert(persona2.nombre + " es mayor que " + persona1.nombre);
// } else {
//    alert(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad");
// }


// //06 capacitado para conducir
// let nombre = prompt("Ingresa tu nombre:");
// let edad = (prompt("Ingresa tu edad:"));
// let altura = (prompt("Ingresa tu altura en centímetros:"));
// let vision = (prompt("Ingresa tu visión del 1 al 10:"));

// let puedeConducir = edad >= 18 && altura > 150 && vision >= 8;

// if (puedeConducir) {
//     alert(nombre + ", estás capacitado para conducir.");
// } else {
//     alert(nombre + ", no estás capacitado para conducir.");
// }

// console.log("Detalles:");
// console.log("Nombre: " + nombre);
// console.log("Edad: " + edad + " años");
// console.log("Altura: " + altura + " cm");
// console.log("Visión: " + vision + "/10");
// console.log("¿Puede conducir?: " + (puedeConducir ? "Sí" : "No"));


// //07 verificacion de ingreso
// let nombre = prompt("Ingresa tu nombre:");
// let pase = prompt("¿Qué tipo de pase tienes? (vip/normal)");
// let tieneEntrada = prompt("¿Tienes entrada? (si/no)");
// let nombreVIP = "Carlos";

// if (nombre === nombreVIP || pase === "vip") {
//     alert("¡Bienvenid@ " + nombre + "!");
// } else if (tieneEntrada === "si") {
//     let usarEntrada = prompt("¿Deseas usar tu entrada? (si/no)");
//     if (usarEntrada === "si") {
//         alert("¡Bienvenid@ " + nombre + "!");
//     } else {
//         alert("Gracias por tu visita. ¡Hasta pronto!");
//     }
// } else {
//     let quiereComprar = prompt("¿Deseas comprar una entrada? (si/no)");
//     if (quiereComprar === "si") {
//         let dinero = prompt("¿Cuánto dinero tienes disponible?");
//         if ((dinero) >= 1000) {
//             alert("Venta exitosa. ¡Bienvenid@ " + nombre + "!");
//         } else {
//             alert("Lo siento, no tienes suficiente dinero para comprar la entrada.");
//         }
//     } else {
//         alert("Gracias por tu visita. ¡Hasta pronto!");
//     }
// }


// //08  número adivinar
let numeroIncognita = 7;

let numeroIngresado = prompt("Adivina el número (entre 1 y 10). Intento 1:");
numeroIngresado = Number(numeroIngresado);

if (numeroIngresado === numeroIncognita) {
    alert("Ganaste, has adivinado el número.");
} else if (numeroIngresado < numeroIncognita) {
    alert("El número ingresado es menor, vuelve a intentarlo.");
} else {
    alert("El número ingresado es mayor, vuelve a intentarlo.");
}

if (numeroIngresado !== numeroIncognita) {
    numeroIngresado = prompt("Adivina el número (entre 1 y 10). Intento 2:");
    numeroIngresado = Number(numeroIngresado);

    if (numeroIngresado === numeroIncognita) {
        alert("Ganaste, has adivinado el número.");
    } else if (numeroIngresado < numeroIncognita) {
        alert("El número ingresado es menor, vuelve a intentarlo.");
    } else {
        alert("El número ingresado es mayor, vuelve a intentarlo.");
    }
}

if (numeroIngresado !== numeroIncognita) {
    numeroIngresado = prompt("Adivina el número (entre 1 y 10). Intento 3:");
    numeroIngresado = Number(numeroIngresado);

    if (numeroIngresado === numeroIncognita) {
        alert("Ganaste, has adivinado el número.");
    } else {
        alert("Lo siento, no adivinaste. El número era " + numeroIncognita);
    }
}



// //09 edad 
// let edad = prompt("Por favor, ingresa tu edad:");
// edad = Number(edad);

// if (edad >= 0 && edad <= 12) {
//     alert("Eres un infante.");
// } else if (edad >= 13 && edad <= 18) {
//     alert("Eres un adolescente.");
// } else if (edad >= 19 && edad <= 45) {
//     alert("Eres un mayor joven.");
// } else if (edad > 45 && edad <= 100) {
//     alert("Eres un anciano.");
// } else if (edad > 100) {
//     let confirmacion = confirm("¿En realidad tienes " + edad + " años?");
//     if (confirmacion) {
//         alert("Eres muy mayor.");
//     } else {
//         alert("Entiendo, parece que hubo un error al ingresar la edad.");
//     }
// } else {
//     alert("La edad ingresada no es válida.");
// }


// //10 PIEDRA, PAPEL o TIJERAS
// let jugador1 = prompt("Jugador 1, elige PIEDRA, PAPEL o TIJERAS:").toUpperCase();
// let jugador2 = prompt("Jugador 2, elige PIEDRA, PAPEL o TIJERAS:").toUpperCase();

// if ((jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERAS") &&
//     (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERAS")) {

//     if (jugador1 === jugador2) {
//         alert("¡Es un empate!");
//     } else if (
//         (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
//         (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
//         (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
//     ) {
//         alert("¡Jugador 1 gana!");
//     } else {
//         alert("¡Jugador 2 gana!");
//     }

// } else {
//     alert("¡Uno de los jugadores ha hecho trampa!");
// }

// //11 mostrar mensaje segun color ingresado
// let colores = prompt("¿Qué tal andas hoy? Dime un color.");

// switch (colores) {
//     case "rojo":
//         alert("Uy, estas enojado!");
//         break;
//     case "azul":
//         alert("Día tranqui, colega.");
//         break;
//     case "verde":
//         alert("Hoy puede ser un día genial :)");
//         break;
//     case "amarillo":
//         alert("Como el dia soleado de hoy");
//         break;
//     case "gris":
//         alert("Ánimo, que no todo es tan malo.");
//         break;
//     case "negro":
//         alert("Uy tienes, días complicados.");
//         break;
//     default:
//         alert("Interesante color. pero no lo tengo :(");
// }


// //12 operaciones matemáticas básicas según la entrada del usuario
// let num1 = parseFloat(prompt("Ingresa el primer número:"));
// let num2 = parseFloat(prompt("Ingresa el segundo número:"));
// let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division):").toLowerCase();
// let resultado;

// switch (operacion) {
//     case "suma":
//         resultado = num1 + num2;
//         alert("El resultado de la suma es: " + resultado);
//         break;
//     case "resta":
//         resultado = num1 - num2;
//         alert("El resultado de la resta es: " + resultado);
//         break;
//     case "multiplicacion":
//         resultado = num1 * num2;
//         alert("El resultado de la multiplicación es: " + resultado);
//         break;
//     case "division":
//         if (num2 !== 0) {
//             resultado = num1 / num2;
//             alert("El resultado de la división es: " + resultado);
//         } else {
//             alert("ERROR: No se puede dividir por cero");
//         }
//         break;
//     default:
//         alert("Operación no reconocida. Por favor, ingresa suma, resta, multiplicacion o division.");
// }


// //13 pedir datos al usuario
// let nombre = prompt("Ingrese su nombre:");
// let apellido = prompt("Ingrese su apellido:");
// let numeroDocumento = prompt("Ingrese su número de documento:");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");
// let lugarNacimiento = prompt("Ingrese su lugar de nacimiento:");

// let mensaje = "Datos ingresados:\n" +
//     "Nombre: " + nombre + "\n" +
//     "Apellido: " + apellido + "\n" +
//     "Número de Documento: " + numeroDocumento + "\n" +
//     "Fecha de Nacimiento: " + fechaNacimiento + "\n" +
//     "Lugar de Nacimiento: " + lugarNacimiento + "\n\n" +
//     "¿Están correctos estos datos?";

// let confirmacion = confirm(mensaje);

// if (confirmacion) {
//     let dni = {
//         nombre: nombre,
//         apellido: apellido,
//         numeroDocumento: numeroDocumento,
//         fechaNacimiento: fechaNacimiento,
//         lugarNacimiento: lugarNacimiento
//     };

//     console.table(dni);

//     console.log("Registro exitoso.");
// } else {

//     console.log("Vuelva a intentarlo en 1 mes.");
// }