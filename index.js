document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Make a GET request to the Node.js server

        const response = await fetch('http://localhost:3030/games');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        counter = 0

        // Extract names and flags
        //   const names = data.map(country => country.name).join('\n');

        console.log(data)



        for (i = 0 ; i < data.length; i++) {

            temp = document.createElement('div');
            temp.className = 'results';
            temp.innerHTML = '<div class="card">'+

            '<div class="imgBox">'+
            ' <img src="'+data[i].thumbnail+'</div>'+

            'div class="contentBox">'+
            ' <h3>'+data[i].title+'</div>';

            document.getElementsByClassName('container')[0].appendChild(temp);

        }



        

        // data.map(game => {
        //     document.getElementById('nameTextArea').value += counter + " " + game.title + "\n"
        //     counter++
        // });

        // const images = data.map(game => game.thumbnail).join('\n');

        // // Update text areas
        // //    document.getElementById('nameTextArea').value = names;
        // document.getElementById('imagesTextArea').value = images;
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});