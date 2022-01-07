isStudent = false;
texto = "eu sou uma string";

fTeste();

alert(texto);

function fTeste() {
    isAdmin = true;
    var strAdm = "Welcome administrator";
    console.log(isAdmin);
    if(isAdmin) {
        alert(strAdm);
    }
    else if(isStudent) {
        alert("Welcome student");
    }
    else {
        alert("Who are you?");
    }
}
document.write(isAdmin);

