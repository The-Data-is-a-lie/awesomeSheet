// featsInfo.js

// Define the function
function displayFeatsInfo(featsDescriptionElement, characterData) {
    const info = characterData.feats;
    // Initialize an empty string to hold the formatted info
    let formattedInfo = '<ul>';
    
    // Trigger a click event on a specific button with a data attribute
    const buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:feats,target:js-tab-panel-feats']");
    if (buttonElement) {
        buttonElement.click();
        console.log("Feats display button clicked successfully!");
    } else {
        console.error("Button not found. Check your selector.");
    }
  
    // Loop through each feat in the feats info array
    info.forEach(feat => {
        // Add the feat name as a list item
        formattedInfo += `<li>${feat}</li>`;
    });
  
    // Close the unordered list tag
    formattedInfo += '</ul>';
  
    // Set the inner HTML of the element to display the formatted info
    featsDescriptionElement.innerHTML = formattedInfo;
    featsDescriptionElement.focus(); 
}

// Extract traits info from character data

function displayTraitsInfo(traitsDescriptionElement, characterData) {
    const info = characterData.selected_traits;
  // Initialize an empty string to hold the formatted info
    let formattedInfo = '<ul>';
    
    // Trigger a click event on a specific button with a data attribute
    const buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:traits,target:js-tab-panel-traits']");
    if (buttonElement) {
        buttonElement.click();
        console.log("traits display button clicked successfully!");
    } else {
        console.error("Button not found. Check your selector.");
    }

    // Loop through each feat in the traits info array
    info.forEach(feat => {
        // Add the feat name as a list item
        formattedInfo += `<li>${feat}</li>`;
    });

    // Close the unordered list tag
    formattedInfo += '</ul>';

    // Set the inner HTML of the element to display the formatted info
    traitsDescriptionElement.innerHTML = formattedInfo;
    traitsDescriptionElement.focus(); 
}


// Create a function to format and display archetype info
function displayArchetypeInfo( archetypeDescriptionElement, characterData ) {
    console.log("display archetypes has run")
    const info = characterData.archetype_info;
    // Initialize an empty string to hold the formatted info
    let formattedInfo = '';
    
    // Trigger a click event on a specific button with a data attribute
    const buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:archetypes,target:js-tab-panel-archetypes']");
    if (buttonElement) {
        buttonElement.click();
        console.log("Button clicked successfully!");
    } else {
        console.error("Button not found. Check your selector.");
    }

    // Loop through each key-value pair in the archetype info
    for (const [archetypeName, abilities] of Object.entries(info)) {
        // Add the archetype name as a heading
        formattedInfo += `<h3>${archetypeName}</h3>`;

        // Loop through each ability in the archetype
        for (const [abilityName, abilityDescription] of Object.entries(abilities)) {
            // Add the ability name as a heading
            formattedInfo += `<h4>${abilityName}</h4>`;
            // Add the ability description
            formattedInfo += `<p>${abilityDescription}</p>`;
        }

        // Add a line break after each archetype
        formattedInfo += '<br>';
    }

    // Set the inner HTML of the element to display the formatted info
    archetypeDescriptionElement.innerHTML = formattedInfo;
    archetypeDescriptionElement.focus(); 
}


function displaybodyslotsInfo(bodyslotsDescriptionElement, characterData, info) {
    console.log("display body slots has run")
    // Initialize an empty string to hold the formatted info
    let formattedInfo = '';

    // Loop through each key-value pair in the bodyslots info
    for (const [bodyslotsName, bodyslotsData] of Object.entries(info)) {
        // Add the bodyslots name as a heading
        formattedInfo += `<h3>${bodyslotsName}:</h3>`;

        // Add item_name and description for each bodyslot
        formattedInfo += `<h4>${bodyslotsData.item_name}</h4>`;
        formattedInfo += `<p>${bodyslotsData.description}</p>`;

        // Add a line break after each bodyslots
        formattedInfo += '<br>';
    }

    // Set the inner HTML of the element to display the formatted info
    bodyslotsDescriptionElement.innerHTML = formattedInfo;
    bodyslotsDescriptionElement.focus();
}


function display_abilties(abilitiesDescriptionElement, characterData, class_features) {
    console.log("display abiltiies has run")
    // Setting up abilities notes to get autofilled
    console.log("display abilties class features", class_features);
    const characterClass = characterData.class; // Assuming 'class' is a property in characterData
    
    let classFeaturesHTML = '';
    
    // List of classes where the first method will be used
    const method1Classes = ["barbarian", "investigator", "rogue", "skald", "slayer", "stalker", "vigilante"].map(cls => cls.toLowerCase());
    
    
    if (method1Classes.includes(characterClass)) {
        for (const feature in class_features) {
            if (class_features.hasOwnProperty(feature)) {
                const benefits = class_features[feature].benefits;
                const prerequisites = class_features[feature].prerequisites;
                
                classFeaturesHTML += `
                    <div class="ability">
                        <h3>Ability: ${feature}</h3>
                        <p><span class="label">Benefits:</span> ${benefits}</p>
                        <p><span class="label">Prerequisites:</span> ${prerequisites}</p>
                    </div>
                `;
            }
        }
    } else {
        for (const feature in class_features) {
            if (class_features.hasOwnProperty(feature)) {
                classFeaturesHTML += `
                    <div class="ability">
                        <h3>Ability: ${feature}</h3>
                `;
                
                for (const key in class_features[feature]) {
                    if (class_features[feature].hasOwnProperty(key)) {
                        const value = class_features[feature][key];
                        classFeaturesHTML += `
                            <p><span class="label">${key[0].toUpperCase() + key.slice(1)}:</span> ${value}</p>
                        `;
                    }
                }
                
                classFeaturesHTML += `</div>`;
            }
        }
    }
    
    abilitiesDescriptionElement.innerHTML = classFeaturesHTML;
    abilitiesDescriptionElement.focus();
    
    }

function display_character_description(characterDescriptionElement, characterData) {
    console.log("display_character_description has run");
    //   Setting up character description 
    const professions = characterData.professions
    const background_traits = characterData.background_traits
    const mannerisms = characterData.mannerisms
    const flaws = characterData.flaws
    const parents = characterData.parents
    const older_brothers = characterData.older_brothers
    const younger_brothers = characterData.younger_brothers
    const older_sisters = characterData.older_sisters
    const younger_sisters = characterData.younger_sisters
    characterDescriptionElement.innerHTML = `
    <pre>
        Professions: ${JSON.stringify(professions).replace(/["\[\]]/g, '')}
        Background Traits: ${JSON.stringify(background_traits).replace(/["\[\]]/g, '')}
        Mannerisms: ${JSON.stringify(mannerisms).replace(/["\[\]]/g, '')}
        Flaws: ${JSON.stringify(flaws).replace(/["\[\]]/g, '')}
        Parents: ${JSON.stringify(parents).replace(/["\[\]]/g, '')}
        Siblings: 
        ${JSON.stringify(older_brothers).replace(/["\[\]]/g, '')}
        ${JSON.stringify(younger_brothers).replace(/["\[\]]/g, '')}
        ${JSON.stringify(older_sisters).replace(/["\[\]]/g, '')}
        ${JSON.stringify(younger_sisters).replace(/["\[\]]/g, '')}
    </pre>
    `;
    characterDescriptionElement.focus();
    }
// Export the function
export { displayFeatsInfo, displayTraitsInfo, displayArchetypeInfo, displaybodyslotsInfo, display_abilties, display_character_description };
