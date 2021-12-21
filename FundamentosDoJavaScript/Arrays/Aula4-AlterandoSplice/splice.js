const listaChamadas = 
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

console.log(`Lista ${listaChamadas}`);
listaChamadas.splice(1,2,['NOVO','ZEZE']);
console.log(`Lista ${listaChamadas}`);

listaChamadas.splice(3,2);

//console.log(`--------------------------`);
console.log(`lista ${listaChamadas}`);
