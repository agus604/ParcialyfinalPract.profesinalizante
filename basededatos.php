<?php
// Conectar a la base de datos 
$host = 'localhost';
$db = 'reservaciones';
$user = 'root';
$pass = '';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
} catch (PDOException $e) {
  die("Error de conexión a la base de datos: " . $e->getMessage());
}

// Recibir los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$servicio = $_POST['servicio'];

// Insertar los datos en la base de datos
$stmt = $pdo->prepare("INSERT INTO reservaciones (nombre, email, fecha, hora, servicio) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$nombre, $email, $fecha, $hora, $servicio]);

// Redireccionar a una página de confirmación o mostrar un mensaje
header('Location: verReservas.php');
?>