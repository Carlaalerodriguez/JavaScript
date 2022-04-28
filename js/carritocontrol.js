

function capturarStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || []; // si el storage no existe retorno un array vacio
  }

function guardarStorage(elemento) {
    localStorage.setItem("carrito", JSON.stringify(elemento));
  }