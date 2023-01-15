// array de erros
let errors = []

// capturando elementos
let nameValidation = 0;
let lastNameValidation = 0;
let emailLengthValidation = 0;
let emailRegExpValidation = 0;
let passwordValidation = 0;
let repeatPasswordValidation = 0;
let validation;


let ulErrors = document.getElementById('ulErrorsSignup')

inputName.addEventListener('keyup', () =>{
    // Limpando a ul
    ulErrors.innerHTML = ''

    // Validando se o campo Nome está preenchido
    if(inputName.value.length > 0){
        if(nameValidation <= 0){
            nameValidation++
        }
        if(errors.indexOf('O campo "Nome" não pode estar vazio!') != -1){
            let indexRemove = errors.indexOf('O campo "Nome" não pode estar vazio!')
            errors.splice(indexRemove, 1)
        }
    }else {
        if(nameValidation > 0){
            nameValidation--
        }
        if(errors.indexOf('O campo "Nome" não pode estar vazio!') == -1){
            errors.push('O campo "Nome" não pode estar vazio!')
        }
    }

    errors.forEach(error =>{
        ulErrors.innerHTML += `<li>${error}</li>`
    })
    
    // Somando variáveis de validação
    validation = nameValidation + lastNameValidation + emailLengthValidation + emailRegExpValidation + passwordValidation + repeatPasswordValidation;
    // Ativando ou desativando botão de acordo com as validações
    if(validation == 6) {
        btnCreate.style.backgroundColor = 'var(--primary)'
        btnCreate.removeAttribute('disabled')
    } else {
        btnCreate.style.backgroundColor = 'rgb(94, 90, 90)'
        btnCreate.setAttribute('disabled', true)
    }

})

inputLastName.addEventListener('keyup', () =>{
    // limpando a ul
    ulErrors.innerHTML = ''

    // Validando se o campo Sobrenome está preenchido
    if(inputLastName.value.length > 0){
        if(lastNameValidation <= 0){
            lastNameValidation++
        }
        if(errors.indexOf('O campo "Sobrenome" não pode estar vazio!') != -1){
            let indexRemove = errors.indexOf('O campo "Sobrenome" não pode estar vazio!')
            errors.splice(indexRemove, 1)
        }
    }else {
        if(lastNameValidation > 0){
            lastNameValidation--
        }
        if(errors.indexOf('O campo "Sobrenome" não pode estar vazio!') == -1){
            errors.push('O campo "Sobrenome" não pode estar vazio!')
        }
    }

    errors.forEach(error => {
        ulErrors.innerHTML += `<li>${error}</li>`
    })

    // Somando variáveis de validação
    validation = nameValidation + lastNameValidation + emailLengthValidation + emailRegExpValidation + passwordValidation + repeatPasswordValidation;
    // Ativando ou desativando botão de acordo com as validações
    if(validation == 6) {
        btnCreate.style.backgroundColor = 'var(--primary)'
        btnCreate.removeAttribute('disabled')
    } else {
        btnCreate.style.backgroundColor = 'rgb(94, 90, 90)'
        btnCreate.setAttribute('disabled', true)
    }
})

inputEmail.addEventListener('keyup', () =>{
    // limpando a ul
    ulErrors.innerHTML = ''

    // Validando se o campo Email está preenchido
    if(inputEmail.value.length > 0){
        if(emailLengthValidation <= 0){
            emailLengthValidation++
        }
        if(errors.indexOf('O campo "Email" não pode estar vazio!') != -1){
            let indexRemove = errors.indexOf('O campo "Email" não pode estar vazio!')
            errors.splice(indexRemove, 1)
        }
    } else {
        if(emailLengthValidation > 0){
            emailLengthValidation --
        }
        if(errors.indexOf('O campo "Email" não pode estar vazio!') == -1){
            errors.push('O campo "Email" não pode estar vazio!')
        }
    }

    // Validando se o campo Email possui um arroba
    if(!regExpEmail.test(inputEmail.value)){
        if(emailRegExpValidation > 0){
            emailRegExpValidation --
        }
        if(errors.indexOf('Falta um "@" no seu email!') == -1){
            errors.push('Falta um "@" no seu email!')
        }
        
    } else {
        if(emailRegExpValidation == 0){
            emailRegExpValidation ++
        }

        if(errors.indexOf('Falta um "@" no seu email!') != -1){
            let indexRemove = errors.indexOf('Falta um "@" no seu email!')
            errors.splice(indexRemove, 1)
        }
    }

    errors.forEach(error => {
        ulErrors.innerHTML += `<li>${error}</li>`
    })

    // Somando variáveis de validação
    validation = nameValidation + lastNameValidation + emailLengthValidation + emailRegExpValidation + passwordValidation + repeatPasswordValidation;
    // Ativando ou desativando botão de acordo com as validações
    if(validation == 6) {
        btnCreate.style.backgroundColor = 'var(--primary)'
        btnCreate.removeAttribute('disabled')
    } else {
        btnCreate.style.backgroundColor = 'rgb(94, 90, 90)'
        btnCreate.setAttribute('disabled', true)
    }
})


