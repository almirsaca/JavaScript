const cliente = {
    nome: "Almir",
    idade: 51,
    cpf: "10381790843",
    email: "almir.martinelli@gmail.com",
    fones:["955801008", "34710019"],
    dependentes: [
        {
            nome: "Grilo",
            dataNac: "31/10/1991"
        }
    ]
};

console.log(cliente);

// add novo objetos

cliente.dependentes.push({
    nome: "Tata",
    dataNac: "10/09/1998"
});

console.log(cliente);

// Get dependente mais novo -> filtro

const dependenteMaisNovo = cliente.dependentes.
    filter(dep => dep.dataNac === "10/09/1998");

console.log(dependenteMaisNovo);

