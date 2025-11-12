const loginBox = document.getElementById('login-box');
const adminContainer = document.getElementById('admin-container');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const errorMsg = document.getElementById('error-msg');
const dataTable = document.getElementById('data-table');

// Demo admin login info
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem('loggedIn', 'true');
        showAdminPanel();
    } else {
        errorMsg.textContent = "❌ Wrong Username or Password!";
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    location.reload();
});

function showAdminPanel() {
    loginBox.classList.add('hidden');
    adminContainer.classList.remove('hidden');

    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    if (messages.length === 0) {
        dataTable.innerHTML = `<tr><td colspan="4">No messages yet</td></tr>`;
    } else {
        dataTable.innerHTML = messages.map(msg => `
      <tr>
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.phone}</td>
        <td>${msg.message}</td>
      </tr>
    `).join('');
    }
}

// Check if already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    showAdminPanel();
}
