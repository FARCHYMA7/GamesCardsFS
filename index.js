document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Make a GET request to the Node.js server

        const response = await fetch('http://localhost:3000/countries');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        counter = 0

        // Extract names and flags
        //   const names = data.map(country => country.name).join('\n');

        data.map(country => {
            document.getElementById('nameTextArea').value += counter + " " + country.name + "\n"
            counter++
        });

        const flags = data.map(country => country.flag).join('\n');

        // Update text areas
        //    document.getElementById('nameTextArea').value = names;
        document.getElementById('flagsTextArea').value = flags;
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});