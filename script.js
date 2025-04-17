document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const brith = document.getElementById('brith').value.trim();
  const gender = document.getElementById('gender').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const data = {
    firstName,
    lastName,
    email,
    phone,
    brith,
    gender,
    password
  };

  fetch('https://script.google.com/macros/s/AKfycbyvEozWDXOcYwO9hKYLGj10ovaxmQC_TnM-m5PlFATMzsQ05UvZ0ZowiXLxsgfAASJK4Q/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  alert('Registration submitted successfully!');
  document.getElementById('registrationForm').reset();
});
