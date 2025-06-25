document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let isCorrect = false;

        // Calculate the correct answer for 4x - 7 = 21
        // 4x = 21 + 7
        // 4x = 28
        // x = 28 / 4
        // x = 7
        const correctSolution = '7';

        const solutionRadios = document.querySelectorAll('input[name="solve_x"]');

        // Reset borders
        document.querySelectorAll('#equation-solution-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        solutionRadios.forEach(radio => {
            if (radio.checked) {
                const selectedValue = radio.value;
                const parentCard = radio.closest('.card');

                if (selectedValue === correctSolution) {
                    isCorrect = true;
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    isCorrect = false;
                    parentCard.classList.add('border-error', 'border-4');
                }
            }
        });


        // --- Overall validation result ---
        if (isCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
