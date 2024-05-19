document.addEventListener('DOMContentLoaded', function () {

    let spellLists, featsList, day_list, known_list, traitsList, languageList, abilitiesList;
    
    function updateCharacterDescription() {
        return new Promise((resolve, reject) => {
            if (localStorage.getItem('MostRecentTabValue')) {
                // If it exists, use the value from localStorage
                var MostRecentTabValue = localStorage.getItem('MostRecentTabValue');
            } else {
                // If it doesn't exist, set the default value to 'js-tab-panel-character'
                var MostRecentTabValue = 'js-tab-panel-character';
                // Optionally, save this default value to localStorage for future use
                localStorage.setItem('MostRecentTabValue', MostRecentTabValue);
            }
            
            // Now you can use MostRecentTabValue in your code
            if (localStorage.getItem('updateMostRecentTabValue')) {
                // If it exists, use the value from localStorage
                var updateMostRecentTabValue = localStorage.getItem('updateMostRecentTabValue');
                console.log('updateMostRecentTabValue: if statement', updateMostRecentTabValue);
            } else {
                // If it doesn't exist, set the default value to 'js-tab-panel-character'
                var updateMostRecentTabValue = 'js-tab-panel-character';
                // Optionally, save this default value to localStorage for future use
                localStorage.setItem('updateMostRecentTabValue', updateMostRecentTabValue);
            }
    
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
    
                (async () => {
                    try {
                        // const featsInfoModule = await import('./display_functions.js');
                        // const displayFeatsInfo = featsInfoModule.displayFeatsInfo;
                        // const displayTraitsInfo = featsInfoModule.displayTraitsInfo;
                        // const displayArchetypeInfo = featsInfoModule.displayArchetypeInfo;
                        // const displaybodyslotsInfo = featsInfoModule.displaybodyslotsInfo;
                        // const display_abilties = featsInfoModule.display_abilties;
                        // const display_character_description = featsInfoModule.display_character_description;

                        window.displayFeatsInfo = displayFeatsInfo;
                        window.displayTraitsInfo = displayTraitsInfo;
                        window.displayArchetypeInfo = displayArchetypeInfo;
                        window.displaybodyslotsInfo = displaybodyslotsInfo;
                        window.display_abilties = display_abilties;
                        window.display_character_description = display_character_description;                        
    
                        var featsDescriptionElement = document.getElementById('statistics-feats-notes');
                        var traitsDescriptionElement = document.getElementById('statistics-traits-notes');
                        var archetypeDescriptionElement = document.getElementById('statistics-archetypes-notes');
                        var bodyslotsDescriptionElement = document.getElementById('equipment-body-slots-notes');
                        var info = characterData.equip_descrip;
                        
                        var abilitiesDescriptionElement = document.getElementById('statistics-abilities-notes');
                        class_features = characterData['class features'];
    
                        var characterDescriptionElement = document.getElementById('basics-character-description');
    
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
    
                (async () => {
                    try {
                        // Ensure variableMappings_data is correctly assigned to the window object
                        window.variableMappings_data = variableMappings_data;
                
                        // Log the data to confirm it's correctly assigned
                        console.log("window.variableMappings_data", window.variableMappings_data);
                
                        // Iterate through window.variableMappings_data instead of window.variableMappings
                        window.variableMappings_data.forEach((mapping, index) => {
                            const element = document.getElementById(mapping.elementId);
                            if (element) {
                                let value;
                                if (Array.isArray(mapping.dataKey)) {
                                    const [objectKey, nestedKey] = mapping.dataKey;
                                    value = characterData[objectKey] ? characterData[objectKey][nestedKey] : undefined;
                                    console.log("value array", value);
                                } else {
                                    const keys = mapping.dataKey.split('.');
                                    value = keys.reduce((acc, key) => acc ? acc[key] : undefined, characterData);
                                    console.log("value non array", value);
                                }
                
                                if (value !== undefined) {
                                    console.log("value assigned to element", value);
                                    element.value = value;
                                    element.focus();
                                    stats.render();
                                    classes.render();
                                    textBlock.render();
                                    textareaBlock.render();
                                }
                            } else {
                                console.warn(`Element with ID ${mapping.elementId} not found`);
                            }
                        });
                
                    } catch (error) {
                        console.error('Error during dynamic import or execution:', error);
                    }
                })();
                
    
                (async () => {
                  try {
                    //   const tabValueModule = await import('./mostRecentTabValue.js');
                      window.clickMostRecentTab = clickMostRecentTab;
                      clickMostRecentTab(characterData, updateMostRecentTabValue);
  
                  } catch (error) {
                      console.error('Error during dynamic import:', error);
                  }
              })();
    
                (async () => {
                    try {
                        var skillRanksString = characterData.skill_ranks;
                        var skillRanksObject = JSON.parse(skillRanksString);
                        console.log("skillRanksObject", skillRanksObject);
                        // var skillRanksModule = await import('./skill_ranks.js');
                        var includeCustomCheckbox = document.getElementById('skills-ranks-include-custom');
                        console.log("includeCustomCheckbox", includeCustomCheckbox);
                        window.skill_ranks_func = skill_ranks_func
    
                        window.skill_ranks_func(skillRanksObject, includeCustomCheckbox);
                        // skills.render();
    
                    } catch (error) {
                        console.error('Error during dynamic import:', error);
                    }
                })();
    
                resolve(characterData);
    
            })
            .catch(error => {
                console.error('Error fetching or parsing character data:', error);
                var characterDescriptionElement = document.getElementById('basics-character-description');
                if (characterDescriptionElement) {
                    characterDescriptionElement.innerHTML = `<pre>Error: ${error.message}</pre>`;
                }
                reject(error);
            });
        });
    }
    
    var updateDescriptionButton = document.getElementById('updateDescriptionButton');
    
    function updatespells_known_and_spells_per_day() {
      // Early return if either list is empty
      if (!day_list || !known_list) {
        console.log("Not a caster");
        return;
      }
    
      console.log("day_list electric boogaloo", day_list);
      console.log("known_list electric boogaloo", known_list);
    
      for (let i = 0; i < Math.min(day_list.length, known_list.length); i++) {
        const dayElement = document.getElementById(`spells-book-level-${i}-per_day`);
        const knownElement = document.getElementById(`spells-book-level-${i}-known`);
    
        if (i < day_list.length) {
          dayElement.value = day_list[i];
          knownElement.value = known_list[i];
        } else {
          dayElement.value = "N/A";
          knownElement.value = "N/A";
        }
      }
    }
      
    async function clickClearAllButtons() {
        // // No need to import when functions are globally available
        // const clickClearAllFeatButton = window.clickClearAllFeatButton;
        // const clickClearAllTraitsButton = window.clickClearAllTraitsButton;
        // const clickClearAllLanguageButton = window.clickClearAllLanguageButton;
        // const clickClearAllAbilitiesButton = window.clickClearAllAbilitiesButton;
      
        // // Call the functions directly
        // await clickClearAllFeatButton();
        // await clickClearAllTraitsButton();
        // await clickClearAllLanguageButton();
        // await clickClearAllAbilitiesButton();

            // window.clickClearAllFeatButton = clickClearAllFeatButton;
            // window.clickClearAllTraitsButton = clickClearAllTraitsButton;
            // window.clickClearAllLanguageButton = clickClearAllLanguageButton;
            // window.clickClearAllAbilitiesButton = clickClearAllAbilitiesButton;


            await window.clickClearAllFeatButton();
            await window.clickClearAllTraitsButton();
            await window.clickClearAllLanguageButton();
            await window.clickClearAllAbilitiesButton();        
      }
      
  
  

      async function handleSpellsAndFeats() {
        // Instantiate the Clear modules
        window.addSpellWithDelay = addSpellWithDelay;
        window.addFeatWithDelay = addFeatWithDelay;
        window.addTraitWithDelay = addTraitWithDelay;
        window.addAbilitiesWithDelay = addAbilitiesWithDelay;
        window.addLanguageWithDelay = addLanguageWithDelay;
    
        console.log('Button clicked');
        await updateCharacterDescription();
  


  
          if (spellLists) {
              for (let j = 0; j < spellLists.length; j++) {
                  const spellList = spellLists[j];
                  for (let i = 0; i < spellList.length; i++) {
                      const spellName = spellList[i];
                      console.log(`Spell Name: ${spellName}`);
                      await addSpellWithDelay(j, spellName);
                  }
              }
          } else {
              console.log('spellLists is not populated');
          }
  
          for (let i = 0; i < featsList.length; i++) {
              const featName = featsList[i];
              console.log(`Feat Name: ${featName}`);
              await window.addFeatWithDelay(featName);
          }
  
          for (let i = 0; i < traitsList.length; i++) {
              const traitName = traitsList[i];
              console.log(`Trait Name: ${traitName}`);
              await window.addTraitWithDelay(traitName);
          }
  
          for (let i = 0; i < abilitiesList.length; i++) {
              const abilitiesName = abilitiesList[i];
              console.log(`Abilities Name: ${abilitiesName}`);
              await window.addAbilitiesWithDelay(abilitiesName);
          }
  
          for (let i = 0; i < languagesList.length; i++) {
              const languageName = languagesList[i];
              console.log(`Language Name: ${languageName}`);
              await window.addLanguageWithDelay(languageName);
          }
  
  }
  
          
  if (updateDescriptionButton) {
      updateDescriptionButton.addEventListener('click', async function() {
          await clickClearAllButtons();
          await handleSpellsAndFeats();
          await clickApplyButton();
      });
  }
  
  
  
  
    
        function clickApplyButton() {
            const applyButton = document.querySelector('a[data-input-block-aggregate-options="target:equipment-wealth-platinum,action:aggregate"]');
            if (applyButton) {
                setTimeout(() => {
                    applyButton.click();
                    console.log('Apply button clicked.');
                }, 100);
            } else {
                console.error('Apply button not found.');
            }
        }
    
  
  
      }
    );
    