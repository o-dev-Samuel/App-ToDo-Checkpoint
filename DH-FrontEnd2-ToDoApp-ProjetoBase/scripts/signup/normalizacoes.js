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
let password;
let repeatPasswoerd;

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

    console.log(`
    ${firstName} ${lastName} ${email}
    `)
})


    
