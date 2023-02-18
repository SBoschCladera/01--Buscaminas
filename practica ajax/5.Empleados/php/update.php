<?php
// Conexión MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "empresa";
$conn = new mysqli($servername, $username, $password, $dbname);

// Obtiene los datos enviados a través de la solicitud POST
$id = $_POST['EMP_NO'];
$apellidos = $_POST['COGNOM'];
$oficio = $_POST['OFICI'];
$jefe = $_POST['CAP'];
$fechaAlta = $_POST['DATA_ALTA'];
$salario = $_POST['SALARI'];
$comision = $_POST['COMISSIO'];
$departamento = $_POST['DEPT_NO'];

$sql1 = "ALTER TABLE emp DROP FOREIGN KEY emp_ibfk_2;";
if ($conn->query($sql1) === TRUE) {
  echo "Foreign borrada correctamente";
}
$sql2 = "ALTER TABLE emp DROP FOREIGN KEY emp_ibfk_1;";
if ($conn->query($sql2) === TRUE) {
  echo "Foreign borrada correctamente";
}

// Actualiza el registro en la base de datos
$sql = "UPDATE emp SET EMP_NO='$id', COGNOM='$apellidos', OFICI='$oficio',  CAP='$jefe', DATA_ALTA='$fechaAlta',  SALARI='$salario', COMISSIO='$comision' , DEPT_NO= '$departamento' WHERE EMP_NO=$id";
if ($conn->query($sql) === TRUE) {
  echo "Registro actualizado correctamente";
} else {
  echo "Error actualizando el registro: " . $conn->error;
}

// Cerrar conexión MySQL
$conn->close();
?>