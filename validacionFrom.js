function validarRegistroForm() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar-contrasena").value;
  
    // Validar que el campo nombre no esté vacío
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre y apellido.");
      return false;
    }
  
    // Validar que el campo email sea una dirección de correo válida
    var emailRegExp = /^\S+@\S+\.\S+$/;
    if (!emailRegExp.test(email)) {
      alert("Por favor, ingresa una dirección de correo válida.");
      return false;
    }
  
    // Validar que la contraseña y la confirmación de contraseña coincidan
    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return false;
    }
  
    // Si todas las validaciones pasan, el formulario se envía
    return true;
  }

  function enviarFormulario() {
    // Realiza validaciones adicionales si es necesario
    if (validarRegistroForm()) {
      // Si las validaciones son exitosas, muestra un mensaje de confirmación
      alert("Formulario enviado con éxito.");
  
      // Restablece el formulario
      document.getElementById("registro-form").reset();
    } else {
      // Si las validaciones fallan, muestra un mensaje de error o realiza otras acciones.
      alert("Por favor, completa el formulario correctamente.");
    }
  }