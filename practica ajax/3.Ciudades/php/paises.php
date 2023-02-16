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
    $arrayPaises[] = array($row['Code'] => $row['Name']);
  }
} else {
  echo "0 results";
}

// Crea el xml
$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<listaPaises>\n";
for ($i = 0; $i < count($arrayPaises); $i++) {
  $xml .= "<pais>";
  foreach ($arrayPaises[$i] as $id => $name) {
    //echo $id . " -> " . $name;
    $xml .= "<id>" . $id . "</id>";
    $xml .= "<name>" . $name . "</name>";
  }
  $xml .= "</pais>";
}
$xml .= "</listaPaises>\n";
header('Content-Type: text/xml');
echo $xml;

$conexion->close();
?>