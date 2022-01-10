function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`);
   };

/*
    Acima temos uma função que não está ligada a nenhum objeto. 
    Vamos ver como podemos utilizá-la para objetos diferentes de forma independente:
*/

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   };
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   };

pessoa1.imprimeInfo();
//nome: Ana, email a@email.com
pessoa2.imprimeInfo();
//nome: Paula, email p@email.com

/*
    call()

    Esse método permite que uma função seja chamada com parâmetros e
    valor de this específicos. Vamos ver um exemplo:
*/

function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

/*
    apply()

    O método apply() funciona de forma muito semelhante ao call(), 
    porém recebe os argumentos em um array ao invés de separados:
*/

function imprimeNomeEmailApply(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
   const clienteEstudante = ["cliente estudante", "Fortaleza"]
   
   imprimeNomeEmailApply.apply(cliente1, clienteEspecial)
   // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
   
   imprimeNomeEmailApply.apply(cliente2, clienteEstudante)
   // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

/*
   bind()

   O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:
*/

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined  

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia