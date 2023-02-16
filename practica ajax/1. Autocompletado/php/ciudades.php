<?php
$arrayCiudades = array();

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

$sql = "SELECT Name FROM city where Name like '$q%'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
  echo "<p>";
  while ($row = $resultado->fetch_assoc()) {
    array_push($arrayCiudades, $row["Name"]);
    echo $row["Name"] . ", ";
  }
  echo "</p>";
} else {
  echo "0 results";
}

//var_dump($arrayCiudades);
$conexion->close();
?>