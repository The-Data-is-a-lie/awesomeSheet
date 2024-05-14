// Select the prepForExportButton element
const prepForExportButton = document.getElementById("prepForExportButton");

// Add an event listener to the prepForExportButton button
prepForExportButton.addEventListener('click', function() {
    // Selecting the feats section
    const buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:feats,target:js-tab-panel-feats']");
    if (buttonElement) {
        buttonElement.click();
        console.log("Button clicked successfully!");
    } else {
        console.error("Button not found. Check your selector.");
    }
    clickRemoveButton();
    clickRunButtonMultipleTimes(3,0,3);
    clickRemoveButton();

    function clickRemoveButton() {
        const removeButton = document.querySelector('button[data-pill-control-options="action:changeState,state:remove,type:feats"]');
        if (removeButton) {
            removeButton.click();
            console.log('Remove button clicked.');
        } else {
            console.error('Remove button not found.');
        }
    }

    function clickRunButtonMultipleTimes(times, startIndex, endIndex) {
        // Loop through desired indexes
        for (let desiredIndex = startIndex; desiredIndex <= endIndex; desiredIndex++) {
          const buttonSelector = `button[data-pill-button-options="index:#${desiredIndex}"] .m-pill-item-name.button-text`;
          const runButtons = document.querySelectorAll(buttonSelector);
          console.log("runButtons", runButtons);
      
          if (runButtons.length >= 2) {
            const runButton = runButtons[1]; // Select the second matching element
            for (let i = 0; i < times; i++) {
              runButton.click();
            }
          } else {
            console.error(`Second button with index ${desiredIndex} not found.`);
          }
        }
      }
      
      
});
