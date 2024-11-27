// Récupérer les éléments
const form = document.getElementById('playerForm');
const playerList = document.getElementById('playerList').querySelector('ul');
const addPlayerButton = document.getElementById('addPlayer');

// Ajouter un joueur
addPlayerButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const league = document.getElementById('league').value;
  const nationality = document.getElementById('nationality').value;
  const position = document.getElementById('position').value;
  const PAC = document.getElementById('PAC').value;
  const SHO = document.getElementById('SHO').value;
  const PAS = document.getElementById('PAS').value;
  const DRI = document.getElementById('DRI').value;
  const DEF = document.getElementById('DEF').value;
  const PHY = document.getElementById('PHY').value;


  if (!name || !league|| !nationality || !position || !PAC || !SHO || !PAS || !DRI || !DEF || !PHY) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  // Créer l'élément joueur
  const playerItem = document.createElement('li');
  playerItem.className = 'p-4 bg-gray-700 rounded shadow flex justify-between items-center';
  playerItem.innerHTML = `
    <div>
      <h3 class="font-bold text-lg">${name}</h3>
      <p>Ligue: ${league} | Nationalité: ${nationality} | Position: ${position}</p>
      <p>Stats: PAC ${PAC}, SHO ${SHO}, PAS ${PAS}, DRI ${DRI}, DEF ${DEF}, PHY ${PHY}</p>
    </div>
    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded removePlayer">
      Supprimer
    </button>
  `;

  // Bouton Supprimer
  playerItem.querySelector('.removePlayer').addEventListener('click', () => {
    playerItem.remove();
  });

  // Ajouter le joueur à la liste
  playerList.appendChild(playerItem);

  // Réinitialiser le formulaire
  form.reset();
});