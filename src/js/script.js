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
      if (isNaN(value) || value < 1 || value > 100) {
          valid = false;
          alert(`statique entre 1 et 100 !`);
      }
  });

  if (valid) {
      alert("player add Done !");
  }
});







// model card
