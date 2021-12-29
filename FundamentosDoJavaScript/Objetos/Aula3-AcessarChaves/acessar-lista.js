const cliente = {
    nome: "Almir",
    idade: 51,
    cpf: "10381790843",
    email: "almir.martinelli@gmail.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(`O nome do cliente é ${cliente[chaves[0]]} e ele tem ${cliente["idade"]} anos.`);

chaves.forEach(elem => console.log(cliente[elem]));