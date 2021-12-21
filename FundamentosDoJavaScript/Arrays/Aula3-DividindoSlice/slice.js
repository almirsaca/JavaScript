const nomes = 
[
    'aaaa',
    'bbbb',
    'cccc',
    'dddd',
    'eeee',
    'ffff',
    'gggg',
    'hhhh',
    'iiii',
    'jjjj',
    'kkkk',
    'llll',
    'mmmm',
    'nnnn',
    'oooo',
    'pppp',
    'qqqq',
    'rrrr',
    'ssss'
];

console.clear();
console.log(nomes.length);

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1 : ${sala1}`);
console.log(`-----------------------------`);
console.log(`Alunos da sala 2 : ${sala2}`);

