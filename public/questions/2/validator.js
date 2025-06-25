document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');
    const answerOptionsDiv = document.getElementById('answer-options');

    btnValidate.addEventListener('click', () => {
        const radios = document.querySelectorAll('input[name="total_cost"]');
        let selectedValue = null;
        let isCorrect = false;

        // Reset borders
        document.querySelectorAll('#answer-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        radios.forEach(radio => {
            if (radio.checked) {
                selectedValue = radio.value;
                const parentLabel = radio.closest('label');
                const parentCard = radio.closest('.card');

                // Correct answer is 43150
                if (selectedValue === '43150') {
                    isCorrect = true;
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    isCorrect = false;
                    parentCard.classList.add('border-error', 'border-4');
                }
            }
        });

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
