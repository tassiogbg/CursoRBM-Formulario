<?php

    $email = $_POST["email"];
    $nome = $_POST["nome"];
    $idade = $_POST["idade"];
    $nivel_exp = $_POST["exp"];
    $genero = $_POST["genero"];
    $cidade = $_POST["cidade"];
    $bairro = $_POST["bairro"];
    $rua = $_POST["rua"];
    $ncasa = $_POST["ncasa"];
    $cargo = $_POST["cargo"];

echo "E-mail:$email <br/> 
        Nome:$nome <br/> 
        Idade:$idade <br/> 
        Nível de Experiência: $nivel_exp <br/>
        Gênero:$genero <br/>
        Cidade:$cidade <br/>
        Bairro:$bairro <br/>
        Rua:$rua N°:$ncasa <br/>
        Cargo:$cargo;
        ";
?>