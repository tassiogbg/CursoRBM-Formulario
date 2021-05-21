function validaDados() {

    var elemento1 = document.getElementById("email").value;
    var elemento2 = document.getElementById("nome").value;
    var elemento3 = document.getElementById("idade").value;
    var elemento4 = document.getElementsByName("exp");
    var valorelemento4 = false;
    var elemento5 = document.getElementsByName("genero");
    var valorelemento5 = false;
    var elemento6 = document.getElementById("cidade").value;
    var elemento7 = document.getElementById("bairro").value;
    var elemento8 = document.getElementById("rua").value;
    var elemento9 = document.getElementById("ncasa").value;
    var elemento10 = document.getElementById("cargo").value;


    if (elemento1 == "") {
        alert("Digite seu E-mail");
        return false;
    }
    if (elemento2 == "") {
        alert("Digite seu Nome");
        return false;
    }
    if (elemento3 == "") {
        alert("Digite sua Idade");
        return false;
    }
    for (var i = 0; i < elemento4.length; i++) {
        if (elemento4[i].checked == true) {
            valorelemento4 = true;
        }
    }
    if (!valorelemento4) {
        alert("Selecione seu Nível de Experiência");
        return false;
    }
    for (var i = 0; i < elemento5.length; i++) {
        if (elemento5[i].checked == true) {
            valorelemento5 = true;
        }
    }
    if (!valorelemento5) {
        alert("Selecione seu Gênero");
        return false;
    }
    if (elemento6 == "") {
        alert("Digite sua Cidade");
        return false;
    }
    if (elemento7 == "") {
        alert("Digite seu Bairro");
        return false;
    }
    if (elemento8 == "") {
        alert("Digite sua Rua");
        return false;
    }
    if (elemento9 == "") {
        alert("Digite o n° da sua residência");
        return false;
    }
    if (elemento10 == "00") {
        alert("Selecione um Cargo");
        return false;
    }
};