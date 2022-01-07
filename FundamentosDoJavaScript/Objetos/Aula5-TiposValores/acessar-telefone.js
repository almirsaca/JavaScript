const cliente = {
    nome: "Almir",
    idade: 51,
    cpf: "10381790843",
    email: "almir.martinelli@gmail.com",
    fones:["955801008", "34710019"]
};

console.log(cliente);

// print telefones
cliente.fones.forEach(f => console.log(`O telefone é ${f}`));
