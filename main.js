//inicio
function saludoNombre(){
  alert("Bienvenido a PepShopp")
  let nombreUsuario = prompt ("Ingrese su Nombre para continuar")
  while (nombreUsuario ===""){
    nombreUsuario = prompt ("Ingrese su Nombre para continuar")
  }
  return nombreUsuario
}
let nombre =saludoNombre();
console.log(nombre);

//productos
class Producto{
  constructor (nombre, precio){
  this.nombre =nombre;
  this.precio =precio;
  this.precioIva = function(){
    this.precioIva = this.precio *1.21
  }
}}

const catChow =new Producto("kilo CatChow",690)
const dogChow =new Producto("kilo DogChow", 690)
const cachorros1 =new Producto("kilo CatChow cachorro", 790)
const cachorros2 =new Producto("kilo DogChow cachorro", 790)
const juguete1 =new Producto("Juguete Cat", 300)
const jueguete2 =new Producto("Juguete Dog", 330)

const arrayProductos = [catChow, dogChow, cachorros1, cachorros2, juguete1, jueguete2];
console.log(arrayProductos);

catChow.precioIva()
console.log (catChow);
dogChow.precioIva()
console.log (dogChow);
cachorros1.precioIva()
console.log (cachorros1);
cachorros2.precioIva()
console.log (cachorros2);
juguete1.precioIva()
console.log (juguete1);
jueguete2.precioIva()
console.log (jueguete2);


let selecProducto
function mostrarProductos(){
   selecProducto = parseInt(prompt("Productos en stock:\n1:kilo CatChow.\n2:kilo DogChow.\n3:kilo CatChow Cachorro.\n4:kilo DogChow cachorro.\n5:Juguete Cat(raton).\n6:Juguete Dog(hueso)"));
  while(selecProducto <1 || selecProducto >6){
    parseInt(prompt("Productos en stock:\n1:kilo CatChow.\n2:kilo DogChow.\n3:kilo CatChow Cachorro.\n4:kilo DogChow cachorro.\n5:Juguete Cat(raton).\n6:Juguete Dog(hueso)"));
  }
console.log(mostrarProductos);
}
mostrarProductos()
console.log(selecProducto);

let selecPago
function medioDePago(){
  selecPago = parseInt(prompt("Medio de pago disponibles:\n1-Debito(10% de descuento).\n2-Credito."));
 while(selecPago <1 || selecPago >2){
   parseInt(prompt("Medio de pago disponibles:\n1-Debito(10% de descuento).\n2-Credito."));
 }}
 medioDePago()

selecProducto= selecProducto-1
let descuentoDebito = (arrayProductos[selecProducto].precioIva)*0.10
console.log(descuentoDebito);

if (selecPago===1 ){
  const descuentoConDebito = arrayProductos.map((producto=>{
  return{
    nombre: producto.nombre,
    precio: (producto.precioIva - descuentoDebito)
    }
  }))
  
  console.log(descuentoConDebito[selecProducto].precio);
  alert("Total a pagar: $"+ descuentoConDebito[selecProducto].precio);
} else {
  alert("Total a pagar: $"+ arrayProductos[selecProducto].precioIva);
}
alert("Gracias por tu compra!")























  
     

