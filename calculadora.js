const prompt = require("prompt-sync")();
var operacion, numero1, numero2
operacion = parseInt(prompt("Ingrese La opción deseada: 1.- Suma 2.- Resta 3.- Multiplicacion 4.- División 5. ¿Quieres salir? "));
switch (operacion) {
    case 1:
    console.log("Estas en suma: ")
    numero1 = parseInt(prompt("Ingresa un número: "));
    numero2 = parseInt(prompt("Ingresa un número: "));
    resultado = numero1 + numero2
    console.log(resultado)

    case 2:
    console.log("Estas en resta: ")
    numero1 = parseInt(prompt("Ingresa un número: "));
    numero2 = parseInt(prompt("Ingresa un número: "));
    resultado = numero1 - numero2
    console.log(resultado)

    case 3:
    console.log("Estas en multiplicación: ")
    numero1 = parseInt(prompt("Ingresa un número: "));
    numero2 = parseInt(prompt("Ingresa un número: "));
    resultado = numero1 * numero2
    console.log(resultado)
    
    case 4:
    console.log("Estas en división: ")
    numero1 = parseInt(prompt("Ingresa un número: "))
    numero2 = parseInt(prompt("Ingresa un número: "))
    resultado = numero1 / numero2
    console.log(resultado)

    case 5:
        operacion !== "s";
        break;
}
/* Este esta editado por mi*/