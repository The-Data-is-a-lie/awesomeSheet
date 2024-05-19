"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAbilitiesWithDelay = addAbilitiesWithDelay;
exports.addFeatWithDelay = addFeatWithDelay;
exports.addLanguageWithDelay = addLanguageWithDelay;
exports.addSpellWithDelay = addSpellWithDelay;
exports.addTraitWithDelay = addTraitWithDelay;
function addSpellWithDelay(level, spellName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var spellInput = document.getElementById("add-new-spell-level-".concat(level));
      if (spellInput && spellName) {
        spellInput.value = spellName;
        spellInput.dispatchEvent(new Event('input')); // Emulate typing in the search bar
        setTimeout(function () {
          var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
          suggestionItems.forEach(function (item) {
            if (item.textContent.trim() === spellName) {
              item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
              var addButton = document.querySelector('.js-add-new-spell');
              addButton.click(); // Emulate clicking the add button
              resolve(); // Resolve the promise once the spell is added
            }
          });
        }, 100); // Wait for the suggestion list to populate
      }
    }, 100); // Adjust delay as needed
  });
}

function addFeatWithDelay(featName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var featInput = document.getElementById('statistics-feat-all');
      var addButton = document.querySelector('.js-pill-block-add');
      if (!featInput || !addButton) {
        reject(new Error('Missing required elements for adding feat'));
        return;
      }

      // Check if the feat already exists (modify selector for specific section if needed)
      var existingFeats = document.querySelectorAll('.js-pill-block');
      var featAlreadyExists = false;
      existingFeats.forEach(function (existingFeat) {
        if (existingFeat.textContent.trim() === featName) {
          featAlreadyExists = true;
        }
      });
      if (!featAlreadyExists) {
        featInput.value = '';
        featInput.dispatchEvent(new Event('input'));
        setTimeout(function () {
          featInput.value = featName;
          featInput.dispatchEvent(new Event('input'));
          setTimeout(function () {
            var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
            if (!suggestionItems.length) {
              console.warn('Suggestion list not found for adding feat:', featName);
              resolve(); // Resolve even if list not found (optional)
              return;
            }
            var added = false;
            suggestionItems.forEach(function (item) {
              if (item.textContent.trim() === featName && !added) {
                console.log("Adding feat at ".concat(new Date().toLocaleTimeString(), ":"), featName);
                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                addButton.click(); // Click on the add button to add the feat
                added = true;
                resolve(); // Resolve the promise after adding the feat
              }
            });

            if (!added) {
              console.warn('Feat not found in suggestions:', featName);
              resolve(); // Resolve even if feat not found in suggestions
            }
          }, 100); // Adjust delay for suggestion list population
        }, 100); // Clear input delay
      } else {
        console.log('Feat already exists:', featName);
        resolve(); // Resolve even if feat already exists
      }
    }, 100); // Initial delay (adjustable)
  });
}

function addTraitWithDelay(traitName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var traitInput = document.getElementById('statistics-traits-all');
      var addButton = document.querySelector('.js-pill-block-add');
      if (traitInput && addButton && traitName) {
        // Check if the trait is already present
        var existingtraits = document.querySelectorAll('.js-pill-block');
        var traitAlreadyExists = false;
        existingtraits.forEach(function (existingtrait) {
          if (existingtrait.textContent.trim() === traitName) {
            traitAlreadyExists = true;
          }
        });
        if (!traitAlreadyExists) {
          // If the trait is not already present, add it
          traitInput.value = traitName;
          traitInput.dispatchEvent(new Event('input')); // Emulate typing in the trait input field
          console.log('Waiting for suggestion list to populate...');
          setTimeout(function () {
            var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
            console.log('Suggestion list populated');
            var added = false; // Flag to track if the trait has been added
            suggestionItems.forEach(function (item) {
              if (item.textContent.trim() === traitName && !added) {
                console.log('Adding trait:', traitName);
                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                addButton.click(); // Click on the add button to add the trait
                added = true; // Set the flag to true to indicate the trait has been added
                resolve(); // Resolve the promise once the trait is added
              }
            });
          }, 100); // Wait for the suggestion list to populate
        } else {
          // If the trait is already present, resolve the promise immediately
          console.log('trait already exists:', traitName);
          resolve();
        }
      }
    }, 100); // Adjust delay as needed
  });
}

function addLanguageWithDelay(languageName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var languageInput = document.getElementById('statistics-languages-all');
      var addButton = document.querySelector('.js-pill-block-add');
      if (languageInput && addButton && languageName) {
        // Check if the language is already present
        var existinglanguages = document.querySelectorAll('.js-pill-block');
        var languageAlreadyExists = false;
        existinglanguages.forEach(function (existinglanguage) {
          if (existinglanguage.textContent.trim() === languageName) {
            languageAlreadyExists = true;
          }
        });
        if (!languageAlreadyExists) {
          // If the language is not already present, add it
          languageInput.value = languageName;
          languageInput.dispatchEvent(new Event('input')); // Emulate typing in the language input field
          console.log('Waiting for suggestion list to populate...');
          setTimeout(function () {
            var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
            console.log('Suggestion list populated');
            var added = false; // Flag to track if the language has been added
            suggestionItems.forEach(function (item) {
              if (item.textContent.trim() === languageName && !added) {
                console.log('Adding language:', languageName);
                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                addButton.click(); // Click on the add button to add the language
                added = true; // Set the flag to true to indicate the language has been added
                resolve(); // Resolve the promise once the language is added
              }
            });
          }, 100); // Wait for the suggestion list to populate
        } else {
          // If the language is already present, resolve the promise immediately
          console.log('language already exists:', languageName);
          resolve();
        }
      }
    }, 100); // Adjust delay as needed
  });
}

function addAbilitiesWithDelay(abilitiesName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var abilitiesInput = document.getElementById('statistics-abilities-all');
      var addButton = document.querySelector('.js-pill-block-add');
      if (abilitiesInput && addButton && abilitiesName) {
        // Check if the abilities is already present
        var existingabilities = document.querySelectorAll('.js-pill-block');
        var abilitiesAlreadyExists = false;
        existingabilities.forEach(function (existingabilities) {
          if (existingabilities.textContent.trim() === abilitiesName) {
            abilitiesAlreadyExists = true;
          }
        });
        if (!abilitiesAlreadyExists) {
          // If the abilities is not already present, add it
          abilitiesInput.value = abilitiesName;
          abilitiesInput.dispatchEvent(new Event('input')); // Emulate typing in the abilities input field
          console.log('Waiting for suggestion list to populate...');
          setTimeout(function () {
            var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
            console.log('Suggestion list populated');
            var added = false; // Flag to track if the abilities has been added
            suggestionItems.forEach(function (item) {
              if (item.textContent.trim() === abilitiesName && !added) {
                console.log('Adding abilities:', abilitiesName);
                item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                addButton.click(); // Click on the add button to add the abilities
                added = true; // Set the flag to true to indicate the abilities has been added
                resolve(); // Resolve the promise once the abilities is added
              }
            });
          }, 100); // Wait for the suggestion list to populate
        } else {
          // If the abilities is already present, resolve the promise immediately
          console.log('abilities already exists:', abilitiesName);
          resolve();
        }
      }
    }, 100); // Adjust delay as needed
  });
}

// Export the functions