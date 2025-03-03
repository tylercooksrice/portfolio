document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const comments = document.getElementById('comments');
    const charCount = document.getElementById('comments-info');
    const formErrors = [];

    comments.addEventListener('input', () => {
      const remaining = 200 - comments.value.length;
      charCount.textContent = `${remaining} characters remaining`;
      charCount.style.color = remaining <= 20 ? 'red' : 'black';
    });

    form.addEventListener('submit', (e) => {
      formErrors.length = 0;

      if (!form.checkValidity()) {
        e.preventDefault();
        const fields = ['firstName', 'lastName', 'email', 'phone'];
        fields.forEach(field => {
          const input = document.getElementById(field);
          if (!input.checkValidity()) {
            formErrors.push({ field, message: input.validationMessage });
          }
        });
      }

      document.getElementById('formErrors').value = JSON.stringify(formErrors);

      if (formErrors.length > 0) {
        alert('Form contains errors!');
        console.log('Errors:', formErrors);
      }
    });
  });
