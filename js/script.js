addPlayerBtn.addEventListener('click', (event) => {
    event.preventDefault();
  console.log('clicked')

    // Validate the form first
    if (!validateForm()) {
        return; 
    }
    console.log('hello')
  
    const playerName = document.getElementById("Name").value;
    const photoURL = document.getElementById("Photo").value;
    const nationalityURL = document.getElementById("Nationality").value;
    const clubURL = document.getElementById("club").value;
    const statique = document.getElementById("statique").value;
    const rating = document.getElementById("rating").value;
    const passing = document.getElementById("passing").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;
  
    if (editingCard) {
        /////////////////////////// Update  card /////////////////////////////////

        editingCard.querySelector(".player-name").textContent = playerName;
        editingCard.querySelector(".player-photo").src = photoURL;
        editingCard.querySelector(".player-nationality").src = nationalityURL;
        editingCard.querySelector(".player-club").src = clubURL;
        editingCard.querySelector(".player-statique").textContent = statique;
        editingCard.querySelector(".player-pace").textContent = `PAC\n${pace}`;
        editingCard.querySelector(".player-shooting").textContent = `SHO\n${shooting}`;
        editingCard.querySelector(".player-passing").textContent = `PAS\n${passing}`;
        editingCard.querySelector(".player-dribbling").textContent = `DRI\n${dribbling}`;
        editingCard.querySelector(".player-defending").textContent = `DEF\n${defending}`;
        editingCard.querySelector(".player-physical").textContent = `PHY\n${physical}`;
  
        /////////////////////////// statique change /////////////////////////////////
        const newContainer = document.getElementById(statique);
        if (newContainer && newContainer !== editingCard.parentNode) {
            const existingCard = newContainer.querySelector('.player-card');
            if (existingCard) {
                changeContainer.appendChild(existingCard);
            }
  
            newContainer.appendChild(editingCard);
        }
    } else {
        const playerCard = document.createElement("div");
        playerCard.className = "bg-[url('badge_total_rush.webp')] h-full w-full bg-contain bg-center bg-no-repeat flex flex-col items-center mt-6 player-card";
        playerCard.setAttribute("data-unique-id", Date.now()); // Assign unique ID
        playerCard.innerHTML = `
            <div>
              <div class="flex flex-col items-center justify-between h-[20vh] mt-1">
                  <div class="flex h-full items-end justify-between"> 
                      <img src="${nationalityURL}" class="h-2 w-4 pl-2 player-nationality" alt=""> 
                      <img src="${photoURL}" class="w-10 player-photo" alt="">
                      <img src="${clubURL}" class="h-4 w-6 pr-3 player-club" alt="">                    
                  </div>  
                  <div class="flex text-[8px] mt-1">
                      <p class="text-white font-bold player-name">${playerName}</p>
                  </div>
                  <div class="flex flex-col items-center">
                      <div class="flex h-full w-[5vw] text-[5px] justify-between text-white font-semibold">
                          <p class="player-pace">PAC <br>${pace}</p>
                          <p class="player-shooting">SHO <br>${shooting}</p>
                          <p class="player-passing">PAS <br>${passing}</p>
                          <p class="player-dribbling">DRI <br>${dribbling}</p>
                          <p class="player-defending">DEF <br>${defending}</p>
                          <p class="player-physical">PHY <br>${physical}</p>
                      </div>
                      <div>
                          <p class="text-white font-semibold flex h-full w-[7vw] text-[10px] justify-center player-statique">${statique}</p>
                      </div>
                      <div class="flex gap-1 text-white text-[10px] justify-center mt- h-fit">
    <div>
        <p class="modify-button cursor-pointer">
            <!-- Modify icon (SVG) -->
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
  
        // Add event listeners to the new card
        addCardButtonListeners(playerCard);
  
        // Append the new card to the container with id "change"
        changeContainer.appendChild(playerCard);
    }
  
    // Hide the form and reset it
    form.classList.add("hidden");
    resetForm(); // Manually reset the form fields
    
    // Optionally, show a success message
    alert('Player added/updated successfully!');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const showFormBtn = document.getElementById("showFormButton");
    const form = document.getElementById("info");
    const addPlayerBtn = document.getElementById("addPlayerBtn");
    const closeBtn = document.getElementById("closeBtn");
    const changeContainer = document.getElementById("change");
  
    let editingCard = null;
  
    // Validation function
    function validateForm() {
        const inputs = form.querySelectorAll('input');
        let isValid = true;
        const errorMessages = [];
  
        inputs.forEach(input => input.classList.remove('border-red-500'));
  
        inputs.forEach(input => {
            const value = input.value.trim();
  
            if (value === '') {
                input.classList.add('border-red-500');
                errorMessages.push(`${input.previousElementSibling.textContent} is required`);
                isValid = false;
                return;
            }
  
            if (input.type === 'url') {
                const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                if (!urlPattern.test(value)) {
                    input.classList.add('border-red-500');
                    errorMessages.push(`Please enter a valid URL for ${input.previousElementSibling.textContent}`);
                    isValid = false;
                }
            }
  
            if (input.type === 'number') {
                const numValue = parseFloat(value);
                if (isNaN(numValue) || numValue < 1 || numValue > 100) {
                    input.classList.add('border-red-500');
                    errorMessages.push(`${input.previousElementSibling.textContent}entre 1-100`);
                    isValid = false;
                }
            }
  
            if (input.id === 'Name') {
                const textVRF = /^([a-zA-Z]{3,})\s?([a-zA-Z]{3,})$/;
                if (!textVRF.test(value)) {
                    input.classList.add('border-red-500');
                    errorMessages.push('Name must be at least 3 letters without symbols');
                    isValid = false;
                }
            }
        });
  
        const statiqueSelect = document.getElementById('statique');
        if (statiqueSelect.value === '') {
            statiqueSelect.classList.add('border-red-500');
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
        // form.reset();
        const errorContainer = document.getElementById('errorMessages');
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }
    };
  
    showFormBtn.addEventListener('click', () => {
        form.classList.remove("hidden");
        editingCard = null;
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
  
        const modifyBtn = cardElement.querySelector('.modify-button');
        if (modifyBtn) {
            modifyBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const playerCard = event.target.closest('.player-card');
                if (playerCard) {
                    const playerName = playerCard.querySelector(".player-name").textContent;
                    const photoURL = playerCard.querySelector(".player-photo").src;
                    const nationalityURL = playerCard.querySelector(".player-nationality").src;
                    const clubURL = playerCard.querySelector(".player-club").src;
                    const statique = playerCard.querySelector(".player-statique").textContent;
                    const pace = playerCard.querySelector(".player-pace").textContent.split('\n')[1];
                    const shooting = playerCard.querySelector(".player-shooting").textContent.split('\n')[1];
                    const passing = playerCard.querySelector(".player-passing").textContent.split('\n')[1];
                    const dribbling = playerCard.querySelector(".player-dribbling").textContent.split('\n')[1];
                    const defending = playerCard.querySelector(".player-defending").textContent.split('\n')[1];
                    const physical = playerCard.querySelector(".player-physical").textContent.split('\n')[1];
  
                    document.getElementById("Name").value = playerName;
                    document.getElementById("Photo").value = photoURL;
                    document.getElementById("Nationality").value = nationalityURL;
                    document.getElementById("club").value = clubURL;
                    document.getElementById("statique").value = statique;
                    document.getElementById("passing").value = passing;
                    document.getElementById("pace").value = pace;
                    document.getElementById("shooting").value = shooting;
                    document.getElementById("dribbling").value = dribbling;
                    document.getElementById("defending").value = defending;
                    document.getElementById("physical").value = physical;
  
                    form.classList.remove("hidden");
                    editingCard = playerCard;
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
                        const existingCard = destinationDiv.querySelector('.player-card');
                        if (existingCard) {
                            changeContainer.appendChild(existingCard);
                        }
                        destinationDiv.appendChild(playerCard);
                    } else {
                        alert(`No statique found for ID "${statiqueId}"`);
                    }
                }
            });
        }
    }
  
    addPlayerBtn.addEventListener('click', (event) => {
        event.preventDefault();
  
        if (!validateForm()) 
            return;
  
        const playerName = document.getElementById("Name").value;
        const photoURL = document.getElementById("Photo").value;
        const nationalityURL = document.getElementById("Nationality").value;
        const clubURL = document.getElementById("club").value;
        const statique = document.getElementById("statique").value;
        const passing = document.getElementById("passing").value;
        const pace = document.getElementById("pace").value;
        const shooting = document.getElementById("shooting").value;
        const dribbling = document.getElementById("dribbling").value;
        const defending = document.getElementById("defending").value;
        const physical = document.getElementById("physical").value;
  
        if (editingCard) {
            editingCard.querySelector(".player-name").textContent = playerName;
            editingCard.querySelector(".player-photo").src = photoURL;
            editingCard.querySelector(".player-nationality").src = nationalityURL;
            editingCard.querySelector(".player-club").src = clubURL;
            editingCard.querySelector(".player-statique").textContent = statique;
            editingCard.querySelector(".player-pace").textContent = `PAC\n${pace}`;
            editingCard.querySelector(".player-shooting").textContent = `SHO\n${shooting}`;
            editingCard.querySelector(".player-passing").textContent = `PAS\n${passing}`;
            editingCard.querySelector(".player-dribbling").textContent = `DRI\n${dribbling}`;
            editingCard.querySelector(".player-defending").textContent = `DEF\n${defending}`;
            editingCard.querySelector(".player-physical").textContent = `PHY\n${physical}`;
  
            const newContainer = document.getElementById(statique);
            if (newContainer && newContainer !== editingCard.parentNode) {
                const existingCard = newContainer.querySelector('.player-card');
                if (existingCard) {
                    changeContainer.appendChild(existingCard);
                }
                newContainer.appendChild(editingCard);
            }
        } else {
            const playerCard = document.createElement("div");
            playerCard.className = "bg-[url('images/cart-1.png')] h-full w-full bg-contain bg-center bg-no-repeat flex flex-col items-center mt-6 player-card";
            playerCard.innerHTML = `
                <div>
                  <div class="flex flex-col items-center justify-between h-[20vh] mt-1">
                      <div class="flex h-full items-end justify-between"> 
                          <img src="${nationalityURL}" class="h-2 w-4 pl-2 player-nationality" alt=""> 
                          <img src="${photoURL}" class="w-10 player-photo" alt="">
                          <img src="${clubURL}" class="h-4 w-6 pr-3 player-club" alt="">                    
                      </div>  
                      <div class="flex text-[8px] mt-1">
                          <p class="text-white font-bold player-name">${playerName}</p>
                      </div>
                      <div class="flex flex-col items-center">
                          <div class="flex h-full w-[5vw] text-[5px] justify-between text-white font-semibold">
                              <p class="player-pace">PAC <br>${pace}</p>
                              <p class="player-shooting">SHO <br>${shooting}</p>
                              <p class="player-passing">PAS <br>${passing}</p>
                              <p class="player-dribbling">DRI <br>${dribbling}</p>
                              <p class="player-defending">DEF <br>${defending}</p>
                              <p class="player-physical">PHY <br>${physical}</p>
                          </div>
                          <div>
                              <p class="text-white font-semibold flex h-full w-[7vw] text-[10px] justify-center player-statique">${statique}</p>
                          </div>
                          <div class="flex gap-1 text-white text-[10px] justify-center mt- h-fit">
                            <div>
                                <p class="modify-button cursor-pointer">
                                    <!-- Modify icon (SVG) -->
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