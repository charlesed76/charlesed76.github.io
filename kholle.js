document.addEventListener('DOMContentLoaded', function() {
    const kholleContainer = document.getElementById('kholleContainer');
    const addKholleBtn = document.getElementById('addKholleBtn');
    const saveKholleBtn = document.getElementById('saveKholleBtn');
    const viewKholleBtn = document.getElementById('viewKholleBtn');
    const returnBtn = document.getElementById('returnBtn');
    const cmtMarcheBtn = document.getElementById('cmtMarcheBtn');
    const cmtMarcheText = document.getElementById('cmtMarcheText');

    // Ajouter une kholle
    addKholleBtn.addEventListener('click', function() {
        const kholleDiv = document.createElement('div');
        kholleDiv.className = 'kholle';

        const dayLabel = document.createElement('label');
        dayLabel.textContent = 'Jour:';
        const dayInput = document.createElement('input');
        dayInput.type = 'text';
        dayInput.name = 'day';

        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Date:';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.name = 'date';

        const roomLabel = document.createElement('label');
        roomLabel.textContent = 'Salle:';
        const roomInput = document.createElement('input');
        roomInput.type = 'text';
        roomInput.name = 'room';

        const professorLabel = document.createElement('label');
        professorLabel.textContent = 'Professeur:';
        const professorInput = document.createElement('input');
        professorInput.type = 'text';
        professorInput.name = 'professor';

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
            const day = kholleDiv.querySelector('input[name="day"]').value;
            const date = kholleDiv.querySelector('input[name="date"]').value;
            const room = kholleDiv.querySelector('input[name="room"]').value;
            const professor = kholleDiv.querySelector('input[name="professor"]').value;

            const kholle = {
                day: day,
                date: date,
                room: room,
                professor: professor
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
            dayInput.name = 'day';
            dayInput.value = kholle.day;

            const dateLabel = document.createElement('label');
            dateLabel.textContent = 'Date:';
            const dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateInput.name = 'date';
            dateInput.value = kholle.date;

            const roomLabel = document.createElement('label');
            roomLabel.textContent = 'Salle:';
            const roomInput = document.createElement('input');
            roomInput.type = 'text';
            roomInput.name = 'room';
            roomInput.value = kholle.room;

            const professorLabel = document.createElement('label');
            professorLabel.textContent = 'Professeur:';
            const professorInput = document.createElement('input');
            professorInput.type = 'text';
            professorInput.name = 'professor';
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

    // Rediriger vers AffichageKholle.html au clic sur le bouton Voir les Kholles
    viewKholleBtn.addEventListener('click', function() {
        window.location.href = 'AffichageKholle.html';
    });

    // Rediriger vers modification.html au clic sur le bouton Retour
    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });

    // Afficher/Masquer le paragraphe Comment ça marche
    cmtMarcheBtn.addEventListener('click', function() {
        if (cmtMarcheText.style.display === 'none') {
            cmtMarcheText.style.display = 'block';
        } else {
            cmtMarcheText.style.display = 'none';
        }
    });
});
