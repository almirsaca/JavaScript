// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy e falsy

// 0 => false (Java script considera o ZERO como false)
// 1 => true
console.log("0 == false => " + (0 == false));
console.log("1 == true => " + (1 == true));
console.log("10 == true? => " + (10 == true));
console.log("-1 == true? => " + (-1 == true));

// string vazias é considerado como false
console.log('"" == false => ' + ('' == false));

console.clear();

// null -> foi criado como object por engano (bug)
// undefined

let minhaVar;
let varNull = null;
var teste;
var testeNull = null;

console.log(minhaVar);
console.log(varNull);
console.log(teste);
console.log(testeNull);

console.clear();

let numero = 3;
let texto = "Almir";

console.log(typeof numero);
console.log(typeof(texto));

console.clear();

console.log(typeof minhaVar);
console.log(typeof(varNull));

