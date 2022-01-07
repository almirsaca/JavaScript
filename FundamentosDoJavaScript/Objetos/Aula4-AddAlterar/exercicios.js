/*
    Já vimos o principal, que é acessar, alterar e adicionar valores em um objeto. 
    Mas ainda faltou falarmos sobre um caso: E quando queremos deletar um conjunto de chave/valor?

    Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
*/

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

console.log(objPersonagem.aliado);   

delete objPersonagem.aliado;

console.log(objPersonagem.aliado);

delete objPersonagem["status"];

console.log(objPersonagem.status);

console.log(objPersonagem);

/*

    O valor de retorno do operador delete é um booleano, ou seja, retorna 
    sempre true ou false para cada operação. Porém, é importante notar que 
    ele não retorna false se tentarmos remover, por exemplo, uma propriedade 
    que não existe no objeto:

*/

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

