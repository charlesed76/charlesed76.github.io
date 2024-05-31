document.addEventListener('DOMContentLoaded', function() {
    const kholleDisplayContainer = document.getElementById('kholleDisplayContainer');

    function loadKholles() {
        const kholles = JSON.parse(localStorage.getItem('kholles') || '[]');
        kholles.forEach(kholle => {
            const kholleDiv = document.createElement('div');
            kholleDiv.className = 'kholle';

            const daySpan = document.createElement('span');
            daySpan.textContent = `Jour: ${kholle.day}`;

            const dateSpan = document.createElement('span');
            dateSpan.textContent = `Date: ${kholle.date}`;

            const roomSpan = document.createElement('span');
            roomSpan.textContent = `Salle: ${kholle.room}`;

            const professorSpan = document.createElement('span');
            professorSpan.textContent = `Professeur: ${kholle.professor}`;

            kholleDiv.append(daySpan, dateSpan, roomSpan, professorSpan);
            kholleDisplayContainer.appendChild(kholleDiv);
        });
    }

    loadKholles();
});
