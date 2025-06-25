document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allAnswersCorrect = true;

        // Correct answers from the image
        // Rounding for float comparison is important due to precision issues.
        const correctAnswers = {
            'prob_a': 30.00,  // From image
            'prob_b': 6.67,   // From image
            'prob_c': 33.33,  // From image
            'prob_d': 40.00   // From image
        };

        const inputIds = ['prob_a', 'prob_b', 'prob_c', 'prob_d'];

        inputIds.forEach(id => {
            const inputElement = document.getElementById(id);
            const userAnswer = parseFloat(inputElement.value);
            const correctAnswer = correctAnswers[id];

            // Reset borders
            inputElement.classList.remove('border-success', 'border-error');
            inputElement.classList.add('border-bordered'); // Ensure default border is present

            // Check if input is a valid number and compare
            // Using a small tolerance for floating point comparisons
            const tolerance = 0.01;
            if (!isNaN(userAnswer) && Math.abs(userAnswer - correctAnswer) < tolerance) {
                inputElement.classList.add('border-success');
            } else {
                inputElement.classList.add('border-error');
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
