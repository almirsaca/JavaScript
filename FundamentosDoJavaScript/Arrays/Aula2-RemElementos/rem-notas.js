const notas = [10, 6.5, 8 , 7.5, 7];
console.log(notas);

// Remove ultimo elemento
notas.pop()
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`);
