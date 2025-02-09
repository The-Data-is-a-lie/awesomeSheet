function clickMostRecentTab(characterData, updateMostRecentTabValue) {
    var value = extract_value(updateMostRecentTabValue);
    console.log("this is your extracted avlue", value);
    
    console.log("Most recent tab value update button:", updateMostRecentTabValue);
    if (updateMostRecentTabValue) {
      var characterKeywords = /character|experience|classes|senses|initiative|speed|image|character_generator/i;
      var statsKeywords = /stats|abilities|archetypes|feats|traits|languages|power/i;
      var possessionsKeywords = /possessions|armor|body_slots|descriptions|item|encumbrance|consumable|wealth/i;
      var hpKeywords = /hp|cmd|saves|dr|sr|resistance/i;
      var acKeywords = /\bac\b/i;
      var offenseKeywords = /cmb|attack/i;
      var spellKeywords = /level_0|level_1|level_2|level_3|level_4|level_5|level_6|level_7|level_8|level_9|spell-stats/i;
  
      if (characterKeywords.test(updateMostRecentTabValue)) {
        var characterSecondValues = {
          character: "character",
          experience: "experience", 
          classes: "classes", 
          senses: "senses", 
          intiative: "intiative", 
          speed: "speed", 
          image: "image",
          character_generator: "character_generator",           
          
        };
        if (characterKeywords.test(updateMostRecentTabValue)) {
          var second_value = characterSecondValues[value] || value; // Use default value if not found
          var hpButton = document.querySelector(`button[data-tab-options='tabGroup:basics,tab:${value},target:js-tab-panel-${second_value}']`);
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
      }

      } else if (statsKeywords.test(updateMostRecentTabValue)) {
        var statsButton = document.querySelector(`button[data-tab-options='tabGroup:statistics,tab:${value},target:js-tab-panel-${value}']`);
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
        if (value === "body_slots") {
          const possessionsButton = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:body_slots,target:js-tab-panel-body-slots']");
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
        } else if (value === "descriptions") {
          const possessionsButton = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:body_slots_descriptions,target:js-tab-panel-body-slots-descriptions']");
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
        } else {
          const possessionsButton = document.querySelector(`button[data-tab-options='tabGroup:equipment,tab:${value},target:js-tab-panel-${value}']`);
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
      }



      } else if (hpKeywords.test(updateMostRecentTabValue)) {
        const hpSecondValues = {
          hp: "hit-points",
          ac: "armor_class", 
          cmd: "combat-maneuver-defense", 
          saves: "saves", 
          dr: "damage-reduction", 
          sr: "spell-resistance", 
          resistance: "resistances", 
          
        };
        if (hpKeywords.test(updateMostRecentTabValue)) {
          const second_value = hpSecondValues[value] || value; // Use default value if not found
          const hpButton = document.querySelector(`button[data-tab-options='tabGroup:defense,tab:${value},target:js-tab-panel-${second_value}']`);
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
      }
   
    } else if (offenseKeywords.test(updateMostRecentTabValue)) {
      const offenseSecondValues = {
        cmb: "combat-maneuver-bonus", 
        attack: "armor-attacks", 
        
      };
      if (offenseKeywords.test(updateMostRecentTabValue)) {
        const second_value = offenseSecondValues[value] || value; // Use default value if not found
        const offenseButton = document.querySelector(`button[data-tab-options='tabGroup:offense,tab:${value},target:js-tab-panel-${second_value}']`);
        if (offenseButton) {
          offenseButton.click();
          setTimeout(() => {
              offenseButton.focus();
              console.log("Character tab clicked successfully!");
            }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("HP tab clicked successfully!");
      } else {
        console.error("HP tab button not found.");
      }
    }


            } else if (spellKeywords.test(updateMostRecentTabValue)) {
              const spellSecondValues = {
                level_0: "level-0", 
                level_1: "level-1", 
                level_2: "level-2", 
                level_3: "level-3", 
                level_4: "level-4", 
                level_5: "level-5", 
                level_6: "level-6", 
                level_7: "level-7", 
                level_8: "level-8", 
                level_9: "level-9", 

                
              };
            const spellButton = document.querySelector(`button[data-tab-options='tabGroup:spells,tab:${value},target:js-tab-panel-spell-level-${second_value}']`);
            if (spellButton) {
            spellButton.click();
            setTimeout(() => {
                spellButton.focus();
                console.log("Character tab clicked successfully!");
              },

              300); // Delay of 100 milliseconds (adjust as needed)
              console.log("Spells tab clicked successfully!");
        }
        } else {
          console.log("updateMostRecentTabValue doesn't match any keywords.");
        }
      } else {
        console.error("updateMostRecentTabValue not found in localStorage");
      }
    }
  
  
  function extract_value(element) {
      // Extract value using regex with capture group
      const valueMatch = element?.match(/-([^-]*)$/); // Capture group for text after last "-"
      const value = valueMatch?.[1]?.trim(); // Extract captured value and trim
    
      if (value) {
        console.log("Extracted value:", value);
        return `${value}`; // Assuming value represents experience
      } else {
        value = "character"
        console.error("Failed to extract value from updateMostRecentTabValue Primary.");
        return "";
      }
    }
    
    function extract_value_secondary(element) {
      // Extract value using regex with capture group
      const valueMatch = element?.match(/_([^_]*)$/); // Capture group for text after last "_"
      const value = valueMatch?.[1]?.trim(); // Extract captured value and trim
    
      if (value) {
        console.log("Extracted value:", value);
        return `${value}`; // Assuming value represents experience
      } else {
        console.error("Failed to extract value from updateMostRecentTabValue Secondary.");
        return "";
      }
    }
    
    // export { clickMostRecentTab };

    window.clickMostRecentTab = clickMostRecentTab
    window.extract_value = extract_value
    window.extract_value_secondary = extract_value_secondary