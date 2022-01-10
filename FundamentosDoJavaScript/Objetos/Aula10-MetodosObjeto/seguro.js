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
        },
        {
            nome: "Tata",
            dataNac: "10/09/1998"
        }        
    ],
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    }
};

const clienteSolteiro = {
    nome: "Val",
    idade: 19,
    cpf: "9999999999",
    email: "val.soueu@gmail.com",
    fones:["95555555"],
    dependentes: [],
    saldo: 10,

    depositar: function(valor) {
        this.saldo += valor;
    }
};

function  ofereSeguro(obj) {
    let props = Object.keys(obj);

    if(props.includes("dependentes") && obj["dependentes"].length > 0) {
        console.log(`Oferecer seguro para ${obj.nome}`);
    }
    else {
        console.log(`${obj.nome}, não possui dependentes!`);
    }
}

ofereSeguro(cliente);
ofereSeguro(clienteSolteiro);

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
