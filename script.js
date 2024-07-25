function hackWhatsApp() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
  
    if (username === 'admin' && password === 'password') {
      errorElement.textContent = 'Hacking successful! Your WhatsApp account has been hacked.';
      // Here you can perform further actions like sending spam messages, stealing personal data, etc.
    } else {
      errorElement.textContent = 'Invalid credentials. Hacking failed.';
    }
  }