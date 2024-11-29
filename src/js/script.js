document.getElementById("playerForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let valid = true;

  const playerName = document.getElementById("playerName").value.trim();
  if (playerName === "" || /\d/.test(playerName)) {
      valid = false;
      alert("Le nom du joueur est requis et ne doit pas contenir de chiffres.");
  }

  const nationality = document.getElementById("nationality").value;
  const nationalityPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!nationalityPattern.test(nationality)) {
      valid = false;
      alert("L'URL de la nationalité est invalide.");
  }

  const teamUrl = document.getElementById("teamUrl").value;
  const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlPattern.test(teamUrl)) {
      valid = false;
      alert("L'URL de l'équipe est invalide.");
  }

  const position = document.getElementById("position").value;
  if (position === "") {
      valid = false;
      alert("entre la position !");
  }

  const stats = ["pac", "sho", "pas", "dri", "dfe", "phy"];
  stats.forEach(stat => {
      const value = parseInt(document.getElementById(stat).value);
      if (isNaN(value) || value < 1 || value > 99) {
          valid = false;
          alert(`statique entre 1 et 100 !`);
      }
  });

  if (valid) {
      alert("player add Done !");
  }
});







// model card
// Fonction pour ajouter un joueur à la position
document.getElementById("playerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Empêcher la soumission du formulaire

  // Récupérer les données du formulaire
  const playerName = document.getElementById("playerName").value;
  const nationality = document.getElementById("nationality").value;
  const teamUrl = document.getElementById("teamUrl").value;
  const position = document.getElementById("position").value;
  const pac = document.getElementById("pac").value;
  const sho = document.getElementById("sho").value;
  const pas = document.getElementById("pas").value;
  const dri = document.getElementById("dri").value;
  const dfe = document.getElementById("dfe").value;
  const phy = document.getElementById("phy").value;

  // Créer la card du joueur à ajouter
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card", "bg-green-600", "p-4", "rounded-lg", "shadow-lg", "text-white", "w-full");

  playerCard.innerHTML = `
      <h3 class="text-lg font-semibold">${playerName}</h3>
      <p>Position: ${position}</p>
      <p>Nationality: ${nationality}</p>
      <p>Team: <a href="${teamUrl}" class="text-blue-300" target="_blank">${teamUrl}</a></p>
      <p>PAC: ${pac}, SHO: ${sho}, PAS: ${pas}, DRI: ${dri}, DFE: ${dfe}, PHY: ${phy}</p>
  `;

  // Ajouter la card à la position sélectionnée
  const positionCard = document.getElementById(position);
  if (positionCard) {
      positionCard.appendChild(playerCard); // Ajouter la card du joueur à l'élément correspondant à la position
  }

  // Réinitialiser le formulaire après ajout
  document.getElementById("playerForm").reset();
});
