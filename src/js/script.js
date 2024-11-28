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
// document.getElementById('playerForm').addEventListener('submit', function (event) {
//   event.preventDefault(); 

//   const playerName = document.getElementById('playerName').value;
//   const nationality = document.getElementById('nationality').value;
//   const teamUrl = document.getElementById('teamUrl').value;
//   const position = document.getElementById('position').value;
//   const pac = document.getElementById('pac').value;
//   const sho = document.getElementById('sho').value;
//   const pas = document.getElementById('pas').value;
//   const dri = document.getElementById('dri').value;
//   const def = document.getElementById('dfe').value;
//   const phy = document.getElementById('phy').value;

//   const playerCard = document.createElement('div');
//   playerCard.classList.add('player-card', 'bg-gray-800', 'p-4', 'rounded-lg', 'max-w-xs', 'text-white', 'mb-6');

//   playerCard.innerHTML = `
//       <div class="player-card-top flex justify-between items-center mb-4">
//           <div class="player-info flex items-center">
//               <img src="https://flagcdn.com/w320/${nationality.toLowerCase()}.png" alt="${nationality}" class="w-8 h-8 mr-2">
//               <div>
//                   <h3 class="text-xl font-semibold">${playerName}</h3>
//                   <p class="text-sm">${position}</p>
//               </div>
//           </div>
//           <img src="${teamUrl}" alt="Team Logo" class="w-10 h-10 rounded-full">
//       </div>
//       <div class="player-stats grid grid-cols-2 gap-4">
//           <div><strong>PAC:</strong> <span>${pac}</span></div>
//           <div><strong>SHO:</strong> <span>${sho}</span></div>
//           <div><strong>PAS:</strong> <span>${pas}</span></div>
//           <div><strong>DRI:</strong> <span>${dri}</span></div>
//           <div><strong>DEF:</strong> <span>${def}</span></div>
//           <div><strong>PHY:</strong> <span>${phy}</span></div>
//       </div>
//   `;

//   document.getElementById('playersContainer').appendChild(playerCard);

//   document.getElementById('playerForm').reset();
// });

