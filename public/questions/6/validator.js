document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allAnswersCorrect = true;

        const correctAnswers = {
            'holzverbrauch': 'variable',
            'fremdstromverbrauch': 'variable', // Assuming total consumption varies with production
            'kfz_steuer': 'fixed',
            'lackverbrauch': 'variable',
            'benzinverbrauch': 'variable',
            'blech_werkbank': 'fixed', // For own use, not directly tied to sales volume
            'abschreibung_werkbank': 'fixed', // Time-based depreciation
            'scharniere_schloesser': 'variable',
            'miete_verwaltungsraeume': 'fixed',
            'lohnzahlung_facharbeiter': 'variable' // Often considered variable if tied to production output or hours
        };

        // Get all radio button groups
        const radioGroups = [
            'holzverbrauch', 'fremdstromverbrauch', 'kfz_steuer', 'lackverbrauch',
            'benzinverbrauch', 'blech_werkbank', 'abschreibung_werkbank',
            'scharniere_schloesser', 'miete_verwaltungsraeume', 'lohnzahlung_facharbeiter'
        ];

        radioGroups.forEach(groupName => {
            const radios = document.querySelectorAll(`input[name="${groupName}"]`);
            let userAnswer = null;
            let rowCorrect = false;

            radios.forEach(radio => {
                const parentTd = radio.closest('td');
                parentTd.classList.remove('border-success', 'border-error', 'border-4'); // Clear previous borders

                if (radio.checked) {
                    userAnswer = radio.value;
                    if (userAnswer === correctAnswers[groupName]) {
                        parentTd.classList.add('border-success', 'border-4');
                        rowCorrect = true;
                    } else {
                        parentTd.classList.add('border-error', 'border-4');
                        allAnswersCorrect = false;
                    }
                }
            });

            // If no answer was selected for a group or the selected was wrong,
            // highlight the correct one
            if (!rowCorrect && userAnswer !== null) { // If an answer was given but it was wrong
                document.querySelector(`input[name="${groupName}"][value="${correctAnswers[groupName]}"]`).closest('td').classList.add('border-success', 'border-4');
            } else if (userAnswer === null) { // If no answer was selected
                allAnswersCorrect = false; // Mark overall as incorrect if any question is unanswered
            }
        });


        // --- Overall validation result ---
        if (allAnswersCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
