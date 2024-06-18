document.addEventListener('DOMContentLoaded', function() {
    const infoTextarea = document.getElementById('info');
    const saveMessageBtn = document.getElementById('saveMessageBtn');
    const viewMessagesBtn = document.getElementById('viewMessagesBtn');
    const returnBtn = document.getElementById('returnBtn');
    const cmtMarcheBtn = document.getElementById('cmtMarcheBtn');
    const cmtMarcheText = document.getElementById('cmtMarcheText');

    // Charger le message important et ses dimensions au chargement de la page
    function loadMessage() {
        const storedMessage = localStorage.getItem('importantMessage');
        const storedWidth = localStorage.getItem('importantMessageWidth');
        const storedHeight = localStorage.getItem('importantMessageHeight');

        if (storedMessage) {
            infoTextarea.value = storedMessage.replace(/<br>/g, '\n');
        }

        if (storedWidth) {
            infoTextarea.style.width = storedWidth;
        }

        if (storedHeight) {
            infoTextarea.style.height = storedHeight;
        }
    }

    // Sauvegarder le message important et ses dimensions
    saveMessageBtn.addEventListener('click', function() {
        const message = infoTextarea.value;
        const width = infoTextarea.style.width;
        const height = infoTextarea.style.height;

        localStorage.setItem('importantMessage', message.replace(/\n/g, '<br>'));
        localStorage.setItem('importantMessageWidth', width);
        localStorage.setItem('importantMessageHeight', height);

        alert("Message et dimensions enregistrés avec succès!");
    });

    loadMessage();

    // Rediriger vers affichagemes.html au clic sur le bouton Voir les messages importants
    viewMessagesBtn.addEventListener('click', function() {
        window.location.href = 'affichagemes.html';
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
