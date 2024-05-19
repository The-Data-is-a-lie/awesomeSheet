// Function to simulate click on Clear All Feats button
function clickClearAllFeatButton() {
  setTimeout(function() {
    document.querySelector('button[onclick="clickAllFeats()"]').click();
  }, 100); // Adjust the delay time as needed
}

// Function to simulate click on Clear All Traits button
function clickClearAllTraitsButton() {
  setTimeout(function() {
    document.querySelector('button[onclick="clickAllTraits()"]').click();
  }, 100); // Adjust the delay time as needed
}

// Function to simulate click on Clear All Languages button
function clickClearAllLanguageButton() {
  setTimeout(function() {
    document.querySelector('button[onclick="clickAllLanguages()"]').click();
  }, 100); // Adjust the delay time as needed
}

function clickClearAllAbilitiesButton() {
  setTimeout(function() {
    document.querySelector('button[onclick="clickAllAbilities()"]').click();
  }, 100); // Adjust the delay time as needed
}

// Select the clearExistingDataButton element
const clearExistingDataButton = document.getElementById("clearExistingDataButton");

// Add an event listener to the clearExistingDataButton button
clearExistingDataButton.addEventListener('click', function() {
  // Call functions to click all four buttons
  clickClearAllFeatButton();
  clickClearAllTraitsButton();
  clickClearAllLanguageButton();
  clickClearAllAbilitiesButton();
});

// export { clickClearAllFeatButton, clickClearAllTraitsButton, clickClearAllLanguageButton, clickClearAllAbilitiesButton };