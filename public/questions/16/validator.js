document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');
    const riddleAnswerInput = document.getElementById('riddle_answer_input');

    btnValidate.addEventListener('click', () => {
        let isCorrect = false;

        // Calculate the correct answer based on the provided logic in the image
        // Hund (Dog) + Hund (Dog) = 68  => Hund = 34
        // Katze (Cat) + Hund (Dog) = 59 => Katze + 34 = 59 => Katze = 25
        // Katze (Cat) - Hase (Rabbit) = 16 => 25 - Hase = 16 => Hase = 9
        // Final calculation: Hund (Dog) + Hase (Rabbit) * Katze (Cat)
        // 34 + 9 * 25 = 34 + 225 = 259
        const correctRiddleAnswer = 259; //

        const userAnswer = parseFloat(riddleAnswerInput.value);

        // Reset border
        riddleAnswerInput.classList.remove('border-success', 'border-error');
        riddleAnswerInput.classList.add('input-bordered'); // Ensure default border is present

        // Validate the user's input
        if (!isNaN(userAnswer) && userAnswer === correctRiddleAnswer) {
            isCorrect = true;
            riddleAnswerInput.classList.add('border-success');
        } else {
            isCorrect = false;
            riddleAnswerInput.classList.add('border-error');
        }

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
