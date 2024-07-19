function checkPasswords() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('passwordError');

    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match. Please try again.';
      document.getElementById('password').value = "";  document.getElementById('confirmPassword').value = "";  document.getElementById('password').focus();  } else {
      errorMessage.textContent = '';  }
  }

  function showRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
  }