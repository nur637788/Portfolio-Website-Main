// Simple Admin Login System
const loginBox = document.getElementById("login-box");
const adminContainer = document.getElementById("admin-container");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const errorMsg = document.getElementById("error-msg");
const dataTable = document.getElementById("data-table");

// Default admin credentials
const ADMIN_USERNAME = "nur";
const ADMIN_PASSWORD = "nur637788";

// Sample data (তুমি চাইলে LocalStorage বা Firebase থেকেও নিতে পারো)
let messages = JSON.parse(localStorage.getItem("messages")) || [
    { name: "Nur", email: "mdnoyon637788@gmail.com", phone: "01749535688", message: "Hello, I need a website!" },
    { name: "Abdun Nur", email: "mdnoyon6363@outlook.com", phone: "01759305663", message: "Portfolio looks amazing!" }
];

// 🔹 Login system
loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        loginBox.classList.add("hidden");
        adminContainer.classList.remove("hidden");
        loadMessages();
    } else {
        errorMsg.textContent = "❌ Invalid Username or Password!";
    }
});

// 🔹 Logout button
logoutBtn.addEventListener("click", () => {
    adminContainer.classList.add("hidden");
    loginBox.classList.remove("hidden");
});


// 🔹 Load messages in table
function loadMessages() {
    dataTable.innerHTML = "";

    messages.forEach((msg, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${msg.name}</td>
      <td>${msg.email}</td>
      <td>${msg.phone}</td>
      <td>${msg.message}</td>
      <td><button class="delete-btn" data-index="${index}">🗑</button></td>
    `;
        dataTable.appendChild(row);
    });

    // Delete button handler
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            deleteMessage(index);
        });
    });
}

// 🔹 Delete message function
function deleteMessage(index) {
    if (confirm("Are you sure you want to delete this message?")) {
        messages.splice(index, 1);
        localStorage.setItem("messages", JSON.stringify(messages));
        loadMessages();
    }
}
