document.addEventListener('DOMContentLoaded', function() {
    const message = localStorage.getItem('importantMessage');
    document.getElementById('displayMessage').innerHTML = message || 'Aucun message enregistré';

    document.getElementById('returnBtn').addEventListener('click', function() {
        window.location.href = 'message_imporant.html';
    });
});
