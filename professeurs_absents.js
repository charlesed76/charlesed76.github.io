document.addEventListener('DOMContentLoaded', function() {
    const profAbsentContainer = document.getElementById('profAbsentContainer');
    const addProfAbsentBtn = document.getElementById('addProfAbsentBtn');
    const saveProfAbsentBtn = document.getElementById('saveProfAbsentBtn');
    const returnBtn = document.getElementById('returnBtn');

    // Ajouter un professeur absent
    addProfAbsentBtn.addEventListener('click', function() {
        const profDiv = document.createElement('div');
        profDiv.className = 'prof-absent';

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nom du professeur:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'name'; // Ajout du nom pour une identification unique

        const startDateLabel = document.createElement('label');
        startDateLabel.textContent = 'Début de l\'absence:';
        const startDateInput = document.createElement('input');
        startDateInput.type = 'date';
        startDateInput.name = 'startDate'; // Ajout du nom pour une identification unique

        const endDateLabel = document.createElement('label');
        endDateLabel.textContent = 'Fin de l\'absence:';
        const endDateInput = document.createElement('input');
        endDateInput.type = 'date';
        endDateInput.name = 'endDate'; // Ajout du nom pour une identification unique

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Supprimer';
        removeButton.addEventListener('click', function() {
            profAbsentContainer.removeChild(profDiv);
            saveProfesseursAbsents(); // Sauvegarder après la suppression
        });

        profDiv.append(nameLabel, nameInput, startDateLabel, startDateInput, endDateLabel, endDateInput, removeButton);
        profAbsentContainer.appendChild(profDiv);
    });

    // Sauvegarder les professeurs absents
    saveProfAbsentBtn.addEventListener('click', saveProfesseursAbsents);

    function saveProfesseursAbsents() {
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
    }

    function loadProfesseursAbsents() {
        const profsAbsents = JSON.parse(localStorage.getItem('profsAbsents') || '[]');
        profsAbsents.forEach(profAbsent => {
            const profDiv = document.createElement('div');
            profDiv.className = 'prof-absent';

            const nameLabel = document.createElement('label');
            nameLabel.textContent = 'Nom du professeur:';
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name'; // Ajout du nom pour une identification unique
            nameInput.value = profAbsent.name;

            const startDateLabel = document.createElement('label');
            startDateLabel.textContent = 'Début de l\'absence:';
            const startDateInput = document.createElement('input');
            startDateInput.type = 'text';
            startDateInput.name = 'startDate'; // Ajout du nom pour une identification unique
            startDateInput.value = profAbsent.startDate;

            const endDateLabel = document.createElement('label');
            endDateLabel.textContent = 'Fin de l\'absence:';
            const endDateInput = document.createElement('input');
            endDateInput.type = 'text';
            endDateInput.name = 'endDate'; // Ajout du nom pour une identification unique
            endDateInput.value = profAbsent.endDate;

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-button';
            removeButton.textContent = 'Supprimer';
            removeButton.addEventListener('click', function() {
                profAbsentContainer.removeChild(profDiv);
                saveProfesseursAbsents(); // Sauvegarder après la suppression
            });

            profDiv.append(nameLabel, nameInput, startDateLabel, startDateInput, endDateLabel, endDateInput, removeButton);
            profAbsentContainer.appendChild(profDiv);
        });
    }

    loadProfesseursAbsents();

    // Rediriger vers modification.html au clic sur le bouton Retour
    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });
});
