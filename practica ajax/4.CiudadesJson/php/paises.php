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

$sql = "SELECT Code, Name FROM country";
$resultado = $conexion->query($sql);

// Crea un array asociativo con los datos necesarios
if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $arrayPaises[] = array('id' => $row['Code'], 'name' => $row['Name']);
  }
} else {
  echo "0 results";
}

header('Content-Type: application/json');
// Codifica el array en formato JSON
echo json_encode($arrayPaises);

$conexion->close();
?>