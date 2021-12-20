const idadeMinima = 18;
const idadeCliente = 18;
const remedio = true;

// if(idadeCliente >= idadeMinima) {
//     console.log("Cerveja");
// } else {
//     console.log("Suco");
// }

let result = idadeCliente >= idadeMinima ? (remedio ? "Cerveja sem alcool" : "Cerveja") : "Suco";
console.log(result);
