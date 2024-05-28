document.addEventListener('DOMContentLoaded', function() {
    const infoTextarea = document.getElementById('info');
    const saveMessageBtn = document.getElementById('saveMessageBtn');
    const returnBtn = document.getElementById('returnBtn');

    // Sauvegarder le message important
    saveMessageBtn.addEventListener('click', function() {
        const message = infoTextarea.value;
        localStorage.setItem('importantMessage', message);
    });

    // Charger le message important au chargement de la page
    function loadMessage() {
        const storedMessage = localStorage.getItem('importantMessage');
        if (storedMessage) {
            infoTextarea.value = storedMessage;
        }
    }

    loadMessage();

    // Rediriger vers modification.html au clic sur le bouton Retour
    returnBtn.addEventListener('click', function() {
        window.location.href = 'modification.html';
    });
});