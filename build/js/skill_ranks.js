"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skill_ranks_func = skill_ranks_func;
function skill_ranks_func(skillRanksObject, includeCustomCheckbox) {
  //   Need to add a fix for Perform + knowledge martial + Profession portions + remove skills that don't belong in the list
  console.log("skill ranks func object running");
  for (var skillName in skillRanksObject) {
    if (skillRanksObject.hasOwnProperty(skillName)) {
      var skillRank = skillRanksObject[skillName];
      var elementId = "skills-default-".concat(skillName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(), "-ranks");
      var element = document.getElementById(elementId);
      console.log("element");
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
      }
    }
  }
  if (includeCustomCheckbox) {
    includeCustomCheckbox.click(); // Simulate clicking the checkbox
    includeCustomCheckbox.click(); // Simulate clicking the checkbox
  }
}