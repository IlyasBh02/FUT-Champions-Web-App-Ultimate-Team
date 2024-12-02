// let PlayersList = document.getElementById("playersList");

// // Utilisation de `fetch` pour récupérer les données des joueurs
// fetch("https://brofortech.com/players.json")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Impossible de récupérer les données des joueurs.");
//         }
//         return response.json();  // Récupération et conversion des données en JSON
//     })
//     .then(data => {
//         let players = data.players;

//         // Création des cartes pour chaque joueur
//         players.forEach(player => {
//             let div = document.createElement("div");
//             div.setAttribute("class", "cursor-pointer bg-goldcard bg-no-repeat bg-center scale-100 bg-cover w-56 h-72 flex flex-col pt-8 items-center");

//             let playerHTML = `
//                 <div class="scale-[1.6] mt-16">
//                     <div class="flex">
//                         <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
//                             <span class="mb-[-5px] font-bold">${player.rating}</span>
//                             <span class="text-[10px] font-medium">${player.position}</span>
//                         </div>
//                         <img class="w-20" src="${player.photo}" alt="photo de ${player.name}">
//                     </div>
//                     <div class="flex flex-col items-center">
//                         <p class="font-Raleway text-[9px] font-bold text-[#362f16] mb-[-4px]">${player.name}</p>
//                         <div class="text-[#362f16] gap-1 flex">
//                             ${generatePlayerStats(player)}  <!-- Appel à la fonction pour générer les stats -->
//                         </div>
//                         <div class="flex justify-center items-center w-3 gap-2">
//                             <img src="${player.flag}" alt="drapeau de ${player.nationality}">
//                             <img src="${player.logo}" alt="logo de l'équipe ${player.team}">
//                         </div>
//                     </div>
//                 </div>
//             `;

//             div.innerHTML = playerHTML;
//             PlayersList.appendChild(div);  // Ajout de la carte du joueur dans la liste
//         });
//     })
//     .catch(error => {
//         console.error("Erreur lors de la récupération des données : ", error);
//         // Affichage d'un message d'erreur à l'utilisateur (par exemple)
//         alert("Une erreur est survenue lors du chargement des joueurs.");
//     });

// // Fonction pour générer les statistiques du joueur selon sa position
// function generatePlayerStats(player) {
//     if (player.position !== "GK") {
//         // Si le joueur n'est pas gardien de but
//         return `
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">PAC</span>
//                 <span class="font-bold text-[10px]">${player.pace}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">SHO</span>
//                 <span class="font-bold text-[10px]">${player.shooting}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">PAS</span>
//                 <span class="font-bold text-[10px]">${player.passing}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">DRI</span>
//                 <span class="font-bold text-[10px]">${player.dribbling}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">DEF</span>
//                 <span class="font-bold text-[10px]">${player.defending}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">PHY</span>
//                 <span class="font-bold text-[10px]">${player.physical}</span>
//             </div>
//         `;
//     } else {
//         // Si le joueur est un gardien de but
//         return `
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">DIV</span>
//                 <span class="font-bold text-[10px]">${player.diving}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">HAN</span>
//                 <span class="font-bold text-[10px]">${player.handling}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">KIC</span>
//                 <span class="font-bold text-[10px]">${player.kicking}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">REF</span>
//                 <span class="font-bold text-[10px]">${player.reflexes}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">SPE</span>
//                 <span class="font-bold text-[10px]">${player.speed}</span>
//             </div>
//             <div class="flex flex-col gap-0 justify-center items-center">
//                 <span class="text-[7px] font-medium mb-[-4px]">POS</span>
//                 <span class="font-bold text-[10px]">${player.positioning}</span>
//             </div>
//         `;
//     }
// }
