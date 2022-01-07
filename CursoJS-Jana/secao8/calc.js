var res = calc(2, 2, '/');

document.write(res);

function calc(v1, v2, operation) {
    if(operation == '*') {
        return v1 * v2;
    }
    else if(operation == '+') {
        return v1 + v2;
    }
    else if(operation == '-') {
        return v1 - v2;
    }
    else {
        return false;
    }
}

var person = {
    'meu end': 'itaborai 1187'
};

document.write(person['meu end']);

document.write(person['tata']);

