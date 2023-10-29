<?php
// Conectar a la base de datos (ajusta los valores según tu configuración)
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
header('Location: registro.html');

$stmt = $pdo->query("SELECT * FROM reservaciones");
$reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
  <tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Email</th>
    <th>Fecha</th>
    <th>Hora</th>
    <th>Servicio</th>
  </tr>
  <?php foreach ($reservas as $reserva) : ?>
    <tr>
      <td><?php echo $reserva['id']; ?></td>
      <td><?php echo $reserva['nombre']; ?></td>
      <td><?php echo $reserva['email']; ?></td>
      <td><?php echo $reserva['fecha']; ?></td>
      <td><?php echo $reserva['hora']; ?></td>
      <td><?php echo $reserva['servicio']; ?></td>
    </tr>
  <?php endforeach; ?>
</table>