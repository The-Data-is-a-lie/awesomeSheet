document.getElementById('updateDescriptionButton').addEventListener('click', function() {
    // Populate the data object with form field values
    var data = {
        input1: "Y",
        input2: document.getElementById('basics-character_generator-region').value,
        input3: document.getElementById('basics-character-race_generator').value,
        input4: document.getElementById('basics-character_generator-class').value,
        input5: document.getElementById('basics-character_generator-multi-class').value,
        input6: document.getElementById('basics-character_generator-alignment').value,
        input7: document.getElementById('basics-character_generator-gender').value,
        input8: document.getElementById('basics-character_generator-truly-random-feats').value,
        input9: document.getElementById('basics-character_generator-number-of-dice').value,
        input10: document.getElementById('basics-character_generator-dice-size').value,
        input11: document.getElementById('basics-character_generator-highest-level-possible').value,
        input12: document.getElementById('basics-character_generator-lowest-level-possible').value,
        input13: document.getElementById('basics-character_generator-starting-gold').value
        // Add more properties as needed for other form fields
    };
    
    // Call the function to send data to the Flask server
    sendDataToServer(data);
});

function sendDataToServer(data) {
    fetch('https://pathfinder-char-creator.onrender.com/update_character_data', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Successfully Sent Data")
        // Populate form fields with received data if they are empty
        updateFormField('basics-character_generator-region', data.input2);
        updateFormField('basics-character-race_generator', data.input3);
        updateFormField('basics-character_generator-class', data.input4);
        updateFormField('basics-character_generator-multi-class', data.input5);
        updateFormField('basics-character_generator-alignment', data.input6);
        updateFormField('basics-character_generator-number-of-dice', data.input7);
        updateFormField('basics-character_generator-dice-size', data.input8);
        updateFormField('basics-character_generator-highest-level-possible', data.input9);
        updateFormField('basics-character_generator-lowest-level-possible', data.input10);
        updateFormField('basics-character_generator-starting-gold', data.input11);
    })
    .catch(error => {
        // Handle error
        console.error('Error sending data to server:', error);
    });
}

function updateFormField(fieldId, value) {
    var field = document.getElementById(fieldId);
    if (field.value.trim() === '') { // Check if the field is empty
        field.value = value; // Update the field value only if it's empty
    }
}
