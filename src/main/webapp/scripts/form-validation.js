(() => {
    'use strict'

    // Caută toate formularele care au clasa .needs-validation
    const forms = document.querySelectorAll('.needs-validation')

    // Pentru fiecare formular, la submit verifică dacă e valid
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()   // oprește trimiterea formularului
                event.stopPropagation()
            }
            form.classList.add('was-validated')  // afișează stilurile roșu/verde
        }, false)
    })
})()