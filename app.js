function get_characters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");
  results.then((response) => {
    response.json().then((data) => {
      done(data.results);
    });
  });
}

get_characters((data) => {
  data.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
            <h2>Nombre: ${personaje.name}</h2>
            <p>Estado: ${personaje.status}</p>
            <p>Especie: ${personaje.species}</p>
            <p>Genero: ${personaje.gender}</p>
            <p>Origen: ${personaje.origin.name}</p>
            <p>Ubicacion: ${personaje.location.name}</p>
            
        </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
  });
});

function get_characters_avatar(done) {
  const results = fetch("https://last-airbender-api.fly.dev/api/v1/characters");
  results.then((response) => {
    response.json().then((data) => {
      done(data);
    });
  });
}

get_characters_avatar((data) => {
  data.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${personaje.photoUrl}" alt="${personaje.name}">
            </div>
            <h2>Nombre: ${personaje.name}</h2>
            <p>Afiliacion: ${personaje.affiliation}</p>
            <p>Enemigos: ${personaje.enemies}</p>

        </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
  });
});
