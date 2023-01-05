// Capturando elementos
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')
let btnAcessar = document.getElementById('btnAcessar')


// Normalizando: Tornando o email minúsculo e retirando os espaços nas extremidades dos dados

btnAcessar.addEventListener('click', (event) => {
    event.preventDefault()
    let email = inputEmail.value.toLowerCase()
    email = email.trim()
    let password = inputPassword.value.trim()
    alert(`${email}
    ${password}`)
    alert("Logou")
})


