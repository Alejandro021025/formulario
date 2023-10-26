document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const submitButton = document.getElementById('submit-button');
    const container = document.getElementById('container');
    const successMessage = document.getElementById('success-message');
  
    submitButton.addEventListener('click', function () {
      // Validación simple de correo electrónico
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        emailError.textContent = 'Valid email required';
        emailInput.classList.add('error'); // Agrega la clase 'error' al campo de correo
        emailInput.focus();
      } else {
        emailError.textContent = ''; // Limpia el mensaje de error
        emailInput.classList.remove('error'); // Elimina la clase 'error' si el correo es válido
  
        // Cambia el contenido del contenedor por el contenido de success-message
        container.innerHTML = successMessage.innerHTML;
      }
    });
  
    // Función para validar correo electrónico usando una expresión regular
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
  });
  
  