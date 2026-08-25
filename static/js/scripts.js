// 1. Envío del Formulario de Contacto
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const responseDiv = document.getElementById('formResponse');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();

    if (res.ok) {
      responseDiv.style.color = '#4ade80';
      responseDiv.textContent = '¡Mensaje enviado con éxito!';
      document.getElementById('contactForm').reset();
    } else {
      responseDiv.style.color = '#f87171';
      responseDiv.textContent = data.message || 'Ocurrió un error';
    }
  } catch (error) {
    responseDiv.style.color = '#f87171';
    responseDiv.textContent = 'No se pudo conectar con el servidor (API).';
  }
});

// 2. Animación al hacer Scroll (Se ejecuta automáticamente al cargar la página)
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.35
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.reveal');
  sections.forEach(section => observer.observe(section));
});