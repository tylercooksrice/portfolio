const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentsInput = document.getElementById('comments');
  const charCount = document.getElementById('charCount');
  const formErrors = [];

  // Masking & Flash Error
  nameInput.addEventListener('input', (e) => {
    const pattern = /^[A-Za-z]*$/;
    if (!pattern.test(e.target.value)) {
      flashError(nameInput, 'Only letters are allowed');
      e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
    }
  });

  function flashError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    input.classList.add('flash');
    setTimeout(() => {
      errorDiv.textContent = '';
      input.classList.remove('flash');
    }, 2000);
  }

  // Comments Countdown
  commentsInput.addEventListener('input', () => {
    const remaining = 200 - commentsInput.value.length;
    charCount.textContent = `${remaining} characters remaining`;
    if (remaining <= 20) {
      charCount.style.color = 'red';
    } else {
      charCount.style.color = 'black';
    }
    if (remaining < 0) {
      formErrors.push({ field: 'comments', message: 'Character limit exceeded' });
    }
  });

  // Custom Validation Error Tracking
  form.addEventListener('submit', (e) => {
    formErrors.length = 0; // Reset errors
    if (!nameInput.checkValidity()) {
      formErrors.push({ field: 'name', message: 'Invalid name' });
    }
    if (!emailInput.checkValidity()) {
      formErrors.push({ field: 'email', message: 'Invalid email' });
    }

    document.getElementById('formErrors').value = JSON.stringify(formErrors);

    if (formErrors.length > 0) {
      e.preventDefault();
      console.log('Errors:', formErrors);
      alert('Form contains errors!');
    }
  });