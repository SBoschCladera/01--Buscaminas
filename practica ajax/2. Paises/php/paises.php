<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "world";

// Crea la conexión
$conexion = new mysqli($servername, $username, $password, $dbname);
// Comprueba la conexión
if ($conexion->connect_error) {
  die("Algo ha fallado en la conexión: " . $conexion->connect_error);
}

// Parámetro q de la URL
$q = $_REQUEST["q"];

$sql = "SELECT name FROM country where name like '$q%'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
  echo "<table id='tabla'>";
  echo "<tr><td>PAÍSES</td></tr>";
  while ($row = $resultado->fetch_assoc()) {
    echo "<tr><td>" . $row["name"] . "</td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}

//var_dump($arrayPaises);
$conexion->close();
?>