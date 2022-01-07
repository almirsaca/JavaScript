let num = [5, 8, 2, 9, 3];
console.log(`Nosso vetor é o ${num}`);
console.log(num);

num[16] = 33;
console.log(num);
console.log(`tamanho do vetor é ${num.length}`);

num.push(10);
console.log(num);
console.log(`tamanho do vetor é ${num.length}`);

num.sort();
console.log(num);
console.log(`tamanho do vetor é ${num.length}`);

for (let index = 0; index < num.length; index++) {
    console.log(`A posição ${index} possui o valor ${num[index]}`);
}

num.forEach(element => {
    console.log(`${element}`);
    
});

for (const key in num) {
    if (num.hasOwnProperty(key)) {
        const element = num[key];
        console.log(`A posição ${key} possui o valor ${element}`);
    }
}