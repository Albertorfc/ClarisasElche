---
layout: base.njk
title: Contacto
---

<div class="columnas-balanceadas">

  <div>
    <h2>Visítanos</h2>
    <p><strong>Monasterio de Santa Clara de Elche</strong><br />
    Camino del Pantano, s/n<br />
    03202 Elche (Alicante), España</p>

    <p>
      <strong>Teléfono:</strong>
      <a href="tel:+34965452964" style="text-decoration: none; color: #6b4e2f;">
        <span style="font-size: 1.1rem;">📞 965 452 964</span>
      </a>
    </p>
  </div>

  <div>
    <h2>Horarios de Misa</h2>
    <p><strong>Lunes a sábado:</strong> 8:00 h<br />
    <strong>Domingos y festivos:</strong> 11:00 h</p>

    <h2>Visitas en el torno</h2>
    <p>
      Lunes a viernes: 10:00 – 13:00 y 17:00 – 18:30<br />
      Sábados: 10:00 – 12:30<br />
      <em>(Domingos y festivos no se atiende)</em>
    </p>
  </div>

  <div>
    <h2>Pedidos de dulces</h2>
    <p>Puedes realizar encargos llamando al teléfono o escribiéndonos por Instagram:</p>
    <p>
      <a href="https://www.instagram.com/deliciasdesantaclaraelche/" target="_blank" class="boton">@DeliciasDeSantaClaraElche</a>
    </p>
  </div>

  <div>
    <h2>Cómo llegar</h2>
    <p>
      El monasterio se encuentra junto al cauce del río Vinalopó, a las afueras de Elche, cerca del Puente del <em>Bimil·lenari</em>. Se puede llegar fácilmente en coche (con aparcamiento disponible) o caminando desde la Avenida del Alcalde Vicente Quiles, junto al Parque Infantil de Tráfico.
    </p>
  </div>

</div>

<!-- Mapa centrado -->
<section style="margin: 3rem auto; max-width: 800px;">
  <h2 style="text-align: center;">Mapa</h2>
  <div>
    <!-- Sustituye el src por el correcto que te da Google Maps -->
    <iframe 
      src="https://www.google.com/maps/embed?pb=TU_ENLACE_AQUI"
      width="100%" height="300" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>

<!-- Formulario -->
<section>
  <h2 style="text-align: center;">Formulario de contacto</h2>

  <form action="https://formspree.io/f/mnnzadll" method="POST" style="max-width: 600px; margin: 2rem auto; padding: 1rem;">
    <label for="nombre">Nombre</label><br />
    <input type="text" id="nombre" name="nombre" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"><br />

    <label for="email">Correo electrónico</label><br />
    <input type="email" id="email" name="email" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"><br />

    <label for="mensaje">Mensaje</label><br />
    <textarea id="mensaje" name="mensaje" rows="6" required style="width:100%; padding: 0.5rem; margin-bottom: 1rem;"></textarea><br />

    <button type="submit" class="boton">Enviar mensaje</button>
  </form>
</section>

<!-- Bendición -->
<section style="margin-top: 4rem;">
  <h2 style="text-align: center;">Bendición de Santa Clara</h2>
  <p class="frase-impacto">
    El Señor os bendiga y os guarde. <br />
    Os muestre su faz y tenga misericordia de vosotras. <br />
    Vuelva su rostro a vosotras y os dé la paz.
  </p>
</section>
