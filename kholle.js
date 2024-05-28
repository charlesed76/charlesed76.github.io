// kholles.js
document.addEventListener('DOMContentLoaded', function() {
    const kholleContainer = document.getElementById('kholleContainer');
    const addKholleBtn = document.getElementById('addKholleBtn');
    const saveKholleBtn = document.getElementById('saveKholleBtn');
    const returnBtn = document.getElementById('returnBtn');

    // Ajouter une kholle
    addKholleBtn.addEventListener('click', function() {
        const kholleDiv = document.createElement('div');
        kholleDiv.className = 'kholle';

        const dayLabel = document.createElement('label');
        dayLabel.textContent = 'Jour:';
        const dayInput = document.createElement('input');
        dayInput.type = 'text';

        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Date:';
        const dateInput = document.createElement('input');
        dateInput.type = 'text';

        const roomLabel = document.createElement('label');
        roomLabel.textContent = 'Salle:';
        const roomInput = document.createElement('input');
        roomInput.type = 'text';

        const professorLabel = document.createElement('label');
        professorLabel.textContent = 'Professeur:';
        const professorInput = document.createElement('input');
        professorInput.type = 'text';

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Supprimer la Kholle';
        removeButton.addEventListener('click', function() {
            kholleContainer.removeChild(kholleDiv);
            saveKholles(); // Sauvegarder après la suppression
        });

        kholleDiv.append(dayLabel, dayInput, dateLabel, dateInput, roomLabel, roomInput, professorLabel, professorInput, removeButton);
        kholleContainer.appendChild(kholleDiv);
    });

    // Sauvegarder les kholles
    saveKholleBtn.addEventListener('click', saveKholles);

    function saveKholles() {
        const kholles = [];
        kholleContainer.querySelectorAll('.kholle').forEach(kholleDiv => {
            const kholle = {
                day: kholleDiv.querySelector('input[type="text"]').value,
                date: kholleDiv.querySelector('input[type="text"]').value,
                room: kholleDiv.querySelector('input[type="text"]').value,
                professor: kholleDiv.querySelector('input[type="text"]').value
            };
            kholles.push(kholle);
        });
        localStorage.setItem('kholles', JSON.stringify(kholles));
    }

    function loadKholles() {
        const kholles = JSON.parse(localStorage.getItem('kholles') || '[]');
        kholles.forEach(kholle => {
            const kholleDiv = document.createElement('div');
            kholleDiv.className = 'kholle';

            const dayLabel = document.createElement('label');
            dayLabel.textContent = 'Jour:';
            const dayInput = document.createElement('input');
            dayInput.type = 'text';
            dayInput.value = kholle.day;

            const dateLabel = document.createElement('label');
            dateLabel.textContent = 'Date:';
            const dateInput = document.createElement('input');
            dateInput.type = 'text';
            dateInput.value = kholle.date;

            const roomLabel = document.createElement('label');
            roomLabel.textContent = 'Salle:';
            const roomInput = document.createElement('input');
            roomInput.type = 'text';
            roomInput.value = kholle.room;

            const professorLabel = document.createElement('label');
            professorLabel.textContent = 'Professeur:';
            const professorInput = document.createElement('input');
            professorInput.type = 'text';
            professorInput.value = kholle.professor;

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-button';
            removeButton.textContent = 'Supprimer la Kholle';
            removeButton.addEventListener('click', function() {
                kholleContainer.removeChild(kholleDiv);
                saveKholles(); // Sauvegarder après la suppression
            });

            kholleDiv.append(dayLabel, dayInput, dateLabel, dateInput, roomLabel, roomInput, professorLabel, professorInput, removeButton);
            kholleContainer.appendChild(kholleDiv);
        });
    }

    loadKholles();

    // Rediriger vers modification.html au clic sur le bouton Retour
    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });
});
