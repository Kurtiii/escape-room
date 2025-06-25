document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let isCorrect = false;
        const correctNonExistentFunction = 'steigungsfunktion'; // Based on the highlighted answer

        const functionRadios = document.querySelectorAll('input[name="non_existent_function"]');

        // Reset borders
        document.querySelectorAll('#function-selection-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        functionRadios.forEach(radio => {
            if (radio.checked) {
                const selectedValue = radio.value;
                const parentCard = radio.closest('.card');

                if (selectedValue === correctNonExistentFunction) {
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
