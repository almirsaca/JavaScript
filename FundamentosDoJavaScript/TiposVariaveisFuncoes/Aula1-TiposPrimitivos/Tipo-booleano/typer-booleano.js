{
    const pNum = 5;
    const sNum = 18;
    let cadastroAtivado = true;

    console.clear();

    console.log("============== I N I C I O =====================");

    noMeioCod = "ahhhhhhhhhhhhhhhhhhh";

    console.log(noMeioCod);

    console.log(pNum === sNum);

    const minhaVar = 1;
    const MinhaVar = "texto";
    const minhavar = "3";
    const MINHAVAR = 2;

    console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

    let input = null;
    let input2;

    if (input === null) {
    console.log('não há informação');
    } else {
    console.log(input);
    }

    var noMeioCod;

    input = undefined;
    console.log(input);
    console.log(input2); // undefined

    var t = null == undefined;
    console.log("null == undefined => " + t);
    console.log(null == undefined); // true
    console.log("null === undefined");
    console.log(null === undefined); // false
}

var noMeioCod = 10;

console.log(noMeioCod);

console.log("============== exibeMensagem =====================");

var exibeMensagem = function() { 
    console.log(mensagemDentroDoIf); // Alura 
    var mensagemForaDoIf = 'Caelum'; 
    if(true) { 
        var mensagemDentroDoIf = 'Alura'; 
        console.log(mensagemDentroDoIf)// Alura ;
    } 
    console.log(mensagemForaDoIf); // Caelum 

    console.log(mensagemDentroDoIf); // Alura 
}

