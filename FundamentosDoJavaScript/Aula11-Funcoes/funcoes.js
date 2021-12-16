/*
let x = "";
// console.log(x);
 x = "oi";
 imprimeTexto("será que vai?");

function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto(x);

imprimeTexto([1,2]);

var a = [1,2].concat(3);

imprimeTexto(a);
*/

a = 10;

console.log(typeof a);

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
        return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))