inputPassword.addEventListener('keyup', () =>{
    //Limpando a ul
    ulErrors.innerHTML = ''
    // Validando se o campo senha possui no mínimo 6 caracteres
    if(inputPassword.value.length >= 6){
        if(passwordValidation <= 0){
            passwordValidation++
        }
        if(errors.indexOf('O campo "Senha" deve ter, no mínimo, 6 caracteres!') != -1){
            let indexRemove = errors.indexOf('O campo "Senha" deve ter, no mínimo, 6 caracteres!')
            errors.splice(indexRemove, 1)
        }
    }else {
        if(passwordValidation > 0){
            passwordValidation--
        }
        if(errors.indexOf('O campo "Senha" deve ter, no mínimo, 6 caracteres!') == -1){
            errors.push('O campo "Senha" deve ter, no mínimo, 6 caracteres!')
        }
    }

    // Validando se as senhas coincidem
    if(inputPassword.value === inputRepeatPassword.value){
        if(repeatPasswordValidation <= 0){
            repeatPasswordValidation++
        }
        if(errors.indexOf('As senhas não coincidem!') != -1){
            let indexRemove = errors.indexOf('As senhas não coincidem!')
            errors.splice(indexRemove, 1)
        }
    } else {
        if(repeatPasswordValidation > 0){
            repeatPasswordValidation--
        }
        if(errors.indexOf('As senhas não coincidem!') == -1){
            errors.push('As senhas não coincidem!')
        }
    }

    errors.forEach(error => {
        ulErrors.innerHTML += `<li>${error}</li>`
    })

    // Somando variáveis de validação
    validation = nameValidation + lastNameValidation + emailLengthValidation + emailRegExpValidation + passwordValidation + repeatPasswordValidation;
    // Ativando ou desativando botão de acordo com as validações
    if(validation == 6) {
        btnCreate.style.backgroundColor = 'var(--primary)'
        btnCreate.removeAttribute('disabled')
    } else {
        btnCreate.style.backgroundColor = 'rgb(94, 90, 90)'
        btnCreate.setAttribute('disabled', true)
    }

})

inputRepeatPassword.addEventListener('keyup', () =>{
    // Limpando a ul
    ulErrors.innerHTML = ''

    // Validando se as senhas coincidem
    if(inputPassword.value === inputRepeatPassword.value){
        if(repeatPasswordValidation <= 0){
            repeatPasswordValidation++
        }
        if(errors.indexOf('As senhas não coincidem!') != -1){
            let indexRemove = errors.indexOf('As senhas não coincidem!')
            errors.splice(indexRemove, 1)
        }
    } else {
        if(repeatPasswordValidation > 0){
            repeatPasswordValidation--
        }
        if(errors.indexOf('As senhas não coincidem!') == -1){
            errors.push('As senhas não coincidem!')
        }
    }

    errors.forEach(error => {
        ulErrors.innerHTML += `<li>${error}</li>`
    })

    // Somando variáveis de validação
    validation = nameValidation + lastNameValidation + emailLengthValidation + emailRegExpValidation + passwordValidation + repeatPasswordValidation;
    // Ativando ou desativando botão de acordo com as validações
    if(validation == 6) {
        btnCreate.style.backgroundColor = 'var(--primary)'
        btnCreate.removeAttribute('disabled')
    } else {
        btnCreate.style.backgroundColor = 'rgb(94, 90, 90)'
        btnCreate.setAttribute('disabled', true)
    }
})

btnCreate.addEventListener('click', () =>{
    
})