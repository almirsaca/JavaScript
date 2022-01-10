
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function (valor) {
        this.saldo += valor;
        console.log(`Saldo atual ${this.saldo} - referente ao deposito de ${valor}.`);        
    }   
};


const cl1 = new Cliente("Almir", 12222222, "a@g.com", 123);

console.log(cl1);

cl1.depositar(234);




