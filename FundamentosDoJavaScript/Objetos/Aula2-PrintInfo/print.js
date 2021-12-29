const cliente = {
    nome: "Almir",
    idade: 51,
    cpf: "10381790843",
    email: "almir.martinelli@gmail.com"
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);
console.log(`3 primeiros digitos do cpd ${cliente.cpf.substring(0,3)}.`);
