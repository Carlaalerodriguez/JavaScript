


const objetos={
    Titulo: 'Tipologia',
    Producto: 'Semaforo',
    Precio: 8000000,
}

agregaralcarrito (objetos);

function agregaralcarrito (productos){

    const textoAMostrar= `Agregaste a tu carrito una ${productos.Titulo} de ${productos.Producto} a ${productos.Precio}`;
    console.log(textoAMostrar);
}

/* ver con bruno */ 

function Stock (producto, cantidad){

    this.producto= producto;
    this.cantidad= cantidad;

}

const STOCK= new Stock ('Semaforo', 100)

console.log(STOCK);





/*recorriendo arrays*/

const tipologiaSemaforos = ['lateral', 'no vidente', '3d', 'conico']

for(let i=0; i< tipologiaSemaforos.length; i++){
    console.log (tipologiaSemaforos[i]);
}

/*busqueda y filtrado */


const producto = [
    {nombre: 'semaforo', precio: 25000},
    {nombre: 'columna', precio: 882000},
    {nombre: 'farola', precio: 225000},
  
]

const resultado = producto.filter((el) => el.nombre.includes('semaforo'))
const resultado2 = producto.filter((el) => el.precio > 1000)

console.log(resultado)
console.log(resultado2) // []
