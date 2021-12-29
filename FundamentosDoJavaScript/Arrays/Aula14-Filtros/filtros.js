const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovadosExt = nomes.filter( (_, indice) => notas[indice] < 5 );

console.log(`Reprovados ${reprovadosExt}`);

const reprovados = nomes.filter( (aluno, indice) => { return notas[indice] < 5; } );

console.log(`Reprovados ${reprovados}`);
