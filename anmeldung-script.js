const languageForm = document.getElementById('anmeldung');



languageForm.addEventListener('submit', function (event) {
    // verhindert neuladen des browsers (seite)
    event.preventDefault();


    // lese alle daten aus dem formular aus
    const vorname = document.getElementById('vorname').value;
    const nachname = document.getElementById('nachname').value;
    const email = document.getElementById('email').value;
    const kurs = document.getElementById('kurs').value;
    const date = document.getElementById('tag').value;
    const time = document.getElementById('zeit').value;
    

    console.log(vorname);
    console.log(nachname);
    console.log(email);
    console.log(kurs);
    console.log(date);
    console.log(time);
    languageForm.submit();
});   
