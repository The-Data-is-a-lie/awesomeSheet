fetch('https://pathfinder-char-creator.onrender.com/get_data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the received data here
    })
    .catch(error => console.error('Error:', error));
