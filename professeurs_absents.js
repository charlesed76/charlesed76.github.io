document.addEventListener('DOMContentLoaded', function() {
    const profAbsentContainer = document.getElementById('profAbsentContainer');
    const addProfAbsentBtn = document.getElementById('addProfAbsentBtn');
    const saveProfAbsentBtn = document.getElementById('saveProfAbsentBtn');
    const returnBtn = document.getElementById('returnBtn');
    const viewProfAbsBtn = document.getElementById('viewProfAbsBtn'); // Nouveau bouton

    addProfAbsentBtn.addEventListener('click', function() {
        const profDiv = document.createElement('div');
        profDiv.className = 'prof-absent';

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nom du professeur:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'name'; 

        const startDateLabel = document.createElement('label');
        startDateLabel.textContent = 'Début de l\'absence:';
        const startDateInput = document.createElement('input');
        startDateInput.type = 'text';
        startDateInput.name = 'startDate'; 

        const endDateLabel = document.createElement('label');
        endDateLabel.textContent = 'Fin de l\'absence:';
        const endDateInput = document.createElement('input');
        endDateInput.type = 'text';
        endDateInput.name = 'endDate'; 

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Supprimer';
        removeButton.addEventListener('click', function() {
            profAbsentContainer.removeChild(profDiv);
            saveProfesseursAbsents(); 
        });

        profDiv.append(nameLabel, nameInput, startDateLabel, startDateInput, endDateLabel, endDateInput, removeButton);
        profAbsentContainer.appendChild(profDiv);
    });

    saveProfAbsentBtn.addEventListener('click', saveProfesseursAbsents);

    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });

    // Rediriger vers Affichageprofabs.html au clic sur le bouton "Voir les Professeurs Absents"
    viewProfAbsBtn.addEventListener('click', function() {
        window.location.href = 'AffichageProfabs.html';
    });
});

// Fonction pour sauvegarder les professeurs absents dans le stockage local
function saveProfesseursAbsents() {
    const profAbsentContainer = document.getElementById('profAbsentContainer');
    const profsAbsents = [];
    profAbsentContainer.querySelectorAll('.prof-absent').forEach(profDiv => {
        const name = profDiv.querySelector('input[name="name"]').value;
        const startDate = profDiv.querySelector('input[name="startDate"]').value;
        const endDate = profDiv.querySelector('input[name="endDate"]').value;

        const profAbsent = {
            name: name,
            startDate: startDate,
            endDate: endDate
        };
        profsAbsents.push(profAbsent);
    });
    localStorage.setItem('profsAbsents', JSON.stringify(profsAbsents));

    // Charger les professeurs absents sur la page Affichageprofabs.html
    loadProfesseursAbsentsOnDisplayPage(profsAbsents);
}

// Fonction pour charger les professeurs absents sur la page Affichageprofabs.html
function loadProfesseursAbsentsOnDisplayPage(profsAbsents) {
    const profAbsDisplayContainer = document.getElementById('profAbsDisplayContainer');
    profAbsDisplayContainer.innerHTML = ''; // Efface le contenu précédent

    profsAbsents.forEach(profAbsent => {
        const profAbsentDiv = document.createElement('div');
        profAbsentDiv.className = 'prof-absent';

        const nomSpan = document.createElement('span');
        nomSpan.textContent = `Nom: ${profAbsent.name}`;

        const dateSpan = document.createElement('span');
        dateSpan.textContent = `Date d'absence: ${profAbsent.startDate} - ${profAbsent.endDate}`;

        profAbsentDiv.append(nomSpan, dateSpan);
        profAbsDisplayContainer.appendChild(profAbsentDiv);
    });
}

// Charger les professeurs absents lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const profsAbsents = JSON.parse(localStorage.getItem('profsAbsents') || '[]');
    loadProfesseursAbsentsOnDisplayPage(profsAbsents);
});
