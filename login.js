function validar() {
    let cnpj = document.getElementById("cnpj").value;
    let pass = document.getElementById("pass").value;
    let erro = false;
    if(cnpj.length != 11) {
        erro = true;
        alert("CNPJ com quantidade errada de caracteres");
    }
    if(pass == "") {
        erro = true;
        alert("A senha não pode ser vazia");
    }
    if(erro == false) {
        document.location.href = "index.html"
    }
}
