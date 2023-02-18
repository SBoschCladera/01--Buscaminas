<?php
// Conexión MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "empresa";
$conn = new mysqli($servername, $username, $password, $dbname);

// Obtener el id del registro a borrar
$id = $_POST['id'];

// Ejecutar consulta DELETE en la tabla correspondiente
$sql = "DELETE FROM emp WHERE EMP_NO = " . $id;

if ($conn->query($sql) === TRUE) {
  echo "Registro eliminado con éxito";
} else {
  echo "Error al eliminar el registro: " . $conn->error;
}

// Cerrar conexión MySQL
$conn->close();
?>