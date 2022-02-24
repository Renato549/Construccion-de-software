const nom = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings = ""
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ''
  if(nombre.value.lenght < 3){
    warnings += 'El nombre no es valido <br>'
    entrar = true

  }
  if(!regexEmail.test(email.value)){
    warnings += 'El email no es valido <br>'
    entrar = true

  }
  if(pass.value.lenght){
    warnings += 'El email no es valido <br>'
    entrar = true

  }
  if(entrar){
    parrafo.innerHTML = warnings
  }

  
})

