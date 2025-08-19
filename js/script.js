document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
  };

  const res = await fetch("https://your-worker-name.workers.dev", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
  });

  if (res.ok) {
      alert("Message sent! We'll get back to you soon.");
      e.target.reset();
  } else {
      alert("Error sending message. Please try again.");
  }
});
