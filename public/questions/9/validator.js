document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allAnswersCorrect = true;

        const correctMappings = {
            'A': '4', // f'(x) = 0 -> Notwendige Bedingung Extrema
            'B': '5', // f'''(x) ≠ 0 -> Hinreichende Bedingung Wendep. (Third derivative test)
            'C': '1', // f''(x) ≠ 0 -> Hinreichende Bedingung Extrema (Second derivative test)
            'D': '2', // f(x) -> y-Koordinate (Original function to find y-coordinate of a point)
            // E) f'(x) ≠ 0 is the extra function that doesn't have a direct match in the given steps.
            'F': '3'  // f''(x) = 0 -> Notwendige Bedingung Wendep.
        };

        const functionSelects = document.querySelectorAll('select[data-function]');
        let usedSteps = new Set(); // To track if any step is used more than once

        // First pass: Check for correctness and valid selections
        functionSelects.forEach(selectElement => {
            const functionKey = selectElement.dataset.function;
            const userAnswer = selectElement.value;
            const correctValue = correctMappings[functionKey];

            // Reset classes
            selectElement.classList.remove('select-success', 'select-error');
            selectElement.classList.add('select-bordered'); // Ensure default border is present

            // Check if an option was selected
            if (userAnswer === "" && functionKey !== 'E') {
                allAnswersCorrect = false;
                selectElement.classList.add('select-error');
                return; // Skip further checks for this select if no answer is given
            }

            // Check if the answer is correct based on the predefined mapping
            if (correctValue && userAnswer === correctValue) {
                selectElement.classList.add('select-success');
                usedSteps.add(userAnswer);
            } else if (functionKey === 'E' && userAnswer === "") {
                // 'E' is the unused function, so an empty selection is technically correct for it
                // We handle this case by not marking it as an error immediately,
                // but rely on the `allAnswersCorrect` flag from other selections.
                selectElement.classList.add('select-bordered'); // Keep neutral
            }
            else {
                selectElement.classList.add('select-error');
                allAnswersCorrect = false;
            }
        });

        // Second pass: Check for duplicate answers
        const selectedValues = Array.from(functionSelects).map(select => select.value).filter(value => value !== "");
        const uniqueSelectedValues = new Set(selectedValues);

        if (selectedValues.length !== uniqueSelectedValues.size) {
            allAnswersCorrect = false; // More than one function assigned to the same step
            // This would require more complex highlighting, e.g., highlighting all duplicates red.
            // For now, it just affects the overall success/error card.
        }


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
