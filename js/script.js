
let productos = [];

fetch('./js/data.json')
.then((res) => res.json())
.then((data) => {
    productos = data.productos;
    generarCards(data.productos);
})





const agregarAlCarrito = (idproductos) => {
    console.log("Ingrese a agregarAlCarrito")
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