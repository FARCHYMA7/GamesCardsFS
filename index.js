document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Make a GET request to the Node.js server

        const response = await fetch('http://localhost:3010/games');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        counter = 0

        // Extract names and flags
        //   const names = data.map(country => country.name).join('\n');

        data.map(game => {
            document.getElementById('nameTextArea').value += counter + " " + game.title + "\n"
            counter++
        });

        const images = data.map(game => game.thumbnail).join('\n');

        // Update text areas
        //    document.getElementById('nameTextArea').value = names;
        document.getElementById('imagesTextArea').value = images;
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});