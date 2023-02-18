<?php
$arrayPaises = array();

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

// Crea un tabla con la información recogida de la consulta a base de datos
if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $arrayPaises[] = array('nombre' => $row["name"]);
  }
} else {
  echo "0 results";
}

header('Content-Type: application/json');
// Codifica el array en formato JSON
echo json_encode($arrayPaises);

$conexion->close();
?>