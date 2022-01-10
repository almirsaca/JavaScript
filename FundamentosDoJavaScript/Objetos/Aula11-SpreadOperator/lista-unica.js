const clientes = [
    {
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
    },
    {
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
    }
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
console.table(listaDependentes);

const listaDependentes2 = [clientes[0].dependentes, ...clientes[1].dependentes];
console.table(listaDependentes2);

const listaDependentes3 = [...clientes[0].dependentes, clientes[1].dependentes];
console.table(listaDependentes3);

const listaDependentes4 = [clientes[0].dependentes, clientes[1].dependentes];
console.table(listaDependentes4);
