const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';

const citacao = 'Ele tá entre "aspas duplas"';
const citacao2 = "Ele tá entre 'aspas simples'";

console.clear();

console.log(citacao);

console.log(citacao2);

// Pesquisa -> template string ou template literal

/*
    O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres 
    de mais de 150 idiomas antigos e modernos, e também diversos outros 
    conjuntos de caracteres como símbolos matemáticos e inclusive emojs. 
    A Wikipedia tem uma lista extensa de todas as tabelas com os códigos 
    Unicode e os caracteres, como por exemplo os que estão abaixo:

    $	U+0024	DOLLAR SIGN
    A   U+0041	LATIN CAPITAL LETTER A
    ✅ U+2705	CHECK MARK
    ぁ	U+3041	HIRAGANA LETTER SMALL A

    Mais detalhes precisos e documentação sobre o Unicode na página da Unicode Foundation.
    https://home.unicode.org/

*/

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const zMinusculo = '\u007A';
const tique = '\u2705';
const hiragana = '\u3041';
const anjo = '\u1F970';

console.log(cifrao);
console.log(aMaiusculo);
console.log(zMinusculo);
console.log(tique);
console.log(hiragana);
console.log(anjo);
