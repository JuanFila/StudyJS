//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
console.log(`Uma ajudinha haha a resposta é: ${randomNumber}`)

//functions
function handleTryClick(event) {

    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value !== "") {
        
        if (Number(inputNumber.value) == randomNumber) {
            togleScreen()
            if (xAttempts > 1) {
                document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas.`
            } else {
                document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativa.`
            }
        }
    
        inputNumber.value = ""
        xAttempts++
    }else {
        alert('Digite um valor entre 0 a 10')
    }

}
function handleResetClick(e) {
    e.preventDefault()
    togleScreen()
    xAttempts = 1
}
function togleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}