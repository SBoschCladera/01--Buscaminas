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

$sql = "SELECT CountryCode, Name, District, Population FROM city where CountryCode like '$q'";
$resultado = $conexion->query($sql);


if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $arrayCiudades[] = array('id' => $row['CountryCode'], 'name' => $row['Name'], 'district' => $row['District'], 'population' => $row['Population']);
  }
} else {
  echo "0 results";
}
header('Content-Type: application/json');
echo json_encode($arrayCiudades);

//var_dump($arrayPaises);
$conexion->close();
?>