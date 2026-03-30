// SQL Injection vulnerability
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId; // SQL Injection
  return db.execute(query);
}

// XSS vulnerability
function displayUsername(username) {
  document.getElementById('user').innerHTML = username; // XSS
}

// Hardcoded secret
const API_KEY = "sk_live_1234567890abcdef"; // Hardcoded secret

// Command injection
function executeCommand(userInput) {
  const cmd = "ls " + userInput; // Command injection
  require('child_process').exec(cmd);
}