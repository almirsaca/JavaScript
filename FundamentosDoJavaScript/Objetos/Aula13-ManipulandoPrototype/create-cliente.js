function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function (valor) {
        if(this.saldo === undefined) this.saldo = 0;
        this.saldo += valor;
        console.log(`Saldo atual em conta corrente ${this.saldo} - referente ao deposito de ${valor}.`);        
    }   
};

function ClientePoupanca(nome, cpf, email, saldo) {
    Cliente.call(this, nome, cpf, email, undefined);
    this.saldoPoupanca = saldo;
};

const clp = new ClientePoupanca("Roger", "345678856", "rge@g.com", 346);

console.log(clp);

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoupanca += valor;
    console.log(`Saldo atual na poupança ${this.saldoPoupanca} - referente ao deposito de ${valor}.`);        
};

clp.depositar(100);
clp.depositarPoup(3456);

console.log(ClientePoupanca.prototype);



