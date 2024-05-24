document.getElementById('goButton').addEventListener('click', async () => {
    const gamesContainer = document.getElementById('gamesContainer');
    gamesContainer.innerHTML = ''; // Clear previous games
  
    try {
      const response = await fetch('http://localhost:3030/games');
      const games = await response.json();
      gamesLen = games.length
  
      games.forEach((game) => {
  
        const gameCard = document.createElement('div');
        gameCard.className = 'gameCard';
        gameCard.innerHTML = `
          <h3>${game.title}</h3>
          <img src="${game.thumbnail}" alt="${game.title}">
        `;
        gamesContainer.appendChild(gameCard);
      });
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  });
  