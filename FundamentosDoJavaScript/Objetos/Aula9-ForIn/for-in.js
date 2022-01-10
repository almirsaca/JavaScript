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

let relatorio = "";
for(let info in cliente) {
    if( checkIsProp(info)) {
        relatorio += `${info} : ${cliente[info]}\r\n`;
    }
};

console.log(relatorio);

function checkIsProp (name) {
    return !(typeof cliente[name] === 'object') && !(typeof cliente[name] === 'function');
}

