// renderer/scripts/login.js
const { ipcRenderer } = require('electron');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        ipcRenderer.send('login-success');
    } else {
        alert('Invalid credentials');
    }
});

function goHome() {
    window.location.href = 'index.html';
}
