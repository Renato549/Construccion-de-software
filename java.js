
const pass = document.getElementById("password")
const vpass = document.getElementById("vpassword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings = ""
  parrafo.innerHTML = ""
  if(vpass != pass){
    warnings += "La contraseña no es valida <br>"
    entrar = true

  }
  if(entrar){
    parrafo.innerHTML = warnings
  }

  
})

