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

// Fixed: Use parameterized queries
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = ?";
  return db.execute(query, [userId]);
}

// Fixed: Use textContent instead of innerHTML
function displayUsername(username) {
  document.getElementById('user').textContent = username;
}

// Fixed: Use environment variables
const API_KEY = process.env.API_KEY;

// Fixed: Validate and sanitize input
function executeCommand(userInput) {
  const sanitized = userInput.replace(/[^a-zA-Z0-9]/g, '');
  require('child_process').exec(`ls ${sanitized}`);
}