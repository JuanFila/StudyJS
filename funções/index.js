/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
   {
      name: 'JUAN',
      age: 21,
      weight: 70,
      height: 180
   },
   {
      name: 'Mar',
      age: 11,
      weight: 50,
      height: 160
   },
   {
      name: 'Fev',
      age: 40,
      weight: 83,
      height: 172
   }
]

function printPatientIMC(patient) {
  return`Paciente ${patient.name} possui o IMC de: 
   ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`
}

for(let patient of patients) {
   alert(printPatientIMC(patient))
}
