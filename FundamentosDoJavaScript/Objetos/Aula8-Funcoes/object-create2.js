var o;

// cria um objeto com protótipo null
o = Object.create(null);

console.log(o);


o = {};
// equivalente a:
o = Object.create(Object.prototype);

console.log(o);

// Exemplo em que criamos um objeto com algumas propriedades
// (Note que o segundo parâmetro mapeia as chaves para *descritores de propriedade*.)
o = Object.create(Object.prototype, {
  // foo é uma 'propriedade de valor' ('value property') normal
  foo: { writable: true, configurable: true, value: 'hello' },
  // bar é uma propriedade getter-setter (accessor)
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) { console.log('Setting `o.bar` to', value); }
/* com os ES5 Accessors nosso código pode ser escrito como:
    get function() { return 10; },
    set function(value) { console.log('setting `o.bar` to', value); } */
  }
});


console.log(o);

function Constructor() {}
o = new Constructor();
// equivalente a:
o = Object.create(Constructor.prototype);
// Claro, se há de fato um código de inicialização na função
// Constructor, o Object.create() não pode refleti-la


// Cria um novo objeto cujo protóptipo é um objeto novo, vazio
// e adiciona a propriedade 'p' com o valor 42.
o = Object.create({}, { p: { value: 42 } });

console.log(o.p);

// por padrão, propriedades NÃO SÃO escritas, enumeradas ou configuráveis:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// especificar uma propriedade ES3
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
