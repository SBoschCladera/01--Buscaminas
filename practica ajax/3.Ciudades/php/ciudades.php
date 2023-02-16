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

// Crea un array asociativo con los datos necesarios
if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $arrayCiudades[] = array('clave1' => $row['CountryCode'], 'clave2' => $row['Name'], 'clave3' => $row['District'], 'clave4' => $row['Population']);
  }
} else {
  echo "0 results";
}

// Crea el xml
$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<listaCiudades>\n";
for ($i = 0; $i < count($arrayCiudades); $i++) {
  $xml .= "<ciudad>";
  foreach ($arrayCiudades[$i] as $clave) {
    $xml .= "<id>" . $arrayCiudades[$i]['clave1'] . "</id>";
    $xml .= "<name>" . $arrayCiudades[$i]['clave2'] . "</name>";
    $xml .= "<distrito>" . $arrayCiudades[$i]['clave3'] . "</distrito>";
    $xml .= "<poblacion>" . $arrayCiudades[$i]['clave4'] . "</poblacion>";
  }
  $xml .= "</ciudad>";
}
$xml .= "</listaCiudades>\n";
header('Content-Type: text/xml');
echo $xml;

$conexion->close();
?>