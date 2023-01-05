// Criando um array para armazenar os erros de validação e imprimir para o usuário.
let errors = []
let UlErrors = document.getElementById('ulErrors')

const regExpEmail = /@/i;

// Variaveis para ativação do btn
let emailLengthValidation = 0;
let emailRegExpValidation = 0;
let passwordValidation = 0;



inputEmail.addEventListener('keyup', () => {
    UlErrors.innerHTML = ``

    // Validando se o campo email está vazio
    if (inputEmail.value.length <= 0) {
        if (errors.indexOf("O campo 'Email' não pode estar vazio!") == -1) {
            errors.push("O campo 'Email' não pode estar vazio!")
        }

        if (emailLengthValidation > 0) {
            emailLengthValidation--
        }

    } else {
        if (errors.indexOf("O campo 'Email' não pode estar vazio!") != -1) {
            let indexRemove = errors.indexOf("O campo 'Email' não pode estar vazio!")
            errors.splice(indexRemove, 1)
        }

        if (emailLengthValidation <= 0) {
            emailLengthValidation++
        }

    }

    // Validando se há um @ no email
    if (!regExpEmail.test(inputEmail.value)) {
        if (errors.indexOf("Falta um '@' no seu Email!") == -1) {
            errors.push("Falta um '@' no seu Email!")
        }

        if (emailRegExpValidation > 0) {
            emailRegExpValidation--
        }

    } else {
        if (errors.indexOf("Falta um '@' no seu Email!") != -1) {
            let indexRemove = errors.indexOf("Falta um '@' no seu Email!")
            errors.splice(indexRemove, 1)
        }

        if (emailRegExpValidation <= 0) {
            emailRegExpValidation++
        }

    }

    // Imprimindo os erros para o usuário
    errors.forEach(error => {
        UlErrors.innerHTML += `<li>${error}</li>`
    })

    // Somando as validações, se chegar a 3, tuod está validado
    let validation = passwordValidation + emailLengthValidation + emailRegExpValidation;

    // Ativando ou desativando o btn de acordo com as validações
    if (validation == 3) {
        btnAcessar.style.backgroundColor = 'var(--primary)'
        btnAcessar.removeAttribute('disabled')
    } else {
        btnAcessar.style.backgroundColor = 'rgb(94, 90, 90)'
        btnAcessar.setAttribute('disabled', true)
    }



})

// Validando se o campo de senha está vazio
inputPassword.addEventListener('keyup', () => {
    if (inputPassword.value.length <= 0) {
        if (errors.indexOf("O campo 'Senha' não pode estar vazio!") == -1) {
            errors.push("O campo 'Senha' não pode estar vazio!")
        }

        if (passwordValidation > 0) {
            passwordValidation--
        }

    } else {
        if (errors.indexOf("O campo 'Senha' não pode estar vazio!") != -1) {
            let indexRemove = errors.indexOf("O campo 'Senha' não pode estar vazio!")
            errors.splice(indexRemove, 1)
        }

        if (passwordValidation <= 0) {
            passwordValidation++
        }


    }

    // Imprimindo os erros para o usuário
    UlErrors.innerHTML = ``
    errors.forEach(error => {
        UlErrors.innerHTML += `<li>${error}</li>`
    })

    // ativando ou desativando o btn de acordo com as validações
    let validation = passwordValidation + emailLengthValidation + emailRegExpValidation;
    if (validation == 3) {
        btnAcessar.style.backgroundColor = 'var(--primary)'
        btnAcessar.removeAttribute('disabled')
    } else {
        btnAcessar.style.backgroundColor = 'rgb(94, 90, 90)'
        btnAcessar.setAttribute('disabled', true)
    }
})