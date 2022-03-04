
/* aplicando funcion */

let si= prompt ("¿Quiere Iniciar su Compra?")

alert ("Inicie su Compra" + si)


/* declarando variable y aplicando sumatoria */

let precioSemaforo1 = 120000;
let precioSemaforo2 = 100000;
let precioSemaforo3 = 150000;
let precioSemáforo4 = 200000;
let precioLuminariaA = 200000;
let precioLuminariaB = 250000;
let precioFarola1 = 150000;
let precioFarola2 = 100000;
let precioColumna1 = 100000;
let precioColumna2 = 150000;
let precioColumna3 = 170000;

let preciosProductos = precioSemaforo1 + precioSemaforo2 + precioSemaforo3 + precioSemáforo4 + precioLuminariaA + precioLuminariaB + precioFarola1 + precioFarola2 + precioColumna1 + precioColumna2 + precioColumna3

console.log (preciosProductos)


/* flujos , ciclos y variables  */

let cantidadStockFarola1= 10;
let cantidadStockFarola2= 150;



function sumar (cantidadStockFarola1, cantidadStockFarola2) { 
    return cantidadStockFarola1 + cantidadStockFarola2
}
console.log(sumar(cantidadStockFarola1, cantidadStockFarola2))


if (cantidadStockFarola1 < 20) {
    
    console.log ("se debe reponer stock")
}


for (let cantidadStockFarola2=0; cantidadStockFarola2 <5; cantidadStockFarola2++) {
 console.log ("Su pedido sera derivado al area de ventas y se contactaran con usted")
}

let i= "Codigo 128"


for (let i = 0; i <= 10; i++) {
    
    if (i===0) {
        console.log (`Tipologia en produccion ya que el stock es ${i}`);
    }
}
