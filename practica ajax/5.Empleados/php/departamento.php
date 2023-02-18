<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Aquí va todo el código que realiza la consulta a la base de datos

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "empresa";

    // Crea la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Realiza la consulta
    $sql = "SELECT DEPT_NO, DNOM, LOC  FROM dept";
    $result = $conn->query($sql);

    // Crea un arreglo con los nombres de usuario
    $emp = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $emp[] = array('id' => $row["DEPT_NO"], 'nombre' => $row["DNOM"], 'lugar' => $row["LOC"]);
        }
    }

    // Imprime el resultado en formato JSON
    echo json_encode($emp);

    // Cierra la conexión
    $conn->close();
}
?>