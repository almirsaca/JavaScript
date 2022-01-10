class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.saldo = saldo;
        this.cpf = cpf;
        this.email = email;
        this.saldo =saldo;
    };

    depositar (valor) {
        this.saldo += valor;
        this.exibirSaldo();
        console.log(`Referente ao deposito de ${valor}.`);        
    };  

    exibirSaldo() {
        console.log(`Saldo atual ${this.saldo}`);        
    };
}

const cliente1 = new Cliente("Almir", "3457893222", "almir@g.com", 10000);

console.log(cliente1);

cliente1.depositar(2);

cliente1.exibirSaldo();

