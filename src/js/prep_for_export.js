// Saves the region input value to localStorage (not sure what to do with this)

var prepForExportButton = document.getElementById("prepForExportButton");

prepForExportButton.addEventListener("click", function() {
  // Call saveRegion to handle data persistence
  saveRegion();

  // Retrieve the saved region data after saving
  const retrievedRegion = localStorage.getItem("savedRegion");

  if (retrievedRegion) {
    console.log("Retrieved region:", retrievedRegion);
    // Set the input value with the retrieved region
    const regionInput = document.getElementById("basics-character_generator-region");
    regionInput.value = retrievedRegion;
  } else {
    console.log("No region saved yet.");
    // (You can prompt the user to set a region if desired)
  }
});

function saveRegion() {
  const regionInput = document.getElementById("basics-character_generator-region");

  // Check for existing data in localStorage (already handled)
  let storedRegion = localStorage.getItem("savedRegion"); // Uncomment this line if needed

  // If no data exists, set a default value (already handled)
  if (!storedRegion) {
    storedRegion = "Default Region"; // Replace with your desired default
  }

  // Save the current input value to localStorage
  localStorage.setItem("savedRegion", regionInput.value);
}
