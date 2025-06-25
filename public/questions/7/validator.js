document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allAnswersCorrect = true;

        // Correct answers based on the image and your clarification (1, 2, or 3)
        const correctAnswers = {
            'a': '1',
            'b': '2',
            'c': '3',
            'd': '3',
            'e': '2'
        };

        const formulaSelects = document.querySelectorAll('select[data-formula]');

        formulaSelects.forEach(selectElement => {
            const formulaKey = selectElement.dataset.formula;
            const userAnswer = selectElement.value;
            const correctValue = correctAnswers[formulaKey];

            // Reset classes
            selectElement.classList.remove('select-success', 'select-error');
            selectElement.classList.add('select-bordered'); // Ensure default border is present

            if (userAnswer === correctValue) {
                selectElement.classList.add('select-success');
            } else {
                selectElement.classList.add('select-error');
                allAnswersCorrect = false;
            }

            // If an option wasn't selected, mark as incorrect
            if (userAnswer === "") {
                allAnswersCorrect = false;
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
