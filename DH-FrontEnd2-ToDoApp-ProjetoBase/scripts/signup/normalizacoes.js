// Todos os dados serão em letras maiúsculas, com excessão da senha

// Capturando elementos
let btnCreate = document.getElementById('btnCreate')
let inputName = document.getElementById('inputName')
let inputLastName = document.getElementById('inputLastName')
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')
let inputRepeatPassword = document.getElementById('inputRepeatPassword')

let firstName;
let lastName;
let email;


btnCreate.addEventListener('click', (event) => {
    event.preventDefault()

    // Tornando os dados maiúsculos
    firstName = upperCase(inputName.value)
    lastName = upperCase(inputLastName.value)
    email = upperCase(inputEmail.value)

    // Removendo espaços desnecessários
    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()
    let password = inputPassword.value.trim()
    let repeatPasswoerd = inputRepeatPassword.value.trim()
    console.log(`
    ${firstName} ${lastName} ${email} ${password}
    `)

    
      

    let settings = {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
          })
        
    }

    console.log(settings)

    // Comunicando com a API
    fetch('http://todo-api.ctd.academy:3000/v1/users', settings)
    .then(response => {
         return response.json()
    })
    .then(data =>{
        console.log(data)
    })
    .catch((erro) => {
        console.log(erro)
    })

})



