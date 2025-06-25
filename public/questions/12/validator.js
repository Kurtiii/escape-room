document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');
    const averageInput = document.getElementById('average_input');

    btnValidate.addEventListener('click', () => {
        let isCorrect = false;

        // Calculate the correct average
        const numbers = [14, 2, -10, 8, 6];
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const count = numbers.length;
        const correctAverage = sum / count; // 20 / 5 = 4

        const userAnswer = parseFloat(averageInput.value);

        // Reset border
        averageInput.classList.remove('border-success', 'border-error');
        averageInput.classList.add('border-bordered'); // Ensure default border is present

        // Validate the user's input
        if (!isNaN(userAnswer) && userAnswer === correctAverage) {
            isCorrect = true;
            averageInput.classList.add('border-success');
        } else {
            isCorrect = false;
            averageInput.classList.add('border-error');
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
