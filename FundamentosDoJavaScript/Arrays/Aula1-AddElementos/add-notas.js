const notas = [10, 6.5, 8 , 7.5];
console.log(notas);

notas.push(7);
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(media);
