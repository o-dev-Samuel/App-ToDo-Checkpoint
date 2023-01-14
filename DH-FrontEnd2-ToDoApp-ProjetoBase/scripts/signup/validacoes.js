// array de erros
let errors = []

// capturando elementos
let nameValidation = 0;
let lastNameValidation = 0;
let emailValidation = 0;
let passwordValidation = 0;
let repeatPasswordValidation = 0;
let ulErros = document.getElementById('ulErrorsSignup')

inputName.addEventListener('keyup', () =>{
    // Limpando a ul
    ulErros.innerHTML = ''
    if(inputName.value.length > 0){
        if(nameValidation <= 0){
            nameValidation++
        }
        if(errors.indexOf('O campo "Nome" não pode estar vazio') != -1){
            let indexRemove = errors.indexOf('O campo "Nome" não pode estar vazio')
            errors.splice(indexRemove, 1)
        }
    }else {
        if(nameValidation > 0){
            nameValidation--
        }
        if(errors.indexOf('O campo "Nome" não pode estar vazio') == -1){
            errors.push('O campo "Nome" não pode estar vazio')
        }
    }

    errors.forEach(error =>{
        ulErros.innerHTML += `<li>${error}</li>`
    })
    console.log(nameValidation)
    console.log(errors)
})
