/*
    Um objeto literal é um objeto criado com  a notação literal,  ou seja:  uma 
    lista de chave e valores dentro de chaves { }, que atribuímos a uma variável 
    para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

    Objetos literais funcionam  bem quando queremos ter  um objeto único,  com seus 
    próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local 
    na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:
*/

console.clear();

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   };

const objPersonagem2 = objPersonagem;
console.log(objPersonagem2);

objPersonagem2.nome = "Gandalf, o Cinzento";
console.log(objPersonagem2);

/*
    A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu
    como referência para o objeto original objPersonagem. Assim, qualquer alteração 
    em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha 
    com objetos, acessa os valores deles fazendo referência ao original. mas não cria 
    uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
*/

let num = 50;
let num2 = num;

num2 = 100;
console.log(num); //50
console.log(num2); //100

/*
    Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar 
    a notação literal, objetos também podem ser criados através do método Object.create():
*/

const objPersonagem3 = Object.create(objPersonagem);
console.log("-----------------------------------------");
console.log(objPersonagem3);
console.log(objPersonagem3.nome);
console.log("-----------------------------------------");
objPersonagem3.nome = "Gandalf, o Cinzento";
   
console.log(objPersonagem3); //Gandalf, o Cinzento

