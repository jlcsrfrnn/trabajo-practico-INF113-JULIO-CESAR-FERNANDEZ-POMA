const formu = document.getElementById("formulario2");
const inputs = document.querySelectorAll("#formula");
const parrafo = document.getElementById("warnings")




formu.addEventListener("submit", e=> {
  e.preventDefault()
  let formdata = new FormData(e.target);
  let warnings = ""
  let entrar = false
  let nombres = formdata.get("nombres");
  let apellidos = formdata.get("apellidos");
  let edad = formdata.get("edad");
  let telefono = formdata.get("telefono");
  let nacimiento = formdata.get("nacimiento");
  let email = formdata.get("email");
  let comentario = formdata.get("comentario");
  parrafo.innerHTML = ""
  

  if (nombres.length === 0) {
    alert("Ingrese sus nombres.");
    entrar = true
  }
  if (!nombres.match(/[a-zA-z]\D$/)){
    alert("ERROR ingrese sus verdaderos nombres.");
    entrar = true
   }
  if (apellidos.length === 0) {
    alert("Ingrese sus apellidos.");
    entrar = true
  }
  if (!apellidos.match(/[a-zA-z]\D$/)){
    alert("ERROR ingrese sus verdaderos apellidos.");
    entrar = true
   }
  if (edad.length === 0) {
    alert("Ingrese su edad.");
    entrar = true
  }
  if (edad < 18) {
    alert("Eres menor pide ayuda a tus papas.");
    entrar = true
  } 
  if (!edad.match(/[0-9]$/)){
    alert("ERROR ingrese su verdada edad.");
    entrar = true
   }
  if (telefono.length === 0) {
    alert("Ingrese su numero telefonico.");
    entrar = true
  }
  if (!telefono.match(/[0-9]$/)){
    alert("ERROR ingrese su verdadero numero telefonico.");
    entrar = true
   }
  if (nacimiento.length === 0) {
    alert("Ingrese su fecha de nacimiento.");
    entrar = true
  }
  if (email.length === 0) {
    alert("Ingrese su correo electronico - email.");
    entrar = true
  }
  if (!email.match(/\S+@\S+\.\S+/)){
  alert("ERROR ingrese un correo electronico - email valido.");
  entrar = true
 }

  if (comentario.length === 0) {
    alert("Ingrese su opinión de la pagina Web.");
    entrar = true
  }
  if (comentario.length < 15){
    alert("ERROR ingrese un verdadero comentario.");
    entrar = true
   }

   if(entrar){
    parrafo.innerHTML = warnings
}else{
    parrafo.innerHTML = "Enviado"
}
})
