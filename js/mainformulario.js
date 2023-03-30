class Cliente {
     constructor(nombre,apellido,mail){
     this.nombre = nombre;
     this.apellido = apellido;
     this.mail = mail;
     }
}

const arrayClientes = [];


const formulario = document.getElementById('formulario');   
formulario.addEventListener("submit", (e)=>{

     e.preventDefault();
 
     const nombre = document.getElementById("nombre");
     const apellido = document.getElementById ("apellido");
     const mail = document.getElementById ("mail");
 
     const cliente = new Cliente (nombre.value, apellido.value, mail.value);
 
     arrayClientes.push(cliente);
     console.log(arrayClientes);
 
     formulario.reset();

     console.log(arrayClientes);

localStorage.setItem("arrayClientes", JSON.stringify(arrayClientes));
let arrayClienteAgregado = JSON.parse(localStorage.getItem("arrayClientes"));

arrayClienteAgregado();
})
