document.addEventListener('DOMContentLoaded', function () {

    
    
  // Dynamic import inside the DOMContentLoaded event listener
  const variableMappings = [
      { elementId: 'basics-character-name', dataKey: 'character_full_name' },
    //   { elementId: 'basics-character-description', dataKey: 'professions' },
  
  
  // physical appearance varialbes
      { elementId: 'basics-character-race', dataKey: 'chosen_race' },
      { elementId: 'basics-character-age', dataKey: 'age_number' },
      { elementId: 'basics-character-weight', dataKey: 'weight_number' },
      { elementId: 'basics-character-height', dataKey: 'height_number' },
  
  
    // Spiritual variables
    { elementId: 'basics-character-alignment', dataKey: 'alignment' },
    { elementId: 'basics-character-deity', dataKey:'deity_name' },
    { elementId: 'basics-character-hero-points', dataKey: 'hero_points' },
    { elementId: 'basics-character-gender', dataKey: 'gender' },

    
  
  
    // Stat variables
    { elementId: 'statistics-stats-str-base', dataKey:'str' },
    { elementId: 'statistics-stats-dex-base', dataKey:'dex' },
    { elementId: 'statistics-stats-con-base', dataKey:'con' },
    { elementId: 'statistics-stats-int-base', dataKey:'int' },
    { elementId: 'statistics-stats-wis-base', dataKey:'wis' },
    { elementId: 'statistics-stats-cha-base', dataKey:'cha' },
  
  // Equipment variables
  { elementId: 'equipment-body-slots-belts',                dataKey:['equipment_list', 0] },
  { elementId: 'equipment-body-slots-body',                 dataKey:['equipment_list', 1] },
  { elementId: 'equipment-body-slots-chest',                dataKey:['equipment_list', 2] },
  { elementId: 'equipment-body-slots-eyes',                 dataKey:['equipment_list', 3] },
  { elementId: 'equipment-body-slots-feet',                 dataKey:['equipment_list', 4] },
  { elementId: 'equipment-body-slots-hands',                dataKey:['equipment_list', 5] },
  { elementId: 'equipment-body-slots-head',                 dataKey:['equipment_list', 6] },
  { elementId: 'equipment-body-slots-headband',             dataKey:['equipment_list', 7] },
  { elementId: 'equipment-body-slots-neck',                 dataKey:['equipment_list', 8] },
  { elementId: 'equipment-body-slots-shoulders',            dataKey:['equipment_list', 9] },
  { elementId: 'equipment-body-slots-wrist',                dataKey:['equipment_list', 10] },
  { elementId: 'equipment-body-slots-ring-left-hand',       dataKey:['equipment_list', 11] },
  { elementId: 'equipment-body-slots-ring-right-hand',      dataKey:['equipment_list', 12] },
  
  
  // Class name section
  { elementId: 'basics-classes-all-0-name', dataKey:'c_class' },
  { elementId: 'basics-classes-all-0-level', dataKey:'level' },
  { elementId: 'basics-classes-all-0-hp-base', dataKey:'sheet_health' },
  { elementId: 'basics-classes-all-0-saves-fortitude', dataKey:'fort_saving_throw' },
  { elementId: 'basics-classes-all-0-saves-reflex', dataKey:'reflex_saving_throw' },
  { elementId: 'basics-classes-all-0-saves-will', dataKey:'wisdom_saving_throw' },
  { elementId: 'basics-classes-all-0-bab', dataKey:'bab_total' },
  
  
  // Defense section
  { elementId: 'defense-ac-stats-armor', dataKey:'armor_ac' },
  { elementId: 'defense-ac-stats-shield', dataKey:'shield_ac' },
  
  
  { elementId: 'equipment-armor-armor-name', dataKey:'armor_name' },
  { elementId: 'equipment-armor-armor-check-penalty', dataKey:'armor_armor_check_penalty' },
  { elementId: 'equipment-armor-armor-max-dex', dataKey:'armor_max_dex_bonus' },
  { elementId: 'equipment-armor-armor-arcane-spell-failure', dataKey:'armor_spell_failure' },
  { elementId: 'equipment-armor-armor-weight', dataKey:'armor_weight' },
  
  { elementId: 'equipment-armor-shield-name', dataKey:'shield_name' },
  { elementId: 'equipment-armor-shield-check-penalty', dataKey:'shield_armor_check_penalty' },
  { elementId: 'equipment-armor-shield-max-dex', dataKey:'shield_max_dex_bonus' },
  { elementId: 'equipment-armor-shield-arcane-spell-failure', dataKey:'shield_spell_failure' },
  { elementId: 'equipment-armor-shield-weight', dataKey:'shield_weight' },
  

  // Wealth
  { elementId: 'equipment-wealth-platinum', dataKey:'platnium' },
  // description / test variables
  

  // Bloodlines + Domains + Schools
  { elementId: 'spells-stats-school', dataKey:'school' },
  { elementId: 'spells-stats-opposition', dataKey:'opposing_school' },
  { elementId: 'spells-stats-domains', dataKey:'full_domain' },
  { elementId: 'spells-stats-bloodline', dataKey:'bloodline' },


  ];



let spellLists, featsList, day_list, known_list, traitsList, languageList, abilitiesList;
function updateCharacterDescription() {

    let updateMostRecentTabValue = localStorage.getItem("mostRecentTabValue");
    // Check if updateMostRecentTabValue is empty or null
    if (!updateMostRecentTabValue) {
      updateMostRecentTabValue = "js-tab-panel-character";
    }
    localStorage.setItem("updateMostRecentTabValue", updateMostRecentTabValue);


  fetch('http://localhost:5000/get_character_data', {
      method: 'GET',
      credentials: 'omit'
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(characterData => {
      console.log('Received character data:', characterData);
      localStorage.setItem('characterData', JSON.stringify(characterData));

      // Auto Replace Skills function
      if (characterData.spell_list_choose_from) {
          spellLists = characterData.spell_list_choose_from;
          day_list = characterData.day_list;
          known_list = characterData.known_list;
      } else {
          console.log("spellLists is not populated");
          // Handle the case where spellLists is not populated
      }

      updatespells_known_and_spells_per_day();

      featsList = characterData.feats;
      console.log('Feats List:', featsList);

      traitsList = characterData.selected_traits;
      console.log('traits List:', traitsList);

      languagesList = characterData.language_text;
      console.log('languages List:', languagesList);

      abilitiesList = characterData.class_ability;
      console.log('abilities List:', abilitiesList);




    // console.log("featsList",featsList);
    // console.log(spellLists)
    const skillRanksString = characterData.skill_ranks;
    const skillRanksObject = JSON.parse(skillRanksString);



  //   Need to add a fix for Perform + knowledge martial + Profession portions + remove skills that don't belong in the list


  
  for (const skillName in skillRanksObject) {
    if (skillRanksObject.hasOwnProperty(skillName)) {
      const skillRank = skillRanksObject[skillName];
      const elementId = `skills-default-${skillName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-ranks`;
      const element = document.getElementById(elementId);
  
      console.log('Skill Name:', skillName);
      console.log('Element ID:', elementId);
      console.log('Element:', element);
  
      if (element) {
        element.focus(); // Focus the element (optional)
  
        // Update the value/text content as before
        if (element.tagName.toLowerCase() === 'input') {
          element.value = skillRank;
        } else {
          element.textContent = skillRank;
        }
  
        // Check if the element is inside a form
        const parentForm = element.closest('form'); // Use `closest` to find the nearest form element
  
        if (parentForm) {
          parentForm.submit(); // Trigger submit if inside a form
        // Could replace double checks with skills.render() but doesn't update skill ranks spent
          skills.render();
        }
      }
    }
  }
    //   
  // Click the checkbox after processing other inputs
  const includeCustomCheckbox = document.getElementById('skills-ranks-include-custom');
  
  if (includeCustomCheckbox) {
    includeCustomCheckbox.click(); // Simulate clicking the checkbox
    includeCustomCheckbox.click(); // Simulate clicking the checkbox
}
  

  
  
  

    // End of Auto Replace Skills Function
    
    variableMappings.forEach((mapping, index) => {
        const element = document.getElementById(mapping.elementId);
        if (element) {
          let value;
          if (Array.isArray(mapping.dataKey)) {
            const [objectKey, nestedKey] = mapping.dataKey;
            value = characterData[objectKey] ? characterData[objectKey][nestedKey] : undefined;
          } else {
            const keys = mapping.dataKey.split('.'); // Split the dataKey by '.' to handle nested keys
            value = keys.reduce((acc, key) => acc ? acc[key] : undefined, characterData);
          }
      
          if (value !== undefined) {
            element.value = value;
            element.focus(); // Focus the element after setting the value
            // Call the render function to update UI
            stats.render(); 
            classes.render();
            // display.render();
            textBlock.render();
            textareaBlock.render();
            
            
          }
        }
      });
      

    //   Setting up character description 
    const characterDescriptionElement = document.getElementById('basics-character-description');
    professions = characterData.professions
    background_traits = characterData.background_traits
    mannerisms = characterData.mannerisms
    flaws = characterData.flaws
    parents = characterData.parents
    older_brothers = characterData.older_brothers
    younger_brothers = characterData.younger_brothers
    older_sisters = characterData.older_sisters
    younger_sisters = characterData.younger_sisters
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





//   Setting up archetype info
// Get the element where archetype information will be displayed
const archetypeDescriptionElement = document.getElementById('statistics-archetypes-notes');

// Extract archetype info from character data
const archetypeInfo = characterData.archetype_info;

// Create a function to format and display archetype info
function displayArchetypeInfo(info) {
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

// Call the function to display archetype info
displayArchetypeInfo(archetypeInfo);


// Clicking on most recent tab:
clickMostRecentTab();

const bodyslotsDescriptionElement = document.getElementById('equipment-body-slots-notes');

// Extract archetype info from character data
const bodyslotsInfo = characterData.equip_descrip;
console.log('bodyslotsInfo', bodyslotsInfo);

// Create a function to format and display bodyslots info
function displaybodyslotsInfo(info) {
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

// Call the function to display bodyslots info
displaybodyslotsInfo(bodyslotsInfo);



// Setting up abilities notes to get autofilled
const abilitiesDescriptionElement = document.getElementById('statistics-abilities-notes');
class_features = characterData['class features'];
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

    

})
.catch(error => {
    console.error('Error fetching or parsing character data:', error);
    // In case of an error, update characterDescriptionElement with the error message
    const characterDescriptionElement = document.getElementById('basics-character-description');
    if (characterDescriptionElement) {
        characterDescriptionElement.innerHTML = `<pre>Error: ${error.message}</pre>`;
    }
});
}




// Filling out Spell list + feats
// Somewhat buggy

// Event listener for the "Update Character" button
const updateDescriptionButton = document.getElementById('updateDescriptionButton');



// filling out spells per day + spells known
function updatespells_known_and_spells_per_day() {
  console.log("day_list electric boogaloo", day_list);
  console.log("known_list electric boogaloo", known_list);
  // Update spell list per day and spells known
  for (let i = 0; i < 10; i++) {
      const dayElement = document.getElementById(`spells-book-level-${i}-per_day`);
      const knownElement = document.getElementById(`spells-book-level-${i}-known`);

      if (day_list && known_list) {
          // Check if the index is within the bounds of the lists
          if (i < day_list.length) {
              // Set the value property for input elements
              dayElement.value = day_list[i];
              knownElement.value = known_list[i];
          } else {
              // Handle the case where the lists don't have enough elements
              dayElement.value = "N/A";
              knownElement.value = "N/A";
          }
      }        
  }
}

if (updateDescriptionButton) {
  // Define a function to handle both spells and feats
  async function handleSpellsAndFeats() {
      console.log('Button clicked');
      await updateCharacterDescription(); // Wait for character data to be fetched
      // Process spells
      if (spellLists) {
          for (let j = 0; j < spellLists.length; j++) {
              const spellList = spellLists[j];
              for (let i = 0; i < spellList.length; i++) {
                  const spellName = spellList[i];
                  console.log(`Spell Name: ${spellName}`);
                  await addSpellWithDelay(j, spellName); // Wait for each spell to be added with a delay
              }
          }
      } else {
          console.log('spellLists is not populated');
          // Handle the case where spellLists is not populated
      }

    // Click the feats button




    // Process feats
      for (let i = 0; i < featsList.length; i++) {

        
          const featName = featsList[i];
          console.log(`Feat Name: ${featName}`);
          await addFeatWithDelay(featName); // Wait for each feat to be added with a delay
      }

      // Process traits
      for (let i = 0; i < traitsList.length; i++) {
          const traitName = traitsList[i];
          console.log(`trait Name: ${traitName}`);
          await addtraitWithDelay(traitName); // Wait for each trait to be added with a delay
      }      
      
      // Process abilities
      for (let i = 0; i < abilitiesList.length; i++) {
        const abilitiesName = abilitiesList[i];
        console.log(`abilities Name: ${abilitiesName}`);
        await addabilitiesWithDelay(abilitiesName); // Wait for each abilities to be added with a delay
    }           

      // Process languages
      for (let i = 0; i < languagesList.length; i++) {
          const languageName = languagesList[i];
          console.log(`language Name: ${languageName}`);
          await addlanguageWithDelay(languageName); // Wait for each language to be added with a delay
      }      
      
  
      clickApplyButton();
  }

// Attach the event listener to the "Update Character" button
updateDescriptionButton.addEventListener('click', handleSpellsAndFeats);

function addSpellWithDelay(level, spellName) {
  return new Promise(resolve => {
      setTimeout(() => {
          const spellInput = document.getElementById(`add-new-spell-level-${level}`);
          if (spellInput && spellName) {
              spellInput.value = spellName;
              spellInput.dispatchEvent(new Event('input')); // Emulate typing in the search bar
              setTimeout(() => {
                  const suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                  suggestionItems.forEach(item => {
                      if (item.textContent.trim() === spellName) {
                          item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                          const addButton = document.querySelector('.js-add-new-spell');
                          addButton.click(); // Emulate clicking the add button
                          resolve(); // Resolve the promise once the spell is added
                      }
                  });
              }, 250); // Wait for the suggestion list to populate
          }
      }, 250); // Adjust delay as needed
  });
}


// Only selecting first feat, because the second option is always mythic
function addFeatWithDelay(featName) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const featInput = document.getElementById('statistics-feat-all');
        const addButton = document.querySelector('.js-pill-block-add');
  
        if (!featInput || !addButton || !featName) {
          reject(new Error('Missing required elements for adding feat'));
          return;
        }
  
        // Check if the feat already exists (modify selector for specific section if needed)
        const existingFeats = document.querySelectorAll('.js-pill-block');
        let featAlreadyExists = false;
        existingFeats.forEach(existingFeat => {
          if (existingFeat.textContent.trim() === featName) {
            featAlreadyExists = true;
          }
        });
  
        if (!featAlreadyExists) {
          featInput.value = featName;
          featInput.dispatchEvent(new Event('input'));
  
          setTimeout(() => {
            const suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
  
            if (!suggestionItems.length) {
              console.warn('Suggestion list not found for adding feat:', featName);
              resolve(); // Resolve even if list not found (optional)
              return;
            }
  
            let added = false;
            suggestionItems.forEach(item => {
              if (item.textContent.trim() === featName && !added) {
                console.log(`Adding feat at ${new Date().toLocaleTimeString()}:`, featName);
                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                addButton.click(); // Click on the add button to add the feat
                added = true;
                resolve(); // Resolve the promise after adding the feat
              }
            });
          }, 250); // Adjust delay for suggestion list population
        } else {
          console.log('Feat already exists:', featName);
          resolve(); // Resolve even if feat already exists
        }
      }, 250); // Initial delay (adjustable)
    });
  }




function addtraitWithDelay(traitName) {
  return new Promise(resolve => {
      setTimeout(() => {
          const traitInput = document.getElementById('statistics-traits-all');
          const addButton = document.querySelector('.js-pill-block-add');
          if (traitInput && addButton && traitName) {
              // Check if the trait is already present
              const existingtraits = document.querySelectorAll('.js-pill-block');
              let traitAlreadyExists = false;
              existingtraits.forEach(existingtrait => {
                  if (existingtrait.textContent.trim() === traitName) {
                      traitAlreadyExists = true;
                  }
              });

              if (!traitAlreadyExists) {
                  // If the trait is not already present, add it
                  traitInput.value = traitName;
                  traitInput.dispatchEvent(new Event('input')); // Emulate typing in the trait input field
                  console.log('Waiting for suggestion list to populate...');
                  setTimeout(() => {
                      const suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                      console.log('Suggestion list populated');
                      let added = false; // Flag to track if the trait has been added
                      suggestionItems.forEach(item => {
                          if (item.textContent.trim() === traitName && !added) {
                              console.log('Adding trait:', traitName);
                              item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                              addButton.click(); // Click on the add button to add the trait
                              added = true; // Set the flag to true to indicate the trait has been added
                              resolve(); // Resolve the promise once the trait is added
                          }
                      });
                  }, 250); // Wait for the suggestion list to populate
              } else {
                  // If the trait is already present, resolve the promise immediately
                  console.log('trait already exists:', traitName);
                  resolve();
              }
          }
      }, 250); // Adjust delay as needed
  });
}


function addlanguageWithDelay(languageName) {
  return new Promise(resolve => {
      setTimeout(() => {
          const languageInput = document.getElementById('statistics-languages-all');
          const addButton = document.querySelector('.js-pill-block-add');
          if (languageInput && addButton && languageName) {
              // Check if the language is already present
              const existinglanguages = document.querySelectorAll('.js-pill-block');
              let languageAlreadyExists = false;
              existinglanguages.forEach(existinglanguage => {
                  if (existinglanguage.textContent.trim() === languageName) {
                      languageAlreadyExists = true;
                  }
              });

              if (!languageAlreadyExists) {
                  // If the language is not already present, add it
                  languageInput.value = languageName;
                  languageInput.dispatchEvent(new Event('input')); // Emulate typing in the language input field
                  console.log('Waiting for suggestion list to populate...');
                  setTimeout(() => {
                      const suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                      console.log('Suggestion list populated');
                      let added = false; // Flag to track if the language has been added
                      suggestionItems.forEach(item => {
                          if (item.textContent.trim() === languageName && !added) {
                              console.log('Adding language:', languageName);
                              item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                              addButton.click(); // Click on the add button to add the language
                              added = true; // Set the flag to true to indicate the language has been added
                              resolve(); // Resolve the promise once the language is added
                          }
                      });
                  }, 250); // Wait for the suggestion list to populate
              } else {
                  // If the language is already present, resolve the promise immediately
                  console.log('language already exists:', languageName);
                  resolve();
              }
          }
      }, 250); // Adjust delay as needed
  });
}


function addabilitiesWithDelay(abilitiesName) {
    return new Promise(resolve => {
        setTimeout(() => {
            const abilitiesInput = document.getElementById('statistics-abilities-all');
            const addButton = document.querySelector('.js-pill-block-add');
            if (abilitiesInput && addButton && abilitiesName) {
                // Check if the abilities is already present
                const existingabilities = document.querySelectorAll('.js-pill-block');
                let abilitiesAlreadyExists = false;
                existingabilities.forEach(existingabilities => {
                    if (existingabilities.textContent.trim() === abilitiesName) {
                        abilitiesAlreadyExists = true;
                    }
                });
  
                if (!abilitiesAlreadyExists) {
                    // If the abilities is not already present, add it
                    abilitiesInput.value = abilitiesName;
                    abilitiesInput.dispatchEvent(new Event('input')); // Emulate typing in the abilities input field
                    console.log('Waiting for suggestion list to populate...');
                    setTimeout(() => {
                        const suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                        console.log('Suggestion list populated');
                        let added = false; // Flag to track if the abilities has been added
                        suggestionItems.forEach(item => {
                            if (item.textContent.trim() === abilitiesName && !added) {
                                console.log('Adding abilities:', abilitiesName);
                                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                                addButton.click(); // Click on the add button to add the abilities
                                added = true; // Set the flag to true to indicate the abilities has been added
                                resolve(); // Resolve the promise once the abilities is added
                            }
                        });
                    }, 250); // Wait for the suggestion list to populate
                } else {
                    // If the abilities is already present, resolve the promise immediately
                    console.log('abilities already exists:', abilitiesName);
                    resolve();
                }
            }
        }, 250); // Adjust delay as needed
    });
  }


  

// Adds platnium to the wealth calculator + clicks button after feats and spells are added  
function clickApplyButton() {
  const applyButton = document.querySelector('a[data-input-block-aggregate-options="target:equipment-wealth-platinum,action:aggregate"]');
  if (applyButton) {
      setTimeout(() => {
          applyButton.click();
          console.log('Apply button clicked.');
      }, 250); // Adjust the delay time as needed
  } else {
      console.error('Apply button not found.');
  }
}


// Somewhat works, auto clicks + Class and X Remve button for Character Classes section
// // Find the first button element and click it// Find the first button element and click it
// var addButton = document.querySelector('.button.button-medium.button-secondary.button-icon.js-clone-add-class');
// addButton.click();

// // Wait for a brief moment for the action to complete (optional)
// setTimeout(function() {
//     // Find the second button element and click it
//     var removeButton = document.querySelector('.button.button-medium.button-secondary.button-icon.js-clone-remove');
//     removeButton.click();

//     // Wait for a brief moment for the action to complete (optional)
//     setTimeout(function() {
//         // Find the second delete button element and click it
//         var deleteButtons = document.querySelectorAll('.u-inline-with-input.u-no-margin.button.button-icon.button-large.button-primary.js-clone-block-delete');
//         // Click the second delete button (index 1)
//         deleteButtons[1].click();

//         // Click the additional button after the whole process completes
//     removeButton.click();
//     }, 500); // Adjust the time delay if needed
// }, 500); // Adjust the time delay if needed


    // characterSelect.render(); //currently messes with the UI for character Select
    




clickApplyButton();


function clickMostRecentTab() {
    const updateMostRecentTabValue = localStorage.getItem("updateMostRecentTabValue");
    console.log("Most recent tab value update button:", updateMostRecentTabValue);
    if (updateMostRecentTabValue) {
      const characterKeywords = /character|experience|classes|senses|initiative|speed|image|character_generator/i;
      const statsKeywords = /stats|abilities|archetypes|feats|traits|languages|power/i;
      const possessionsKeywords = /possessions|armor|body_slots|descriptions|item|encumbrance|consumable|wealth/i;
      const hpKeywords = /hp|ac|cmd|saves|dr|sr|resistance/i;
      const offenseKeywords = /cmb|attack/i;
      const spellKeywords = /level_0|level_1|level_2|level_3|level_4|level_5|level_6|level_7|level_8|level_9|spell-stats/i;
  
      if (characterKeywords.test(updateMostRecentTabValue)) {
        const characterButton = document.querySelector("button[data-tab-options='tabGroup:basics,tab:character,target:js-tab-panel-character']");
        if (characterButton) {
            characterButton.click();
            setTimeout(() => {
                characterButton.focus();
                console.log("Character tab clicked successfully!");
              }, 300); // Delay of 100 milliseconds (adjust as needed)
            console.log("Character tab clicked successfully!");
        } else {
          console.error("Character tab button not found.");
        }
      } else if (statsKeywords.test(updateMostRecentTabValue)) {
        const statsButton = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:stats,target:js-tab-panel-stats']");
        if (statsButton) {
            statsButton.click();
            setTimeout(() => {
                statsButton.focus();
                console.log("Character tab clicked successfully!");
              }, 300); // Delay of 100 milliseconds (adjust as needed)
            console.log("Stats tab clicked successfully!");
        } else {
          console.error("Stats tab button not found.");
        }
      } else if (possessionsKeywords.test(updateMostRecentTabValue)) {
        const possessionsButton = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:possessions,target:js-tab-panel-possessions']");
        if (possessionsButton) {
            possessionsButton.click();
            setTimeout(() => {
                possessionsButton.focus();
                console.log("Character tab clicked successfully!");
              }, 300); // Delay of 100 milliseconds (adjust as needed)
            console.log("Possessions tab clicked successfully!");
        } else {
          console.error("Possessions tab button not found.");
        }
      } else if (hpKeywords.test(updateMostRecentTabValue)) {
        const hpButton = document.querySelector("button[data-tab-options='tabGroup:defense,tab:hp,target:js-tab-panel-hit-points']");
        if (hpButton) {
            hpButton.click();
            setTimeout(() => {
                hpButton.focus();
                console.log("Character tab clicked successfully!");
              }, 300); // Delay of 100 milliseconds (adjust as needed)
            console.log("HP tab clicked successfully!");
        } else {
          console.error("HP tab button not found.");
        }
    } else if (offenseKeywords.test(updateMostRecentTabValue)) {
        const cmbButton = document.querySelector("button[data-tab-options='tabGroup:offense,tab:cmb,target:js-tab-panel-combat-maneuver-bonus']");
        if (cmbButton) {
          cmbButton.click();
          setTimeout(() => {
            cmbButton.focus();
            console.log("CMB tab clicked successfully!");
          }, 300); // Delay of 300 milliseconds (adjust as needed)
        } else {
            console.error("CMB tab button not found.");
        }
        } else if (spellKeywords.test(updateMostRecentTabValue)) {
            const spellButton = document.querySelector("button[data-tab-options='tabGroup:spells,tab:level_0,target:js-tab-panel-spell-level-0']");
            if (spellButton) {
            spellButton.click();
            setTimeout(() => {
                spellButton.focus();
                console.log("Character tab clicked successfully!");
              }, 300); // Delay of 100 milliseconds (adjust as needed)
            console.log("Spells tab clicked successfully!");
      }
      } else {
        console.log("updateMostRecentTabValue doesn't match any keywords.");
      }
    } else {
      console.error("updateMostRecentTabValue not found in localStorage");
    }
  }
  
  
  
  
  
  
  



}});