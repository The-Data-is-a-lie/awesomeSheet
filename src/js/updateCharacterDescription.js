document.addEventListener('DOMContentLoaded', function () {

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

      

// Display function chunk
(async () => {
  try {
    // importing div ID functions from DIV ID functions
      const featsInfoModule = await import('./display_functions.js');
      const displayFeatsInfo = featsInfoModule.displayFeatsInfo;
      const displayTraitsInfo = featsInfoModule.displayTraitsInfo;
      const displayArchetypeInfo = featsInfoModule.displayArchetypeInfo;
      const displaybodyslotsInfo = featsInfoModule.displaybodyslotsInfo;
      const display_abilties = featsInfoModule.display_abilties;
      const display_character_description = featsInfoModule.display_character_description;

      // instantiating the div IDs
      const featsDescriptionElement = document.getElementById('statistics-feats-notes');
      const traitsDescriptionElement = document.getElementById('statistics-traits-notes');
      const archetypeDescriptionElement = document.getElementById('statistics-archetypes-notes');
      const bodyslotsDescriptionElement = document.getElementById('equipment-body-slots-notes');
      const info = characterData.equip_descrip;
      
      const abilitiesDescriptionElement = document.getElementById('statistics-abilities-notes');
      class_features = characterData['class features'];

      const characterDescriptionElement = document.getElementById('basics-character-description');

      // calling the functions
      displayFeatsInfo(featsDescriptionElement, characterData);
      displayTraitsInfo(traitsDescriptionElement, characterData);
      displayArchetypeInfo(archetypeDescriptionElement, characterData);
      displaybodyslotsInfo(bodyslotsDescriptionElement, characterData, info);
      display_abilties(abilitiesDescriptionElement, characterData, class_features);
      display_character_description(characterDescriptionElement, characterData);

    } catch (error) {
      console.error('Error during dynamic import:', error);
  }
})();


    // Variable Mappings + Variable Mappings function
    (async () => {
      try {
        // importing div ID functions from DIV ID functions
          const featsInfoModule = await import('./variableMappings.js');
          const variableMappings = featsInfoModule.variableMappings_data;
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
    
        } catch (error) {
          console.error('Error during dynamic import:', error);
      }
    })();

// Setting the viewed tab to the most recent tab
(async () => {
  try {
    // importing div ID functions from DIV ID functions
      const tabValueModule = await import('./mostRecentTabValue.js');
      const clickMostRecentTab = tabValueModule.clickMostRecentTab;

      clickMostRecentTab(characterData, updateMostRecentTabValue);

    } catch (error) {
      console.error('Error during dynamic import:', error);
  }
})();


// // Skill Ranks Function
    (async () => {
      try {

          const skillRanksString = characterData.skill_ranks;
          const skillRanksObject = JSON.parse(skillRanksString);        
          const skillRanksModule = await import('./skill_ranks.js');
          const skill_ranks_func = skillRanksModule.skill_ranks_func;
          const includeCustomCheckbox = document.getElementById('skills-ranks-include-custom');

          skill_ranks_func(skillRanksObject, includeCustomCheckbox);
          skills.render();

        } catch (error) {
          console.error('Error during dynamic import:', error);
      }
    })();


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

      const addWithDelayModule = await import('./addWithDelay.js');
      const addSpellWithDelay = addWithDelayModule.addSpellWithDelay;
      const addFeatWithDelay = addWithDelayModule.addFeatWithDelay;
      const addTraitWithDelay = addWithDelayModule.addTraitWithDelay;
      const addLanguageWithDelay = addWithDelayModule.addLanguageWithDelay;
      const addAbilitiesWithDelay = addWithDelayModule.addAbilitiesWithDelay;

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

      // Process feats
      for (let i = 0; i < featsList.length; i++) {
          const featName = featsList[i];
          console.log(`Feat Name: ${featName}`);
          await addFeatWithDelay(featName); // Wait for each feat to be added with a delay
      }

      // Process traits
      for (let i = 0; i < traitsList.length; i++) {
          const traitName = traitsList[i];
          console.log(`Trait Name: ${traitName}`);
          await addTraitWithDelay(traitName); // Wait for each trait to be added with a delay
      }

      // Process abilities
      for (let i = 0; i < abilitiesList.length; i++) {
          const abilitiesName = abilitiesList[i];
          console.log(`Abilities Name: ${abilitiesName}`);
          await addAbilitiesWithDelay(abilitiesName); // Wait for each abilities to be added with a delay
      }

      // Process languages
      for (let i = 0; i < languagesList.length; i++) {
          const languageName = languagesList[i];
          console.log(`Language Name: ${languageName}`);
          await addLanguageWithDelay(languageName); // Wait for each language to be added with a delay
      }
  }

  // Call the function when the button is clicked
  updateDescriptionButton.addEventListener('click', handleSpellsAndFeats);


// Adds platnium to the wealth calculator + clicks button after feats and spells are added  
function clickApplyButton() {
  const applyButton = document.querySelector('a[data-input-block-aggregate-options="target:equipment-wealth-platinum,action:aggregate"]');
  if (applyButton) {
      setTimeout(() => {
          applyButton.click();
          console.log('Apply button clicked.');
      }, 100); // Adjust the delay time as needed
  } else {
      console.error('Apply button not found.');
  }
}






clickApplyButton();







  
  
  
  
  
  



}});