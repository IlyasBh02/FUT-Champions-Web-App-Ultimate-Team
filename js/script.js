AddBtn.addEventListener('click', (event) => {
event.preventDefault();



if (!validateForm()) {
    return; 
}
// console.log('hello')



const name = document.getElementById("Name").value;
const profile = document.getElementById("Photo").value;
const flag = document.getElementById("Nationality").value;
const logo = document.getElementById("club").value;
const statique = document.getElementById("statique").value;
const rating = document.getElementById("rating").value;
const pas = document.getElementById("pas").value;
const pac = document.getElementById("pac").value;
const shot = document.getElementById("shot").value;
const drbl = document.getElementById("drbl").value;
const def = document.getElementById("def").value;
const phy = document.getElementById("phy").value;
  


if (editPLY) {

    editPLY.querySelector(".player-name").textContent = name;
    editPLY.querySelector(".player-photo").src = profile;
    editPLY.querySelector(".player-nationality").src = flag;
    editPLY.querySelector(".player-club").src = logo;
    editPLY.querySelector(".player-statique").textContent = statique;
    editPLY.querySelector(".player-pac").textContent = `PAC\n${pac}`;
    editPLY.querySelector(".player-shot").textContent = `SHO\n${shot}`;
    editPLY.querySelector(".player-pas").textContent = `PAS\n${pas}`;
    editPLY.querySelector(".player-drbl").textContent = `DRI\n${drbl}`;
    editPLY.querySelector(".player-def").textContent = `DEF\n${def}`;
    editPLY.querySelector(".player-phy").textContent = `PHY\n${phy}`;


    const newContainer = document.getElementById(statique);
    if (newContainer && newContainer !== editPLY.parentNode) {
        const OrgCard = newContainer.querySelector('.player-card');
        if (OrgCard) {
            changeContainer.appendChild(OrgCard);
        }

        newContainer.appendChild(editPLY);
    }
} else {
    const playerCard = document.createElement("div");
    playerCard.className = "bg-[url('badge_total_rush.webp')] h-full w-full bg-contain bg-center bg-no-repeat flex flex-col items-center mt-6 player-card";
    playerCard.setAttribute("data-unique-id", Date.now()); 
    playerCard.innerHTML = `
        <div>
            <div class="flex flex-col items-center justify-between h-[20vh] mt-1">
                <div class="flex h-full items-end justify-between"> 
                    <img src="${flag}" class="h-2 w-4 pl-2 player-nationality" alt=""> 
                    <img src="${profile}" class="w-10 player-photo" alt="">
                    <img src="${logo}" class="h-4 w-6 pr-3 player-club" alt="">                    
                </div>  
                <div class="flex text-[8px] mt-1">
                    <p class="text-white font-bold player-name">${name}</p>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex h-full w-[5vw] text-[5px] justify-between text-white font-semibold">
                        <p class="player-pac">PAC <br>${pac}</p>
                        <p class="player-shot">SHO <br>${shot}</p>
                        <p class="player-pas">PAS <br>${pas}</p>
                        <p class="player-drbl">DRI <br>${drbl}</p>
                        <p class="player-def">DEF <br>${def}</p>
                        <p class="player-phy">PHY <br>${phy}</p>
                    </div>
                    <div>
                        <p class="text-white font-semibold flex h-full w-[7vw] text-[10px] justify-center player-statique">${statique}</p>
                    </div>
                    <div class="flex gap-1 text-white text-[10px] justify-center mt- h-fit">
                        <div>
                            <p class="modifier-button cursor-pointer">
                                <!-- modifier icon (SVG) -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 2l6 6-10 10H6v-6L16 2z"></path>
                                </svg>
                            </p>
                        </div>
                        <div>
                            <p class="delete-button cursor-pointer">
                                <!-- Delete icon (SVG) -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </p>
                        </div>
                        <div>
                            <p class="play-button cursor-pointer">
                                <!-- Play icon (SVG) -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v18l14-9-14-9z"></path>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  
    addCardButtonListeners(playerCard);

    changeContainer.appendChild(playerCard);
}
  
    form.classList.add("hidden");
    resetForm(); 

    alert('le joueur est bien ajouté !');
    });

    document.addEventListener('DOMContentLoaded', () => {
    const showFormBtn = document.getElementById("showFormButton");
    const form = document.getElementById("info");
    const AddBtn = document.getElementById("AddBtn");
    const closeBtn = document.getElementById("closeBtn");
    const changeContainer = document.getElementById("change");
  
    let editPLY = null;
  
    function validateForm() {
        const inputs = form.querySelectorAll('input');
        let isValid = true;
        const errorMessages = [];
  
        inputs.forEach(input => input.classList.remove('border-red-900'));
  
        inputs.forEach(input => {
            const value = input.value.trim();
  
            if (value === '') {
                input.classList.add('border-red-900');
                errorMessages.push(`${input.previousElementSibling.textContent} erreur`);
                isValid = false;
                return;
            }
  
            if (input.type === 'url') {
                const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                if (!urlPattern.test(value)) {
                    input.classList.add('border-red-900');
                    errorMessages.push(`Veriffie le URL ${input.previousElementSibling.textContent}`);
                    isValid = false;
                }
            }
  
            if (input.type === 'number') {
                const numValue = parseFloat(value);
                if (isNaN(numValue) || numValue < 1 || numValue > 100) {
                    input.classList.add('border-red-900');
                    errorMessages.push(`${input.previousElementSibling.textContent}statique entre 1 et 100`);
                    isValid = false;
                }
            }
  
            if (input.id === 'Name') {
                const textVRF = /^([a-zA-Z]{3,})\s?([a-zA-Z]{3,})$/;
                if (!textVRF.test(value)) {
                    input.classList.add('border-red-900');
                    errorMessages.push('vérifier le nome');
                    isValid = false;
                }
            }
        });
  
        const statiqueSelect = document.getElementById('statique');
        if (statiqueSelect.value === '') {
            statiqueSelect.classList.add('border-red-900');
            errorMessages.push('Please select a statique');
            isValid = false;
        }
  
        let errorContainer = document.getElementById('errorMessages');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'errorMessages';
            errorContainer.classList.add('text-red-500', 'mb-4');
            form.insertBefore(errorContainer, form.firstChild);
        }
  
        errorContainer.innerHTML = '';
  
        if (!isValid) {
            errorMessages.forEach(message => {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = message;
                errorContainer.appendChild(errorDiv);
            });
            return false;
        }
  
        return true;
    }
  
    const resetForm = () => {
        const errorContainer = document.getElementById('errorMessages');
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }
    };
  
    showFormBtn.addEventListener('click', () => {
        form.classList.remove("hidden");
        editPLY = null;
        resetForm();
    });
  
    closeBtn.addEventListener('click', () => {
        form.classList.add("hidden");
        resetForm();
    });
  
    function addCardButtonListeners(cardElement) {
        const deleteBtn = cardElement.querySelector('.delete-button');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const playerCard = event.target.closest('.player-card');
                if (playerCard) {
                    playerCard.remove();
                }
            });
        }
  
        const modifierBtn = cardElement.querySelector('.modifier-button');
        if (modifierBtn) {
            modifierBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const playerCard = event.target.closest('.player-card');
                if (playerCard) {
                    const name = playerCard.querySelector(".player-name").textContent;
                    const profile = playerCard.querySelector(".player-photo").src;
                    const flag = playerCard.querySelector(".player-nationality").src;
                    const logo = playerCard.querySelector(".player-club").src;
                    const statique = playerCard.querySelector(".player-statique").textContent;
                    const pac = playerCard.querySelector(".player-pac").textContent.split('\n')[1];
                    const shot = playerCard.querySelector(".player-shot").textContent.split('\n')[1];
                    const pas = playerCard.querySelector(".player-pas").textContent.split('\n')[1];
                    const drbl = playerCard.querySelector(".player-drbl").textContent.split('\n')[1];
                    const def = playerCard.querySelector(".player-def").textContent.split('\n')[1];
                    const phy = playerCard.querySelector(".player-phy").textContent.split('\n')[1];
  
                    document.getElementById("Name").value = name;
                    document.getElementById("Photo").value = profile;
                    document.getElementById("Nationality").value = flag;
                    document.getElementById("club").value = logo;
                    document.getElementById("statique").value = statique;
                    document.getElementById("pas").value = pas;
                    document.getElementById("pac").value = pac;
                    document.getElementById("shot").value = shot;
                    document.getElementById("drbl").value = drbl;
                    document.getElementById("def").value = def;
                    document.getElementById("phy").value = phy;
  
                    form.classList.remove("hidden");
                    editPLY = playerCard;
                }
            });
        }
  
        const playBtn = cardElement.querySelector('.play-button');
        if (playBtn) {
            playBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const playerCard = event.target.closest('.player-card');
                if (playerCard) {
                    const statiqueId = playerCard.querySelector(".player-statique").textContent;
                    const destinationDiv = document.getElementById(statiqueId);
                    if (destinationDiv) {
                        const OrgCard = destinationDiv.querySelector('.player-card');
                        if (OrgCard) {
                            changeContainer.appendChild(OrgCard);
                        }
                        destinationDiv.appendChild(playerCard);
                    } else {
                        alert(`Veriffier ID "${statiqueId}"`);
                    }
                }
            });
        }
    }
  
    AddBtn.addEventListener('click', (event) => {
        event.preventDefault();
  
        if (!validateForm()) 
            return;
  
        const name = document.getElementById("Name").value;
        const profile = document.getElementById("Photo").value;
        const flag = document.getElementById("Nationality").value;
        const logo = document.getElementById("club").value;
        const statique = document.getElementById("statique").value;
        const pas = document.getElementById("pas").value;
        const pac = document.getElementById("pac").value;
        const shot = document.getElementById("shot").value;
        const drbl = document.getElementById("drbl").value;
        const def = document.getElementById("def").value;
        const phy = document.getElementById("phy").value;
  
        if (editPLY) {
            editPLY.querySelector(".player-name").textContent = name;
            editPLY.querySelector(".player-photo").src = profile;
            editPLY.querySelector(".player-nationality").src = flag;
            editPLY.querySelector(".player-club").src = logo;
            editPLY.querySelector(".player-statique").textContent = statique;
            editPLY.querySelector(".player-pac").textContent = `PAC\n${pac}`;
            editPLY.querySelector(".player-shot").textContent = `SHO\n${shot}`;
            editPLY.querySelector(".player-pas").textContent = `PAS\n${pas}`;
            editPLY.querySelector(".player-drbl").textContent = `DRI\n${drbl}`;
            editPLY.querySelector(".player-def").textContent = `DEF\n${def}`;
            editPLY.querySelector(".player-phy").textContent = `PHY\n${phy}`;
  
            const newContainer = document.getElementById(statique);
            if (newContainer && newContainer !== editPLY.parentNode) {
                const OrgCard = newContainer.querySelector('.player-card');
                if (OrgCard) {
                    changeContainer.appendChild(OrgCard);
                }
                newContainer.appendChild(editPLY);
            }
        } else {
            const playerCard = document.createElement("div");
            playerCard.className = "bg-[url('images/cart-1.png')] h-full w-full bg-contain bg-center bg-no-repeat flex flex-col items-center mt-6 player-card";
            playerCard.innerHTML = `
                <div>
                  <div class="flex flex-col items-center justify-between h-[20vh] mt-1">
                      <div class="flex h-full items-end justify-between"> 
                          <img src="${flag}" class="h-2 w-4 pl-2 player-nationality" alt=""> 
                          <img src="${profile}" class="w-10 player-photo" alt="">
                          <img src="${logo}" class="h-4 w-6 pr-3 player-club" alt="">                    
                      </div>  
                      <div class="flex text-[8px] mt-1">
                          <p class="text-white font-bold player-name">${name}</p>
                      </div>
                      <div class="flex flex-col items-center">
                          <div class="flex h-full w-[5vw] text-[5px] justify-between text-white font-semibold">
                              <p class="player-pac">PAC <br>${pac}</p>
                              <p class="player-shot">SHO <br>${shot}</p>
                              <p class="player-pas">PAS <br>${pas}</p>
                              <p class="player-drbl">DRI <br>${drbl}</p>
                              <p class="player-def">DEF <br>${def}</p>
                              <p class="player-phy">PHY <br>${phy}</p>
                          </div>
                          <div>
                              <p class="text-white font-semibold flex h-full w-[7vw] text-[10px] justify-center player-statique">${statique}</p>
                          </div>
                          <div class="flex gap-1 text-white text-[10px] justify-center mt- h-fit">
                            <div>
                                <p class="modifier-button cursor-pointer">
                                    <!-- modifier icon (SVG) -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 2l6 6-10 10H6v-6L16 2z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div>
                                <p class="delete-button cursor-pointer">
                                    <!-- Delete icon (SVG) -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </p>
                            </div>
                            <div>
                                <p class="play-button cursor-pointer">
                                    <!-- Play icon (SVG) -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v18l14-9-14-9z"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>

                      </div>
                  </div>
              </div>
            `;
            addCardButtonListeners(playerCard);
            changeContainer.appendChild(playerCard);
        }
  
        form.classList.add("hidden");
        resetForm();
    });
  });