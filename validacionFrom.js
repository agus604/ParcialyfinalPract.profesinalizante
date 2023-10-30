const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const contrasenaInput = document.getElementById('contrasena');
const confirmarContrasenaInput = document.getElementById('confirmar-contrasena');
const fechaInput = document.getElementById('fecha');
const horaInput = document.getElementById('hora');
const servicioInput = document.getElementById('servicio');
const registroReservaForm = document.getElementById('registro-reserva-form');

registroReservaForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  if (validarFormulario()) {
    alert("Tu registro y reserva se realizaron correctamente");
    registroReservaForm.reset(); // Resetea el formulario
  }
});

function validarFormulario() {
    // Verificar si los campos están vacíos
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre y apellido.');
        return false;
    }

    if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu email.');
        return false;
    }

    if (contrasenaInput.value.trim() === '') {
        alert('Por favor, ingresa una contraseña.');
        return false;
    }

    if (confirmarContrasenaInput.value.trim() === '') {
        alert('Por favor, confirma tu contraseña.');
        return false;
    }

    if (fechaInput.value.trim() === '') {
        alert('Por favor, selecciona una fecha.');
        return false;
    }

    if (horaInput.value.trim() === '') {
        alert('Por favor, selecciona una hora.');
        return false;
    }

    if (servicioInput.value.trim() === '') {
        alert('Por favor, selecciona un servicio.');
        return false;
    }

    // Verificar si las contraseñas coinciden
    if (contrasenaInput.value !== confirmarContrasenaInput.value) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Si todo está bien, enviar el formulario
    return true;
}
function enviarFormulario() {
  const formulario = document.getElementById('registro-reserva-form'); // Obtén el formulario único en tu página

  if (validarFormulario()) {
    alert("Tu registro se realizó correctamente");
    if (formulario !== null) {
      formulario.submit(); // Envía el formulario
    }
  }
}