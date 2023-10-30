<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $servicio = $_POST['servicio'];

    // Verificar que los campos no estén vacíos (puedes agregar más validaciones si es necesario)
    if (empty($nombre) || empty($email) || empty($contrasena) || empty($fecha) || empty($hora) || empty($servicio)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }
    
    // Conectar a la base de datos (cambia las credenciales según tu configuración)
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $dbname = "reservaciones";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insertar los datos en la base de datos
        $sql = "INSERT INTO reservaciones (nombre, email, contrasena, fecha, hora, servicio) VALUES (:nombre, :email, :contrasena, :fecha, :hora, :servicio)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':contrasena', $contrasena);
        $stmt->bindParam(':fecha', $fecha);
        $stmt->bindParam(':hora', $hora);
        $stmt->bindParam(':servicio', $servicio);

        if ($stmt->execute()) {
            
        } else {
            echo "Error al insertar el registro: " . $stmt->errorInfo()[2];
        }
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
    }

    $conn = null;
} else {
    echo "Acceso no autorizado";
}
header("Location: index.html");
exit;
?>