var respostaSim = document.getElementById('respostaSim')
var botaoSim = document.getElementById('Sim')
var respostaNao = document.getElementById('respostaNao')
var botaoNao = document.getElementById('Nao')

var answer = document.getElementById('answer')

var divAI = document.getElementsByClassName('mainRigth')
var divEmail = document.getElementsByClassName('mainEmail')
var divProtocol = document.getElementsByClassName('mainProtocol')
var divChat = document.getElementsByClassName('mainChat')

var valueCategory = document.getElementById('category')
var valueName = document.getElementById('name')
var valueEmail = document.getElementById('email')
var valueMessage = document.getElementById('message')

var alertCategory = document.getElementById('alertCategory')
var alertName = document.getElementById('alertName')
var alertEmail = document.getElementById('alertEmail')
var alertMessage = document.getElementById('alertMessage')
var alertAlert = document.getElementById('alertAlert')

function clickYes() {
    botaoNao.classList.remove('btn-danger')
    botaoNao.classList.add('btn-light')
    botaoNao.disabled = true

    respostaSim.style.display = 'block'
}

function clickNo() {
    botaoSim.classList.remove('btn-success')
    botaoSim.classList.add('btn-light')
    botaoSim.disabled = true

    respostaNao.style.display = 'block'
}

function resetAnswer() {
    var ariaExpanded = answer.getAttribute("aria-expanded")
    
    if(ariaExpanded = true) {
        botaoSim.classList.remove('btn-light')
        botaoSim.classList.add('btn-success')
        botaoSim.disabled = false
        respostaSim.style.display = 'none'

        botaoNao.classList.remove('btn-light')
        botaoNao.classList.add('btn-danger')
        botaoNao.disabled = false
        respostaNao.style.display = 'none'
    }
}

function transitionForm() {
    Array.from(divEmail).forEach((divEmail) => {
        Array.from(divAI).forEach((divAI) => {
            Array.from(divProtocol).forEach((divProtocol) => {
                Array.from(divChat).forEach((divChat) => {
                    if(divEmail.style.display === 'none') {
                        divEmail.style.display = 'block'
                        divAI.style.display = 'none'
                        divProtocol.style.display = 'none'
                        divChat.style.display = 'none'
                    } else {
                        divEmail.style.display = 'none'
                        divAI.style.display = 'block'
                        divProtocol.style.display = 'none'
                        divChat.style.display = 'none'
                    }
                })
            })
        })
    })  
}

function validationEmail() {
    if(valueCategory.value == 'Selecione um assunto') {
        alertCategory.style.display = 'block'
        alertAlert.style.display = 'block'
    } else {
        alertCategory.style.display = 'none'
        alertAlert.style.display = 'none'
    }
    if(valueName.value == '') {
        alertName.style.display = 'block'
        alertAlert.style.display = 'block'
    } else {
        alertName.style.display = 'none'
        alertAlert.style.display = 'none'
    }
    if(valueEmail.value == '') {
        alertEmail.style.display = 'block'
        alertAlert.style.display = 'block'
    } else {
        alertEmail.style.display = 'none'
        alertAlert.style.display = 'none'
    }
    if(valueMessage.value == '') {
        alertMessage.style.display = 'block'
        alertAlert.style.display = 'block'
    } else {
        alertMessage.style.display = 'none'
        alertAlert.style.display = 'none'
    } if(alertAlert.style.display === 'none') {
        Array.from(divEmail).forEach((divEmail) => {
            Array.from(divProtocol).forEach((divProtocol) => {
                if(divEmail.style.display === 'block') {
                    divProtocol.style.display = 'block'
                    divEmail.style.display = 'none'
                } else {
                    divProtocol.style.display = 'none'
                    divEmail.style.display = 'block'
                }
            })
        })
    }
}


function backAI() {
    Array.from(divProtocol).forEach((divProtocol) => {
        Array.from(divAI).forEach((divAI) => {
            if(divProtocol.style.display === 'block') {
                divAI.style.display = 'block'
                divProtocol.style.display = 'none'
            } else {
                divAI.style.display = 'none'
                divProtocol.style.display = 'block'
            }
        })
    })
}

function modalChat() {
    Array.from(divEmail).forEach((divEmail) => {
        Array.from(divAI).forEach((divAI) => {
            Array.from(divProtocol).forEach((divProtocol) => {
                Array.from(divChat).forEach((divChat) => {
                    if(divChat.style.display === 'none') {
                        divChat.style.display = 'block'
                        divEmail.style.display = 'none'
                        divAI.style.display = 'none'
                        divProtocol.style.display = 'none'
                    } else {
                        divChat.style.display = 'none'
                        divEmail.style.display = 'none'
                        divAI.style.display = 'block'
                        divProtocol.style.display = 'none'
                    }
                })
            })
        })
    })  
}
