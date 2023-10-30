<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contrasena = $_POST["contrasena"];
    $fecha = $_POST["fecha"];
    $hora = $_POST["hora"];
    $servicio = $_POST["servicio"];

    // Verificar si las contraseñas coinciden
    $confirmar_contrasena = $_POST["confirmar-contrasena"];
    if ($contrasena !== $confirmar_contrasena) {
        echo "Las contraseñas no coinciden.";
        exit;
    }

    // Conectar a la base de datos (ajusta estos valores)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "reservaciones";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Insertar los datos en la tabla "reservaciones"
    $sql = "INSERT INTO reservaciones (nombre, email, contrasena, fecha, hora, servicio) VALUES ('$nombre', '$email', '$contrasena', '$fecha', '$hora', '$servicio')";

    if ($conn->query($sql) === TRUE) {
        // Registro y reserva exitosos
    } else {
        echo "Error al insertar el registro y la reserva: " . $conn->error;
    }

    $conn->close();
} else {
    // Manejo de solicitudes GET u otras situaciones
    echo "Acceso no autorizado.";
}
?>