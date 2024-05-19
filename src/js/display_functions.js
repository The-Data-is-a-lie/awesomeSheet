"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayArchetypeInfo = displayArchetypeInfo;
exports.displayFeatsInfo = displayFeatsInfo;
exports.displayTraitsInfo = displayTraitsInfo;
exports.display_abilties = display_abilties;
exports.display_character_description = display_character_description;
exports.displaybodyslotsInfo = displaybodyslotsInfo;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// featsInfo.js

// Define the function
function displayFeatsInfo(featsDescriptionElement, characterData) {
  var info = characterData.feats;
  // Initialize an empty string to hold the formatted info
  var formattedInfo = '<ul>';

  // Trigger a click event on a specific button with a data attribute
  var buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:feats,target:js-tab-panel-feats']");
  if (buttonElement) {
    buttonElement.click();
    console.log("Feats display button clicked successfully!");
  } else {
    console.error("Button not found. Check your selector.");
  }

  // Loop through each feat in the feats info array
  info.forEach(function (feat) {
    // Add the feat name as a list item
    formattedInfo += "<li>".concat(feat, "</li>");
  });

  // Close the unordered list tag
  formattedInfo += '</ul>';

  // Set the inner HTML of the element to display the formatted info
  featsDescriptionElement.innerHTML = formattedInfo;
  featsDescriptionElement.focus();
}

// Extract traits info from character data

function displayTraitsInfo(traitsDescriptionElement, characterData) {
  var info = characterData.selected_traits;
  // Initialize an empty string to hold the formatted info
  var formattedInfo = '<ul>';

  // Trigger a click event on a specific button with a data attribute
  var buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:traits,target:js-tab-panel-traits']");
  if (buttonElement) {
    buttonElement.click();
    console.log("traits display button clicked successfully!");
  } else {
    console.error("Button not found. Check your selector.");
  }

  // Loop through each feat in the traits info array
  info.forEach(function (feat) {
    // Add the feat name as a list item
    formattedInfo += "<li>".concat(feat, "</li>");
  });

  // Close the unordered list tag
  formattedInfo += '</ul>';

  // Set the inner HTML of the element to display the formatted info
  traitsDescriptionElement.innerHTML = formattedInfo;
  traitsDescriptionElement.focus();
}

