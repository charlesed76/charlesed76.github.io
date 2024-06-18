document.addEventListener('DOMContentLoaded', function() {
    const message = localStorage.getItem('importantMessage');

    if (message) {
        document.getElementById('displayMessage').innerHTML = message;
    } else {
        document.getElementById('displayMessage').innerHTML = 'Aucun message enregistré';
    }

    document.getElementById('returnBtn').addEventListener('click', function() {
        window.location.href = 'message_important.html';
    });
});
