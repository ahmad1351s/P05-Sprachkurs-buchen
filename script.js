// document.addEventListener("DOMContentLoaded", function () {
    // Formular Validierung und Daten Speicherung

    // Kursauswahl speichern und weiterleiten
    const kursForm = document.getElementById('kursForm');
    if (kursForm) {
        kursForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const kurs = document.getElementById('kurs').value;
            localStorage.setItem('kurs', kurs);
            console.log("form")
            window.location.href = 'Formular.html';
        });
    }

    // Datum und Zeit speichern und weiterleiten
    const zeitForm = document.getElementById('zeitForm');
    if (zeitForm) {
        zeitForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const tag = document.getElementById('tag').value;
            const zeit = document.getElementById('zeit').value;
            localStorage.setItem('tag', tag);
            localStorage.setItem('zeit', zeit);
            window.location.href = 'formular2.html';
        });
    }

    // Personalien speichern und weiterleiten
    const personalienForm = document.getElementById('personalienForm');
    if (personalienForm) {
        personalienForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const vorname = document.getElementById('vorname').value;
            const nachname = document.getElementById('nachname').value;
            const email = document.getElementById('email').value;
            localStorage.setItem('vorname', vorname);
            localStorage.setItem('nachname', nachname);
            localStorage.setItem('email', email);
            window.location.href = 'bestaetigung.html';
        });
    }

    // Buchungsdetails anzeigen
    const buchungsDetails = document.getElementById('buchungsDetails');
    if (buchungsDetails) {
        const kurs = localStorage.getItem('kurs');
        const tag = localStorage.getItem('tag');
        const zeit = localStorage.getItem('zeit');
        const vorname = localStorage.getItem('vorname');
        const nachname = localStorage.getItem('nachname');
        const email = localStorage.getItem('email');

        buchungsDetails.innerHTML = `
            <p>Sprachkurs: ${kurs}</p>
            <p>Tag: ${tag}</p>
            <p>Zeit: ${zeit}</p>
            <p>Vorname: ${vorname}</p>
            <p>Nachname: ${nachname}</p>
            <p>E-Mail: ${email}</p>
        `;
    }
// });




    // hole jedes formularfeld und lies den Wert davon aus (...getElementById(), .value)
     
    
     
    // speichere die Werte jeweils in einer Variable

    // logge die Variable in der Konsole (console.log())

    // output: deutsch, 11.07.24 (datum), 18:00 (zeit), Peter, Muster, peter@gmail.com


   






