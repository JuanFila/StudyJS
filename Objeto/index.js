/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let pacientes = [
   {
      nome: 'juan',
      idade: 22,
      peso: 70,
      altura: 1.80,
   },
   {
      nome: 'Jão',
      idade: 12,
      peso: 50,
      altura: 1.50,
   },
   {
      nome: 'Vis',
      idade: 20,
      peso: 67,
      altura: 1.65,
   }
]
let patientsNames = []
for( let pacient of pacientes ) {
   patientsNames.push(pacient.nome)
}
/*let patientsNames = []
for(let index = 0; index < pacientes.length; index++) {
   patientsNames[index] = pacientes[index].nome
}
*/
// ao invez de usar o for podemos usar o for of
alert(patientsNames)