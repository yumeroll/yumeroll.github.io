// List of characters (this is just a starting point, you will add more characters)
const characters = [
  {
    name: "Mizi",
    gender: "woman",
    rouletteType: "animanga",
    series: "ALIEN STAGE",
    imageUrl: "https://files.catbox.moe/2eotzh.jpg",
    artist: "VIVINOS, QMENG, STUDIO LICO",
  },
  // Add more characters here
];

// Store user collection in localStorage (initially empty if none exists)
let userCollection = JSON.parse(localStorage.getItem("userCollection")) || [];

// Handle character roll
function rollCharacter(category) {
  // Filter characters based on the selected category (this is a simple example)
  let filteredCharacters = characters.filter((char) => {
    if (
      category === "wa" &&
      char.rouletteType === "animanga" &&
      char.gender === "woman"
    )
      return true;
    if (
      category === "wg" &&
      char.rouletteType === "game" &&
      char.gender === "woman"
    )
      return true;
    if (
      (category === "xa" && char.rouletteType === "animanga") ||
      char.rouletteType === "game"
    )
      return true;
    // Add more categories as needed...
    return false;
  });

  // Randomly select a character from the filtered list
  const selectedCharacter =
    filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];

  // Display the character on the page
  displayCharacter(selectedCharacter);
}

// Display the character details on the page
function displayCharacter(character) {
  const characterDisplay = document.getElementById("character-display");
  characterDisplay.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="${character.name}" id="character-image">
        <p>Series: ${character.series}</p>
        <p>Artist: ${character.artist}</p>
        <button onclick="claimCharacter('${character.name}')">Claim</button>
    `;
}

// Claim a character and add it to the user's collection
function claimCharacter(characterName) {
  // Find the character in the database
  const character = characters.find((char) => char.name === characterName);

  // Add to the user's collection if it's not already there
  if (!userCollection.some((char) => char.name === characterName)) {
    userCollection.push(character);
    localStorage.setItem("userCollection", JSON.stringify(userCollection)); // Save to localStorage
    updateCollectionDisplay();
  }
}

// Update the collection display with claimed characters
function updateCollectionDisplay() {
  const collectionDisplay = document.getElementById("collection");
  collectionDisplay.innerHTML = ""; // Clear the collection display
  userCollection.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.imageUrl}" alt="${character.name}">
            <p>Series: ${character.series}</p>
            <p>Artist: ${character.artist}</p>
        `;
    collectionDisplay.appendChild(characterElement);
  });
}

// Add an event listener to the roll button (example for category 'wa')
document.getElementById("roll-button").addEventListener("click", () => {
  rollCharacter("wa"); // You can change 'wa' to another category as needed
});

// Load the user’s collection when the page loads
window.onload = () => {
  updateCollectionDisplay(); // Show previously claimed characters
};
