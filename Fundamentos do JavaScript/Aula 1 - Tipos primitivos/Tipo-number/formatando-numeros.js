function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    return salarioHora;
};

function ganhoPorHoraRound(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    return Math.round(salarioHora);
};

function ganhoPorHoraFixed(salario, horasTrabalhadasNoMes, casas) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    const total = salarioHora.toFixed(casas);
    return total;
};

function ganhoPorHoraReal(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
      const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      return formatado;
};

console.log(ganhoPorHora(3000,176));

console.log(ganhoPorHoraRound(3000,176));

console.log(ganhoPorHoraFixed(3000,176,2));

console.log(ganhoPorHoraReal(3000,176));
