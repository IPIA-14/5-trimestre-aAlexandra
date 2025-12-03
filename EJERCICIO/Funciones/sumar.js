/*function sumar(a, b) {
    sumar = 0
    sumar = a + b
    return sumar
}
console.log("El resultado de la suma es: " + sumar(4, 7))*/

console.log("------------------------------")

function sumar  (a, b) {
    suma = a + b 
    return suma
}

function imprimir (){
    resultado = sumar(4, 7)
    console.log("El resultado de la suma es: " + resultado)
}

res = sumar (4, 7)
function imprimir2 (res){
    console.log(res)
}
imprimir()
imprimir2(res)


//Funcion flecha 
const suma2 = (a, b) => 
    a + b;
console.log(suma2(43, 17));