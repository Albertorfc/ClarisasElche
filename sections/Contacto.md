---
layout: base.njk
title: Contacto
---

<div class="layout-grid">

  <!-- Visítanos -->
  <div>
    <h2>Visítanos</h2>
    <p><strong>Monasterio de Santa Clara de Elche</strong><br />
    Camino del Pantano, s/n<br />
    03202 Elche (Alicante), España</p>

    <p><strong>Teléfono:</strong> <a href="tel:+34966123456">966 123 456</a><br />
    <strong>Email:</strong> <a href="mailto:clarisaselche@gmail.com">clarisaselche@gmail.com</a></p>
  </div>

  <!-- Misas y torno -->
  <div>
    <h2>Horarios de Misa</h2>
    <p>
      <strong>Lunes a sábado:</strong> 8:00 h<br />
      <strong>Domingos y festivos:</strong> 11:00 h
    </p>

    <h2>Visitas en el torno</h2>
    <p>
      Lunes a viernes: 10:00 – 13:00 y 17:00 – 18:30<br />
      Sábados: 10:00 – 12:30<br />
      <em>(Domingos y festivos no se atiende)</em>
    </p>
  </div>

  <!-- Pedidos -->
  <div>
    <h2>Pedidos de dulces</h2>
    <p>Puedes realizar encargos llamando al teléfono o escribiéndonos por Instagram:</p>
    <p>
      <a href="https://www.instagram.com/deliciasdesantaclaraelche/" target="_blank" class="boton">@DeliciasDeSantaClaraElche</a>
    </p>
  </div>

  <!-- Cómo llegar -->
  <div>
    <h2>Cómo llegar</h2>
    <p>
      El monasterio se encuentra junto al cauce del río Vinalopó, cerca del Puente del <em>Bimil·lenari</em>. Puedes acceder en coche (hay aparcamiento) o a pie desde la Avenida del Alcalde Vicente Quiles.
    </p>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.9507165907793!2d-0.6957595846655182!3d38.26483547967326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c67861a3a6db%3A0xb8ea02b0a1a392fd!2sMonasterio%20de%20Santa%20Clara!5e0!3m2!1ses!2ses!4v1716400000000" 
      width="100%" height="300" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

</div>

<!-- Formulario de contacto -->
<h2>Formulario de contacto</h2>

<form action="https://formspree.io/f/mnnzadll" method="POST" style="max-width: 600px; margin: 2rem auto;">
  <label for="nombre">Nombre</label><br />
  <input type="text" id="nombre" name="nombre" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"><br />

  <label for="email">Correo electrónico</label><br />
  <input type="email" id="email" name="email" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"><br />

  <label for="mensaje">Mensaje</label><br />
  <textarea id="mensaje" name="mensaje" rows="6" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"></textarea><br />

  <button type="submit" class="boton">Enviar mensaje</button>
</form>

<!-- Bendición -->
<p class="frase-impacto">
  Gracias por tu interés en nuestra comunidad.<br />
  Desde la clausura, oramos por ti.<br />
  Que el Señor te colme de paz y bendiciones.
</p>
