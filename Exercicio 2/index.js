let stundents = [
    {
        nome: 'Juan',
        n1: 6,
        n2: 9,
    },
    {
        nome: 'Diego',
        n1: 10,
        n2: 7,
    },
    {
        nome: 'Maik',
        n1: 9,
        n2: 10,
    },
    {
        nome: 'Rodrigo',
        n1: 5,
        n2: 6,
    }
];

function media() {
    let mediaStudent = 0
    for (let student of stundents) {

        mediaStudent = (student.n1 + student.n2) / 2

        if (mediaStudent >= 7) {
            alert(
            `
            A média do ${student.nome} foi de ${mediaStudent}
            Parabéns, ${student.nome} Você foi aprovado(a) no concurso
            `
            );
        } else {
            alert(
            `
            A média do ${student.nome} foi de ${mediaStudent}
            Não foi dessa vez ${student.nome} ! Tente novamente!
            `
            );
        }
    }
}
media()