document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    const inputX = document.getElementById('input_x');
    const inputY = document.getElementById('input_y');
    const inputZ = document.getElementById('input_z');

    btnValidate.addEventListener('click', () => {
        let allInputsCorrect = true;

        // Correct answers based on the provided solution in the image
        const correctX = -1;
        const correctY = 2;
        const correctZ = 4;

        // Function to validate a single input field
        function validateInputField(inputElement, correctAnswer) {
            inputElement.classList.remove('border-success', 'border-error');
            inputElement.classList.add('border-bordered'); // Ensure default border is present

            const userAnswer = parseFloat(inputElement.value);

            if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
                inputElement.classList.add('border-success');
                return true;
            } else {
                inputElement.classList.add('border-error');
                return false;
            }
        }

        // Validate each input field individually
        const isXCorrect = validateInputField(inputX, correctX);
        const isYCorrect = validateInputField(inputY, correctY);
        const isZCorrect = validateInputField(inputZ, correctZ);

        // Determine overall correctness
        allInputsCorrect = isXCorrect && isYCorrect && isZCorrect;

        // --- Overall validation result ---
        if (allInputsCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
