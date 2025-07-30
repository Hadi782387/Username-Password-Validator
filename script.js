const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('loginForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous messages
      emailError.textContent = '';
      passwordError.textContent = '';
      successMsg.textContent = '';

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

      let isValid = true;

      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters long, include uppercase, lowercase, and a number.';
        isValid = false;
      }

      if (isValid) {
        successMsg.textContent = '✅ Form submitted successfully!';
        form.reset(); // Clear the form
      }
    });