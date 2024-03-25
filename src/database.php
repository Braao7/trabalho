<?php

$servername = "127.0.0.1";
$database = "dbpront";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Erro na conexão com o banco de dados: " . mysqli_connect_error());
    exit();
}

?>