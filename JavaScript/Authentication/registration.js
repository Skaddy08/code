// registration.js
const registerUser = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
  
    // Simple validation
    if (!username || !password || !fullName || !email || !dob) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Validate username format
    if (!isValidUsername(username)) {
      alert('Username must contain only letters, numbers, underscores, and be between 4 and 20 characters long.');
      return;
    }
  
    // Validate email format
    if (!isValidEmail(email)) {
      alert('Invalid email format.');
      return;
    }
  
    // Validate password strength
    if (!isStrongPassword(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }
  

  

  }
  
  // Simple email validation function
  function isValidEmail(email) {
    // Basic check for the presence of '@' and '.'
    return email.includes('@') && email.includes('.');
  }
  
  // Validate password strength function
  function isStrongPassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
  }
  
  // Validate username format function
  function isValidUsername(username) {
    // Username must contain only letters, numbers, underscores, and be between 4 and 20 characters long
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    return usernameRegex.test(username);
  }

  export default registerUser;
  