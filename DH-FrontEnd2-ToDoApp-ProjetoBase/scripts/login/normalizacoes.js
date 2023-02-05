// Capturando elementos
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')
let btnAcessar = document.getElementById('btnAcessar')


// Normalizando: Tornando o email maiúsculo e retirando os espaços nas extremidades dos dados

btnAcessar.addEventListener('click', (event) => {
    event.preventDefault()
    let email = upperCase(inputEmail.value)
    email = email.trim()
    let password = inputPassword.value.trim()
    alert(`${email}
    ${password}`)
    alert("Logou")

    let settingsLogin = {
        method: 'POST',

        headers: {
            'Content-Type':'application/json'
        },

        body: JSON.stringify({
            "email": email,
            "password": password
          })
    }

    console.log(settingsLogin)

    fetch(`${baseUrl}/login`, settingsLogin)
    .then((response) =>{
        response.json()
    })
    .then((jwt) =>{
        alert(jwt)
    })
    .catch((erro) =>{
        alert(erro)
    })
})


