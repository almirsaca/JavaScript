const cliente = {
    nome: "Almir",
    idade: 51,
    cpf: "10381790843",
    email: "almir.martinelli@gmail.com",
    fones:["955801008", "34710019"]
};

const dependente = {
    nome: "Grilo",
    dataNac: "31/10/1991"
};

cliente.dependente = dependente;

console.log(cliente);
