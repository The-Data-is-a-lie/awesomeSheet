"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickMostRecentTab = clickMostRecentTab;
function clickMostRecentTab(characterData, updateMostRecentTabValue) {
  var value = extract_value(updateMostRecentTabValue);
  var valueSecondary = extract_value_secondary(updateMostRecentTabValue);
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
        character_generator: "character_generator"
      };
      if (characterKeywords.test(updateMostRecentTabValue)) {
        var second_value = characterSecondValues[value] || value; // Use default value if not found
        var hpButton = document.querySelector("button[data-tab-options='tabGroup:basics,tab:".concat(value, ",target:js-tab-panel-").concat(second_value, "']"));
        if (hpButton) {
          hpButton.click();
          setTimeout(function () {
            hpButton.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("HP tab clicked successfully!");
        } else {
          console.error("HP tab button not found.");
        }
      }
    } else if (statsKeywords.test(updateMostRecentTabValue)) {
      var statsButton = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:".concat(value, ",target:js-tab-panel-").concat(value, "']"));
      if (statsButton) {
        statsButton.click();
        setTimeout(function () {
          statsButton.focus();
          console.log("Character tab clicked successfully!");
        }, 300); // Delay of 100 milliseconds (adjust as needed)
        console.log("Stats tab clicked successfully!");
      } else {
        console.error("Stats tab button not found.");
      }
    } else if (possessionsKeywords.test(updateMostRecentTabValue)) {
      if (value === "body_slots") {
        var possessionsButton = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:body_slots,target:js-tab-panel-body-slots']");
        if (possessionsButton) {
          possessionsButton.click();
          setTimeout(function () {
            possessionsButton.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("Possessions tab clicked successfully!");
        } else {
          console.error("Possessions tab button not found.");
        }
      } else if (value === "descriptions") {
        var _possessionsButton = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:body_slots_descriptions,target:js-tab-panel-body-slots-descriptions']");
        if (_possessionsButton) {
          _possessionsButton.click();
          setTimeout(function () {
            _possessionsButton.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("Possessions tab clicked successfully!");
        } else {
          console.error("Possessions tab button not found.");
        }
      } else {
        var _possessionsButton2 = document.querySelector("button[data-tab-options='tabGroup:equipment,tab:".concat(value, ",target:js-tab-panel-").concat(value, "']"));
        if (_possessionsButton2) {
          _possessionsButton2.click();
          setTimeout(function () {
            _possessionsButton2.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("Possessions tab clicked successfully!");
        } else {
          console.error("Possessions tab button not found.");
        }
      }
    } else if (hpKeywords.test(updateMostRecentTabValue)) {
      var hpSecondValues = {
        hp: "hit-points",
        ac: "armor_class",
        cmd: "combat-maneuver-defense",
        saves: "saves",
        dr: "damage-reduction",
        sr: "spell-resistance",
        resistance: "resistances"
      };
      if (hpKeywords.test(updateMostRecentTabValue)) {
        var _second_value = hpSecondValues[value] || value; // Use default value if not found
        var _hpButton = document.querySelector("button[data-tab-options='tabGroup:defense,tab:".concat(value, ",target:js-tab-panel-").concat(_second_value, "']"));
        if (_hpButton) {
          _hpButton.click();
          setTimeout(function () {
            _hpButton.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("HP tab clicked successfully!");
        } else {
          console.error("HP tab button not found.");
        }
      }
    } else if (offenseKeywords.test(updateMostRecentTabValue)) {
      var offenseSecondValues = {
        cmb: "combat-maneuver-bonus",
        attack: "armor-attacks"
      };
      if (offenseKeywords.test(updateMostRecentTabValue)) {
        var _second_value2 = offenseSecondValues[value] || value; // Use default value if not found
        var offenseButton = document.querySelector("button[data-tab-options='tabGroup:offense,tab:".concat(value, ",target:js-tab-panel-").concat(_second_value2, "']"));
        if (offenseButton) {
          offenseButton.click();
          setTimeout(function () {
            offenseButton.focus();
            console.log("Character tab clicked successfully!");
          }, 300); // Delay of 100 milliseconds (adjust as needed)
          console.log("HP tab clicked successfully!");
        } else {
          console.error("HP tab button not found.");
        }
      }
    } else if (spellKeywords.test(updateMostRecentTabValue)) {
      var spellButton = document.querySelector("button[data-tab-options='tabGroup:spells,tab:".concat(value, ",target:js-tab-panel-spell-level-").concat(valueSecondary, "']"));
      if (spellButton) {
        spellButton.click();
        setTimeout(function () {
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
function extract_value(element) {
  var _valueMatch$;
  // Extract value using regex with capture group
  var valueMatch = element === null || element === void 0 ? void 0 : element.match(/-([^-]*)$/); // Capture group for text after last "-"
  var value = valueMatch === null || valueMatch === void 0 ? void 0 : (_valueMatch$ = valueMatch[1]) === null || _valueMatch$ === void 0 ? void 0 : _valueMatch$.trim(); // Extract captured value and trim

  if (value) {
    console.log("Extracted value:", value);
    return "".concat(value); // Assuming value represents experience
  } else {
    console.error("Failed to extract value from updateMostRecentTabValue.");
    return "";
  }
}
function extract_value_secondary(element) {
  var _valueMatch$2;
  // Extract value using regex with capture group
  var valueMatch = element === null || element === void 0 ? void 0 : element.match(/_([^_]*)$/); // Capture group for text after last "_"
  var value = valueMatch === null || valueMatch === void 0 ? void 0 : (_valueMatch$2 = valueMatch[1]) === null || _valueMatch$2 === void 0 ? void 0 : _valueMatch$2.trim(); // Extract captured value and trim

  if (value) {
    console.log("Extracted value:", value);
    return "".concat(value); // Assuming value represents experience
  } else {
    console.error("Failed to extract value from updateMostRecentTabValue.");
    return "";
  }
}