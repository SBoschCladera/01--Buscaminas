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

$sql = "SELECT name FROM country";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    array_push($arrayPaises, $row["name"]);
  }
} else {
  echo "0 results";
}

$conexion->close();


// Parámetro q de la URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach ($arrayPaises as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "Sin coincidencias" : $hint;
?>