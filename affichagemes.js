document.addEventListener('DOMContentLoaded', function() {
    const message = localStorage.getItem('lastImportantMessage');

    if (message) {
        document.getElementById('displayMessage').innerHTML = message.replace(/<br>/g, '\n').split('\n').join('<br>');
    } else {
        document.getElementById('displayMessage').innerHTML = 'Aucun message enregistré';
    }

    document.getElementById('returnBtn').addEventListener('click', function() {
        window.location.href = 'message_imporant.html';
    });
});
