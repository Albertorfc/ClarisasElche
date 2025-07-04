<!DOCTYPE html>
<html lang="es">
<head>
  <link rel="stylesheet" href="../css/style.css" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vocación Clarisa</title>
  <style>
    body { margin: 0; font-family: 'Georgia', serif; background-color: #fdfaf5; color: #333; }
    header, footer { background-color: #e0d7c6; text-align: center; padding: 1.5rem; }
    nav { background-color: #a08966; }
    .nav-container {
      max-width: 1000px; margin: auto;
      display: flex; justify-content: space-between;
      align-items: center; padding: 0.5rem 1rem;
    }
    .nav-links {
      display: none; flex-direction: column;
      background-color: #a08966;
    }
    .nav-links a {
      color: white; text-decoration: none;
      padding: 0.75rem 1rem;
      border-top: 1px solid #d9c8b3;
    }
    .menu-toggle {
      background: none; border: none;
      font-size: 1.8rem; color: white;
      cursor: pointer;
    }
    .nav-links.show { display: flex; }
    section {
      max-width: 1000px;
      margin: auto;
      padding: 2rem 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    article {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    img {
      max-width: 100%;
      border-radius: 12px;
    }
    h2 { margin-bottom: 0.5rem; }
    @media(max-width: 767px) {
      section {
        grid-template-columns: 1fr;
      }
    }
    @media(min-width: 768px) {
      .nav-links { display: flex; flex-direction: row; }
      .nav-links a { border-top: none; }
      .menu-toggle { display: none; }
    }
  </style>
</head>
<body>
<header>
    <h1>Hermanas Pobres de Santa Clara</h1>
    <p>Monasterio de Santa Clara de Elche</p>
    <p>Viviendo el carisma de Santa Clara de Asís en Elche desde 1516</p>
  </header>
  

  <nav>
    <div class="nav-container">
      <button class="menu-toggle" onclick="document.querySelector('.nav-links').classList.toggle('show')">☰</button>
      <div class="nav-links">
        <a href="../index.html">Inicio</a>
        <a href="santa-clara.html">Santa Clara</a>
        <a href="hermanas-pobres.html">Hermanas Pobres</a>
        <a href="vocacion.html">Vocación Clarisa</a>
        <a href="en-elche.html">En Elche</a>
        <a href="oraciones.html">Oraciones</a>
        <a href="tercera-orden.html">Tercera Orden</a>
        <a href="colabora.html">Colabora</a>
        <a href="visitanos.html">Visítanos</a>
      </div>
    </div>
  </nav>

  <section>
    <article>
      <h2>Seguimiento de Cristo Pobre y Crucificado</h2>
      <img src="../imagenes/seguimiento-cristo.png" alt="Seguimiento de Cristo Pobre y Crucificado">
      <p>El centro de la vida clarisa es Jesucristo, especialmente en su pobreza, humildad y entrega total al Padre. Las Clarisas buscan configurarse con Él, viviendo como Él vivió: sin posesiones, en obediencia amorosa, fraternidad y adoración continua. La Regla de Santa Clara expresa y protege esta vocación, pero no la sustituye: su finalidad es conducirlas a una unión más íntima con Cristo vivo y resucitado.</p>
    </article>

    <article>
      <h2>Vida Contemplativa</h2>
      <img src="../imagenes/vida-contemplativa.png" alt="Vida Contemplativa">
      <p>Las Clarisas están llamadas a una vida contemplativa, que significa centrarse en la oración, la adoración y la comunión constante con Dios. Su vocación no consiste en la actividad externa, sino en ofrecer su vida como alabanza y súplica continua por la Iglesia y por el mundo. Su oración silenciosa sostiene espiritualmente a muchos, aunque ellas permanezcan ocultas.</p>
    </article>

    <article>
      <h2>Pobreza Radical</h2>
      <img src="../imagenes/pobreza-radical.png" alt="Pobreza Radical">
      <p>Inspiradas por el Evangelio y por el testimonio de San Francisco y Santa Clara, viven una pobreza real y concreta. No poseen bienes ni rentas fijas, y su sustento depende de la caridad y del trabajo de sus manos. Esta pobreza es una forma de libertad espiritual, que las despoja de todo para depender solo de Dios. Es también una forma de solidaridad con los pobres del mundo.</p>
    </article>

    <article>
      <h2>Clausura Papal</h2>
      <img src="../imagenes/clausura-papal.png" alt="Clausura Papal">
      <p>Viven bajo clausura papal, lo cual implica una separación física del mundo exterior para dedicarse exclusivamente a Dios. Esta clausura no es aislamiento, sino una consagración más intensa, que las convierte en signo profético del Reino de los Cielos. A través de su retiro, hacen presente lo invisible y eterno en medio del mundo.</p>
    </article>

    <article>
      <h2>Vida Fraterna en Comunidad</h2>
      <img src="../imagenes/vida-fraterna.png" alt="Vida Fraterna en Comunidad">
      <p>Viven juntas como hermanas, compartiendo la vida diaria en un ambiente de caridad, humildad, servicio y perdón. La comunidad no es un simple entorno práctico, sino un verdadero espacio teológico: allí aprenden a amar como Cristo, a sobrellevarse mutuamente y a caminar juntas hacia la santidad. La fraternidad es parte esencial de su testimonio.</p>
    </article>

    <article>
      <h2>Liturgia y Oración</h2>
      <img src="../imagenes/liturgia-oracion.png" alt="Liturgia y Oración">
      <p>La oración litúrgica estructura el día de las Clarisas. Rezan la Liturgia de las Horas (Laudes, Oficio de Lectura, Hora intermedia, Vísperas y Completas) en comunidad, participan diariamente en la Eucaristía y dedican largos espacios a la oración personal y a la adoración del Santísimo Sacramento. Su vida entera se convierte en una ofrenda orante.</p>
    </article>

    <article>
      <h2>Trabajo Manual</h2>
      <img src="../imagenes/trabajo-manual.png" alt="Trabajo Manual">
      <p>El trabajo es parte de su vida de oración y pobreza. Realizan tareas manuales como bordado, elaboración de dulces, hostias, o iconos, según el monasterio. Este trabajo no busca riqueza, sino contribuir a su sustento y ofrecer a Dios un acto de amor y sencillez. Lo realizan en silencio, con recogimiento, como prolongación de su vida espiritual.</p>
    </article>

    <article>
      <h2>Vida de Silencio y Retiro</h2>
      <img src="../imagenes/vida-silencio.png" alt="Vida de Silencio y Retiro">
      <p>El silencio favorece el recogimiento interior y la escucha de Dios. Las Clarisas cultivan un ambiente de silencio exterior para alimentar la oración y la contemplación. También hacen retiros espirituales periódicos y dedican tiempos a la soledad para profundizar su relación con el Señor. Este silencio es fértil: abre espacio a la gracia.</p>
    </article>

    <article>
      <h2>Obediencia y Humildad</h2>
      <img src="../imagenes/obediencia-humildad.png" alt="Obediencia y Humildad">
      <p>Las hermanas profesan el voto de obediencia, comprometiéndose a buscar y cumplir la voluntad de Dios a través del discernimiento comunitario y la guía de la Madre Abadesa. Esta obediencia está profundamente unida a la humildad, virtud central en su camino espiritual. Renuncian a imponer su voluntad para crecer en libertad interior y en caridad fraterna.</p>
    </article>

    <article>
      <h2>Testimonio de Amor y Esperanza</h2>
      <img src="../imagenes/testimonio-amor.png" alt="Testimonio de Amor y Esperanza">
      <p>Aunque escondidas del mundo, su vida tiene una dimensión profundamente misionera. Son testigos del amor incondicional de Dios, del valor de lo eterno, y del poder transformador de la oración. Su existencia silenciosa y entregada es una semilla de esperanza para la humanidad, un testimonio de que Cristo vive y sigue llamando corazones a amarlo sin reservas.</p>
    </article>
  </section>

  
<footer>
    <p>
      <a href="https://www.instagram.com/deliciasdesantaclaraelche/" target="_blank" style="text-decoration: none; color: #6b4e2f;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style="width:20px; vertical-align:middle; margin-right:6px;">
        @deliciasdesantaclaraelche
      </a>
    </p>
    <p>&copy; 2025 Hermanas Clarisas de Elche – Convento de Santa Clara</p>
  </footer>
</body>
</html>
