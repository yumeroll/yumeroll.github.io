// Sample character data
const characters = [
  {
    name: "Mizi",
    gender: "Woman",
    series: "ALIEN STAGE",
    imageUrl: "https://files.catbox.moe/2eotzh.jpg",
    artist: "VIVINOS, QMENG, STUDIO LICO",
  },
  // Add more characters here as needed
];

// Function to roll a character
document.getElementById("rollButton").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const character = characters[randomIndex];

  // Display character info
  const characterDisplay = document.getElementById("characterDisplay");
  characterDisplay.innerHTML = `
        <h2>${character.name}</h2>
        <p>Gender: ${character.gender}</p>
        <p>Series: ${character.series}</p>
        <img src="${character.imageUrl}" alt="${character.name}" style="max-width: 100%; height: auto;">
        <p><strong>Image Credit:</strong> ${character.artist}</p>
        <button onclick="claimCharacter('${character.name}')">Claim Character</button>
    `;
});

// Function to simulate claiming a character
function claimCharacter(characterName) {
  alert(`You claimed ${characterName}!`);
  // Here you would add more logic to save claimed characters, like storing them in local storage
}
