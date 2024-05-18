// Use dynamic import() for modules
const express = require('express');
const cors = require('cors');
// Create an Express app
const app = express();
const port = 3000; // You can use any available port

app.use(cors());
// Define a route to fetch and return data from the API
app.get('/countries', async (req, res) => {
    try {
        // Fetch data from the API
        const apiResponse = await fetch('https://restcountries.com/v2/all?fields=name,flag');

        // Check if the request was successful (status code 200)
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }

        // Parse the response JSON
        const data = await apiResponse.json();

        // Send the data as a response
        res.json(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
