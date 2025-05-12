document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const age = parseInt(document.getElementById('age').value);
    const terms = document.getElementById('terms').checked;
    const message = document.getElementById('message');
  
    if (!name || !email || password.length < 6 || isNaN(age) || age < 18 || !terms) {
      message.textContent = 'Please fill in all fields correctly.';
      message.style.color = 'red';
    } else {
      message.textContent = 'Registration successful!';
      message.style.color = 'green';
    }
  });
  
  // Interactivity: Background color change
  document.getElementById('colorButton').addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  