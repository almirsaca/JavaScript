/*
  No entanto, este código retorna uma média de 24. 
  Como tal média é possível se não temos nenhum número maior do que 10?
*/

const notas1 = [10 , 6.5, 8 ,7.5];
const notas2 = [9  , 6  , 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }
  
console.log(`A média é ${media}`);

/*
  O que acontece é que para conseguir a média entre todos 
  os arrays, temos que somar as médias dos arrays de notas, 
  8+7+9 edividir pela quantidade de arrays em notasGerais.
*/

media = media/notasGerais.length

console.log(`A média é ${media}`);
