let confirm = document.querySelector(".confirmaciones");
let botonLoad = document.querySelector("#cargar");
let botonRefreash = document.querySelector("#refrescar");
let ul = document.querySelector("#ulid");
let inputs = document.querySelectorAll(".inputs");

// inputs
let titulo = document.querySelector("#nombrelibro");
let autor = document.querySelector("#nombreAutor");
let direccion = document.querySelector("#direccion");

let body = document.querySelector("body");

class Pedido {
  constructor(titulo, autor, direccion) {
    this.titulo = titulo;
    this.autor = autor;
    this.direccion = direccion;

    this.cargarItems(titulo, autor, direccion);
  }

  cargarItems(titulo, autor, direccion) {
    let elementoNuevo = document.createElement("li");
    elementoNuevo.textContent =
      "=> The book entitled " +
      titulo +
      ", by the author  " +
      autor +
      " will be taken to the adress " +
      direccion;

    ul.appendChild(elementoNuevo);

    /* for (let i = 0; i < elementoNuevo.length; i++) {
      if (elementoNuevo.length <= 3) {
        botonLoad.disabled = true;
        alert("Ingresa maximo 5 pedidos");
      }
    }
    
*/
    botonRefreash.addEventListener("click", function () {
      elementoNuevo.remove();
      //window.location.href = "/";
    });
  }
}

//----------------------
botonLoad.addEventListener("click", function () {
  if (!titulo.value == "") {
    let items = new Pedido(titulo.value, autor.value, direccion.value);
  }
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = null;
  }

  // botonLoad.disabled = true;
});
