
const productos = [
    {id:1, Titulo: 'Semáfros', Artefacto: 'Semáforo 3 cabezales x 200',Precio: '$200000', Imagen:'https://ss-static-01.esmsv.com/id/106234/productos/obtenerimagen/?id=217&useDensity=true&width=1440&height=711&tipoEscala=contain'},
    {id:2, Titulo: 'Semáfros', Artefacto: 'Semáforo 2 cabezales x 200',Precio: '$100000', Imagen:'https://www.acordgroup.com/wp-content/uploads/2018/07/cabezal-semaforo-doble.jpg'},
    {id:3, Titulo: 'Semáfros', Artefacto: 'Semáforo 300 +2 cabezales x 200 mm',Precio: '$4500000', Imagen:'https://www.acordgroup.com/wp-content/uploads/2018/07/optica-peatonal.jpg'},
    {id:4, Titulo: 'Semáfros', Artefacto: 'Semáforo 3 cabezales x 200',Precio: '$800000', Imagen:'https://www.acordgroup.com/wp-content/uploads/2018/07/cabezal-flecha-2.jpg'},
    {id:5, Titulo: 'Farolas', Artefacto: 'Farola 440',Precio: '$900000', Imagen: 'https://www.fwiluminacionsrl.com.ar/img/productos/grandes/9500-2.jpg'},
    {id:6, Titulo: 'Farolas', Artefacto: 'Farola Stadia',Precio: '$100000', Imagen:'https://www.fwiluminacionsrl.com.ar/img/productos/grandes/9500-2.jpg'},
    {id:7, Titulo: 'Columnas', Artefacto: 'Columna 620',Precio: '$100000', Imagen:'https://www.fwiluminacionsrl.com.ar/img/productos/grandes/4600-2-columna-T.jpg'},
    {id:8, Titulo: 'Columnas', Artefacto: 'Columna 750',Precio: '$90000', Imagen:'https://www.fwiluminacionsrl.com.ar/img/productos/grandes/4600-2-columna-T.jpg'},
    {id:9, Titulo: 'Columnas', Artefacto: 'Columna 428',Precio: '$50000', Imagen:'https://www.fwiluminacionsrl.com.ar/img/productos/grandes/4600-2-columna-T.jpg'},
];
generarCards(productos);


const agregarAlCarrito = (idproductos) => {
    const productoAgregado = productos.find(productos => productos.id === idproductos);
    //* agrego al carrito*//
    carrito.push(productoAgregado);
     //* actualizando  storage del carrito *//
    localStorage.setItem ("carrito", JSON.stringify(carrito));
    document.getElementById("cantidad-prod").innerHTML = carrito.length
    swal({
        title: "Carrito",
        text: "El producto se agregó exitosamente!",
        icon: "success",
        button: "Continuar Comprando",
    })

    
};

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``; 
    productosAMostrar.forEach((elementoDelArray) => {
            acumuladorDeCards += `<div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${elementoDelArray.Imagen}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${elementoDelArray.Artefacto}</h5>
                        <!-- Product price-->
                        <span class="text-muuted text-decoraction-line-through">${elementoDelArray.Precio} </span>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <button 
                    onclick="agregarAlCarrito(${elementoDelArray.id})"
                    class="btn btn-outline-dark mt-auto" href="#">
                    Add  cart
                </button>
                    </div>
                </div>
            </div>
        </div>`;
        });
            
        

        mostrarCards(acumuladorDeCards);
    }




function mostrarCards(acumuladorDeCards){
    document.getElementById ("Listado-productos").innerHTML = acumuladorDeCards
}