
let productos = [];
const divCarrito = document.querySelector("#divCarrito");
const contenederPoductos = document.querySelector("#contenedorProductos");
const contenederCarrito = document.querySelector("#contenedorCarrito");
const btnCarrito = document.querySelector("#btnCarrito");
const burbujaCarrito = document.querySelector("#cantidad-prod");
const totalCarrito = document.querySelector("#totalCarrito");
const selectOrdenar = document.querySelector("#ordenar");
const selectFiltrar = document.querySelector("#categorias");
const inputBuscar = document.querySelector("#buscar");

fetch('./js/data.json')
.then((res) => res.json())
.then((data) => {
    productos = data.productos;
    generarCards(data.productos);
})


function verCarrito() {
    mostrarCarrito()
    if (divCarrito.style.display === "none") {
        divCarrito.style.display = "inline";
    } else {
      divCarrito.style.display = "none";
    }
  }

  function confirmarCompra() {
    eliminarCarrito();
    swal({
        title: "Carrito",
        text: "Gracias por su compra",
        icon: "success",
        button: "Salir",
    })
  }

function eliminarCarrito() {
    swal({
        dangerMode: true,
        title: '¿Desea eliminar todos los productos del carrito de compra?',
        buttons: {
            cancel: true,
            confirm: true,
          },
      }).then((value) => {
        if (value) {
            localStorage.removeItem("carrito");
            localStorage.clear()
            mostrarCarrito();
            swal("Carrito ha sido limpiado!", {
              icon: "success",
            })
          } else {
            mostrarCarrito();
          }
      })
    mostrarCarrito();
  }

  function mostrarCarrito() {
    const carrito = capturarStorage();
    contenederCarrito.innerHTML = "";
    carrito.forEach((producto) => {
      contenederCarrito.innerHTML += `
          <tr>
              <td class="text-white">${producto.Artefacto}</td>
              <td class="text-white">${producto.Precio}</td>
              <td class="text-white">${producto.Precio * producto.Cantidad}</td>
              <td class="text-white"><button class="btn btn-danger" onclick="eliminarProductoCarrito(${
                producto.id
              })">X</button></td>
          </tr>
          `;
    });
    cantidadCarrito();
    mostrarTotalCarrito();
  }

  
  function cantidadCarrito() {
    const carrito = capturarStorage();
    burbujaCarrito.innerHTML = carrito.length;
  }

  function mostrarTotalCarrito() {
    //calculo el valor total
    const carrito = capturarStorage();
    let total = 0;
    carrito.forEach((producto) => {
        total = parseInt(total) + parseInt(producto.Precio);
      });
    totalCarrito.innerHTML = total;
  }


  function eliminarProductoCarrito(id) {
    const carrito = capturarStorage();
    const resultado = carrito.filter((prod) => prod.id !== id); 
    console.log(resultado)
    mostrarCarrito();
    guardarStorage(resultado);
    mostrarCarrito();
  }
  

  function dentroDeCarrito(id) {
    //verifico si el producto esta dentro del carrito retorna true o false
    const carrito = capturarStorage();
    return carrito.find((e) => e.id === id);
  }
const agregarAlCarrito = (idproductos) => {
    const carrito = capturarStorage()
    const productoAgregado = productos.find(productos => productos.id === idproductos);
    //* agrego al carrito*//
    carrito.push(productoAgregado);
     //* actualizando  storage del carrito *//
    localStorage.setItem ("carrito", JSON.stringify(carrito));
    burbujaCarrito.innerHTML = carrito.length
    swal({
        title: "Carrito",
        text: "El producto se agregó exitosamente!",
        icon: "success",
        button: "Continuar Comprando",
    })
    mostrarCarrito()

    
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
                        <span class="text-muted text-decoraction-line-through">$${elementoDelArray.Precio} </span>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <button 
                    onclick="agregarAlCarrito(${elementoDelArray.id})"
                    class="btn btn-outline-dark mt-auto" href="#">
                    Agregar al carrito
                </button>
                    </div>
                </div>
            </div>
        </div>`;
        });
            
        

        mostrarCards(acumuladorDeCards);
    }
//mostrarProductos(productos);
mostrarCarrito();
cantidadCarrito();


function mostrarCards(acumuladorDeCards){
    document.getElementById ("Listado-productos").innerHTML = acumuladorDeCards
}
