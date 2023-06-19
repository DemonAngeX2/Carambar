const jokeContainer = document.getElementById('jokeContainer');
const allBlaguesButton = document.getElementById('allBlaguesButton');
const hideBlaguesButton = document.getElementById('hideBlaguesButton');
const blaguesButtonsContainer = document.getElementById('blaguesButtonsContainer');

// Fonction pour afficher une blague dans le conteneur
function displayJoke(joke) {
  const jokeHTML = `
    <div class="joke-container">
      <p class="joke-question">${joke.question}</p>
      <p class="joke-answer">${joke.answer}</p>
    </div>
  `;
  jokeContainer.innerHTML = jokeHTML;
}

// Fonction pour afficher toutes les blagues dans le conteneur
function displayAllJokes(jokes) {
  let jokesHTML = '';
  jokes.forEach(joke => {
    jokesHTML += `
      <div class="joke-container">
        <p class="joke-question">${joke.question}</p>
        <p class="joke-answer">${joke.answer}</p>
      </div>
    `;
  });
  jokeContainer.innerHTML = jokesHTML;
  allBlaguesButton.style.display = 'none';
  hideBlaguesButton.style.display = 'inline-block';
}

// Fonction pour cacher toutes les blagues
function hideAllJokes() {
  jokeContainer.innerHTML = '';
  hideBlaguesButton.style.display = 'none';
  allBlaguesButton.style.display = 'inline-block';
}

// Fonction pour obtenir une blague au hasard depuis l'API
function getRandomJoke() {
  fetch('https://carambar-api.onrender.com/api/blagues/hasard', { mode: 'cors' })
    .then(response => response.json())
    .then(joke => {
      displayJoke(joke);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
    });
}

// Fonction pour obtenir une blague par son ID depuis l'API
function getBlagueById() {
  const id = prompt('Entrez l\'ID de la blague :');
  if (id) {
    fetch(`https://carambar-api.onrender.com/api/blagues/${id}`, { mode: 'cors' })
      .then(response => response.json())
      .then(joke => {
        displayJoke(joke);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite :', error);
      });
  }
}

// Fonction pour obtenir toutes les blagues depuis l'API et afficher seulement lorsque le bouton est pressé
function getAllBlagues() {
  fetch('https://carambar-api.onrender.com/api/blagues', { mode: 'cors' })
    .then(response => response.json())
    .then(jokes => {
      displayAllJokes(jokes);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
    });
}