// Create a function to format and display archetype info
function displayArchetypeInfo(archetypeDescriptionElement, characterData) {
  console.log("display archetypes has run");
  var info = characterData.archetype_info;
  // Initialize an empty string to hold the formatted info
  var formattedInfo = '';

  // Trigger a click event on a specific button with a data attribute
  var buttonElement = document.querySelector("button[data-tab-options='tabGroup:statistics,tab:archetypes,target:js-tab-panel-archetypes']");
  if (buttonElement) {
    buttonElement.click();
    console.log("Button clicked successfully!");
  } else {
    console.error("Button not found. Check your selector.");
  }

  // Loop through each key-value pair in the archetype info
  for (var _i = 0, _Object$entries = Object.entries(info); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      archetypeName = _Object$entries$_i[0],
      abilities = _Object$entries$_i[1];
    // Add the archetype name as a heading
    formattedInfo += "<h3>".concat(archetypeName, "</h3>");

    // Loop through each ability in the archetype
    for (var _i2 = 0, _Object$entries2 = Object.entries(abilities); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        abilityName = _Object$entries2$_i[0],
        abilityDescription = _Object$entries2$_i[1];
      // Add the ability name as a heading
      formattedInfo += "<h4>".concat(abilityName, "</h4>");
      // Add the ability description
      formattedInfo += "<p>".concat(abilityDescription, "</p>");
    }

    // Add a line break after each archetype
    formattedInfo += '<br>';
  }

  // Set the inner HTML of the element to display the formatted info
  archetypeDescriptionElement.innerHTML = formattedInfo;
  archetypeDescriptionElement.focus();
}
function displaybodyslotsInfo(bodyslotsDescriptionElement, characterData, info) {
  console.log("display body slots has run");
  // Initialize an empty string to hold the formatted info
  var formattedInfo = '';

  // Loop through each key-value pair in the bodyslots info
  for (var _i3 = 0, _Object$entries3 = Object.entries(info); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
      bodyslotsName = _Object$entries3$_i[0],
      bodyslotsData = _Object$entries3$_i[1];
    // Add the bodyslots name as a heading
    formattedInfo += "<h3>".concat(bodyslotsName, ":</h3>");

    // Add item_name and description for each bodyslot
    formattedInfo += "<h4>".concat(bodyslotsData.item_name, "</h4>");
    formattedInfo += "<p>".concat(bodyslotsData.description, "</p>");

    // Add a line break after each bodyslots
    formattedInfo += '<br>';
  }

  // Set the inner HTML of the element to display the formatted info
  bodyslotsDescriptionElement.innerHTML = formattedInfo;
  bodyslotsDescriptionElement.focus();
}
function display_abilties(abilitiesDescriptionElement, characterData, class_features) {
  console.log("display abiltiies has run");
  // Setting up abilities notes to get autofilled
  console.log("display abilties class features", class_features);
  var characterClass = characterData["class"]; // Assuming 'class' is a property in characterData

  var classFeaturesHTML = '';

  // List of classes where the first method will be used
  var method1Classes = ["barbarian", "investigator", "rogue", "skald", "slayer", "stalker", "vigilante"].map(function (cls) {
    return cls.toLowerCase();
  });
  if (method1Classes.includes(characterClass)) {
    for (var feature in class_features) {
      if (class_features.hasOwnProperty(feature)) {
        var benefits = class_features[feature].benefits;
        var prerequisites = class_features[feature].prerequisites;
        classFeaturesHTML += "\n                    <div class=\"ability\">\n                        <h3>Ability: ".concat(feature, "</h3>\n                        <p><span class=\"label\">Benefits:</span> ").concat(benefits, "</p>\n                        <p><span class=\"label\">Prerequisites:</span> ").concat(prerequisites, "</p>\n                    </div>\n                ");
      }
    }
  } else {
    for (var _feature in class_features) {
      if (class_features.hasOwnProperty(_feature)) {
        classFeaturesHTML += "\n                    <div class=\"ability\">\n                        <h3>Ability: ".concat(_feature, "</h3>\n                ");
        for (var key in class_features[_feature]) {
          if (class_features[_feature].hasOwnProperty(key)) {
            var value = class_features[_feature][key];
            classFeaturesHTML += "\n                            <p><span class=\"label\">".concat(key[0].toUpperCase() + key.slice(1), ":</span> ").concat(value, "</p>\n                        ");
          }
        }
        classFeaturesHTML += "</div>";
      }
    }
  }
  abilitiesDescriptionElement.innerHTML = classFeaturesHTML;
  abilitiesDescriptionElement.focus();
}
function display_character_description(characterDescriptionElement, characterData) {
  console.log("display_character_description has run");
  //   Setting up character description 
  var professions = characterData.professions;
  var background_traits = characterData.background_traits;
  var mannerisms = characterData.mannerisms;
  var flaws = characterData.flaws;
  var parents = characterData.parents;
  var older_brothers = characterData.older_brothers;
  var younger_brothers = characterData.younger_brothers;
  var older_sisters = characterData.older_sisters;
  var younger_sisters = characterData.younger_sisters;
  characterDescriptionElement.innerHTML = "\n    <pre>\n        Professions: ".concat(JSON.stringify(professions).replace(/["\[\]]/g, ''), "\n        Background Traits: ").concat(JSON.stringify(background_traits).replace(/["\[\]]/g, ''), "\n        Mannerisms: ").concat(JSON.stringify(mannerisms).replace(/["\[\]]/g, ''), "\n        Flaws: ").concat(JSON.stringify(flaws).replace(/["\[\]]/g, ''), "\n        Parents: ").concat(JSON.stringify(parents).replace(/["\[\]]/g, ''), "\n        Siblings: \n        ").concat(JSON.stringify(older_brothers).replace(/["\[\]]/g, ''), "\n        ").concat(JSON.stringify(younger_brothers).replace(/["\[\]]/g, ''), "\n        ").concat(JSON.stringify(older_sisters).replace(/["\[\]]/g, ''), "\n        ").concat(JSON.stringify(younger_sisters).replace(/["\[\]]/g, ''), "\n    </pre>\n    ");
  characterDescriptionElement.focus();
}
// Export the function