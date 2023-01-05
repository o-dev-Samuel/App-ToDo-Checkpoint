// Todos os dados serão em letras maiúsculas, com excessão da senha

// Capturando elementos
let btnCreate = document.getElementById('btnCreate')
let inputName = document.getElementById('inputName')
let inputLastName = document.getElementById('inputLastName')
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')
let inputRepeatPassword = document.getElementById('inputRepeatPassword')

let name;
let lastName;
let email;
let password;
let repeatPasswoerd;

btnCreate.addEventListener('click', (event) => {
    event.preventDefault()
    
    // Função para tornar os dados maiúsculos
    function upperCase(data){
        return data.toUpperCase()
    }

    // Tornando os dados maiúsculos
    name = upperCase(inputName.value)
    lastName = upperCase(inputLastName.value)
    email = upperCase(inputEmail.value)

    console.log(name)
    console.log(lastName)
    console.log(email)
    

    


})


    
