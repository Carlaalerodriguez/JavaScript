const carrito = validarCarrito();

function validarCarrito() {
    const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log("carritoLocalStorage")
    console.log(carritoLocalStorage)
    if (carritoLocalStorage == null) {
       return [];
    } else {
        return carritoLocalStorage;
    }
}
document.getElementById("cantidad-prod").innerHTML = carrito.length;
