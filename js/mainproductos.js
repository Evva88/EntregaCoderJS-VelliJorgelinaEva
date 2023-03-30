
const productos = [
  {
    nombre: "Cat Chow",
    precio: 8000,
    id: 1,
    img: "./assets/CatChowAdultoCarne-8kg.jpg"
  },
  {
    nombre: 'Dog Chow',
    precio: 8000,
    id: 2,
    img: './assets/perro.jpg'
  },
 {
    nombre: 'Cat Chow Gatitos',
    precio: 9000,
    id: 3,
    img: './assets/gatitos.jpg'
  },
  {
    nombre: 'Dog Chow Perritos',
    precio: 9000,
    id: 4,
    img: './assets/perritos.jpg'
  },
  {
    nombre: 'Juguete gatito',
    precio: 300,
    id: 5,
    img: './assets/j.gato.jpg'
  },
  {
    nombre: 'Juguete perrito',
    precio: 300,
    id: 6,
    img: './assets/j.perro.jpg'
  }
];


//console.log(productos);

function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS(){
  return JSON.parse(localStorage.getItem(productos));
}

guardarProductosLS(productos);


function renderProductos() {
  const productos = cargarProductosLS();

  
  renderProductos();
  let salida = "";

  for (productos of producto) {
    salida += `<div class="col-md-6 my-3">
               <div class="card tex-center">
               <img src="${producto.img}" alt="${producto.nombre}" class="card-img-top" />
               <div class="card-body">
                <p class="card-text">${producto.nombre} ${producto.precio}</p>
                <p><button class="btn btn-warning" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar (+)</button>
               </div>
               </div>
               </div>`;
}

  document.getElementById("productos").innerHTML = salida;
}

renderProductos();
/*renderBotonCarrito();

/*function guardarProductosCarrito(productos) {
  localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  renderProductosCarrito();
  renderBotonCarrito();
}

function estaEnElCarrito(id) {
  const carrito = cargarProductosCarrito(); 
  
  return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id) {
  const carrito = cargarProductosCarrito();
  
  if (estaEnElCarrito(id)) {
      let pos = carrito.findIndex(item => item.id === id);
      carrito[pos].cantidad += 1;
  } else {
      const producto = buscarProducto(id);
      producto.cantidad = 1;
      carrito.push(producto);
  }

  guardarProductosCarrito(carrito);
  renderBotonCarrito();    
}

function eliminarProducto(id) {
  const carrito = cargarProductosCarrito();
  const productos = carrito.filter(item => item.id !== id);
  guardarProductosCarrito(productos);
  renderProductosCarrito();
  renderBotonCarrito();
}

function buscarProducto(id) { //5
  const productos = cargarProductosLS();

  return productos.find(item => item.id === id); 
}

function totalProductosCarrito() {
  const productos = cargarProductosCarrito();

  return productos.reduce((total, item) => total += item.cantidad, 0);
}

function totalPagarCarrito() {
  const productos = cargarProductosCarrito();

  return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

function renderBotonCarrito() {
  document.getElementById("carrito").innerText = totalProductosCarrito();
}
 
function renderProductosCarrito() {
  const productos = cargarProductosCarrito();
  let salida = "";

  if (totalProductosCarrito() > 0) {
      salida += `<table class="table">
      <tr>
      <td colspan="5" class="text-end"><button class="btn btn-warning" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
      <tr>`;

      for (producto of productos) {
          salida += `<tr>
          <td><img src="${"images/" + producto.imagen}" alt="${producto.nombre}" width="80" /></td>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad} X $${producto.precio}</td>
          <td>$${producto.cantidad * producto.precio}</td>
          <td class="text-end"><button class="btn btn-warning" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
          </tr>`;
      }

      salida += `<tr>
      <td colspan="3">Total a Pagar</td>
      <td>$${totalPagarCarrito()}</td>
      <td>&nbsp;</td>
      </tr>`;
      salida += `</table>`;
  } else {
      salida = `<div class="alert alert-danger text-center" role="alert">No se agregaron Productos en el Carrito!</div>
    `
  }

  document.getElementById("productos").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();*/































  
     

