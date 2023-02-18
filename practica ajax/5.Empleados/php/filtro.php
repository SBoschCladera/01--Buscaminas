<?php
$arrayIds = array();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "empresa";

// Crea la conexión
$conexion = new mysqli($servername, $username, $password, $dbname);
// Comprueba la conexión
if ($conexion->connect_error) {
  die("Algo ha fallado en la conexión: " . $conexion->connect_error);
}

// Parámetro q de la URL
$q = $_REQUEST["q"];

$sql = "SELECT EMP_NO, COGNOM FROM emp where EMP_NO like '$q%'";
$resultado = $conexion->query($sql);

// Crea un tabla con la información recogida de la consulta a base de datos
if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $arrayIds[] = array('id' => $row["EMP_NO"], 'apellidos' => $row["COGNOM"]);
  }
} else {
  echo "0 results";
}

header('Content-Type: application/json');
// Codifica el array en formato JSON
echo json_encode($arrayIds);

$conexion->close();
?>