const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  // Get previous messages or empty array
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Add new message
  messages.push(formData);

  // Save to localStorage
  localStorage.setItem('messages', JSON.stringify(messages));

  alert("✅ Message Submitted Successfully!");
  form.reset();
});
