const alunos = ['sdad','rgghf','gdfgs','gdfgsd','sdfgg'];
const notas = [8,9,4.5,6,2];

const boletim = [alunos, notas];

/// Arrow Function
const exibeNomeNota = nomeAluno => {
    let retorno;
    if(boletim[0].includes(nomeAluno)) {
        const indice = boletim[0].indexOf(nomeAluno);
        retorno = `${boletim[0][indice]}, sua nota é ${boletim[1][indice]}`;
    }
    else {
        retorno = `Aluno '${nomeAluno}' não foi localizado!`;
    }
    return retorno;
}

console.log(exibeNomeNota('sdad'));

