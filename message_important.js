document.addEventListener('DOMContentLoaded', function() {
    const infoTextarea = document.getElementById('info');
    const saveMessageBtn = document.getElementById('saveMessageBtn');
    const viewMessagesBtn = document.getElementById('viewMessagesBtn');
    const returnBtn = document.getElementById('returnBtn');

    // Sauvegarder le message important
    saveMessageBtn.addEventListener('click', function() {
        let message = infoTextarea.value;
        message = message.replace(/\n/g, '<br>');
        localStorage.setItem('importantMessage', message);
    });

    // Charger le message important au chargement de la page
    function loadMessage() {
        let storedMessage = localStorage.getItem('importantMessage');
        if (storedMessage) {
            storedMessage = storedMessage.replace(/<br>/g, '\n');
            infoTextarea.value = storedMessage;
        }
    }

    loadMessage();

    // Rediriger vers modification.html au clic sur le bouton Retour
    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });

    // Rediriger vers affichaemes.html au clic sur le bouton Voir les messages importants
    viewMessagesBtn.addEventListener('click', function() {
        window.location.href = 'affichagemes.html';
    });
});
