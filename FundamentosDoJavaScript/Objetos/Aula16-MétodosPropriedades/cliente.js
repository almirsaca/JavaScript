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

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    };

    depositarPoup (valor) {
        this.saldoPoup += valor;
        this.exibirSaldoPoup();
        console.log(`Referente ao deposito de ${valor}.`);        
    };  

    exibirSaldoPoup() {
        console.log(`Saldo atual na poupança ${this.saldo}`);        
    };
}

const clp = new ClientePoupanca("Roger", "345678856", "rge@g.com", 100, 245);

console.log(clp);
