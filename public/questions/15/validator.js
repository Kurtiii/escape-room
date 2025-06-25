document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allAnswersCorrect = true;

        // Correct answers based on the provided image
        const correctAngles = {
            'angle_alpha_a': 78,
            'angle_beta_a': 68,
            'angle_alpha_b': 60,
            'angle_beta_b': 110,
            'angle_gamma_b': 60,
            'angle_delta_b': 70,
            'angle_epsilon_b': 50,
            'angle_zeta_b': 120
        };

        // Collect all input elements for angles
        const angleInputIds = [
            'angle_alpha_a', 'angle_beta_a',
            'angle_alpha_b', 'angle_beta_b', 'angle_gamma_b',
            'angle_delta_b', 'angle_epsilon_b', 'angle_zeta_b'
        ];

        angleInputIds.forEach(id => {
            const inputElement = document.getElementById(id);
            const userAnswer = parseFloat(inputElement.value);
            const correctAnswer = correctAngles[id];

            // Reset borders
            inputElement.classList.remove('border-success', 'border-error');
            inputElement.classList.add('input-bordered'); // Ensure default border is present

            // Validate input
            if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
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
