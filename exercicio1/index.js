
let numberX = Number(prompt('Digite um numero'))
let numberY = Number(prompt('Digite outro número'))

function calc(X, Y) {
   let sum = X + Y
   let subtraction = X - Y
   let multiplication = X * Y
   let division = X / Y
   let rest = X % Y

   if(numberX != numberY) {
      alert('Os números digitados são opostos')
   }else{
      alert('Os números digitados são iguais')
   }

   if(sum % 2 == 0){
      alert('A soma é par')
   }else{
      alert('A soma é impar')
   }

   return alert(`
   A soma dos números resultou em ${sum}
   A subtração ${subtraction}
   A multiplicação ${multiplication}
   A divisão ${division.toFixed(2)}
   O resto em ${rest}
   `)
}

calc(numberX, numberY)