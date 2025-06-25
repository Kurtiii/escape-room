document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allWrongAnswersSelected = true;
        let anyCorrectAnswerWronglySelected = false;

        // Correct properties of the function f_a(b) = 0.5 * (b - 0.75) - a:
        // - Stretched by 0.5 (vertical stretch/compression) -> A is TRUE
        // - Shifted by -a in y-direction -> B is TRUE
        // - Shifted by +0.75 in b-direction (to the right) -> C is FALSE

        // Therefore, we need to select all FALSE statements.
        // The only FALSE statement is C.
        const falseStatements = ['C']; // These are the options that should be *selected*

        const checkboxes = document.querySelectorAll('input[name="transformation_option"]');

        // Reset borders
        document.querySelectorAll('#transformation-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        checkboxes.forEach(checkbox => {
            const parentCard = checkbox.closest('.card');
            const optionValue = checkbox.value;

            const shouldBeSelected = falseStatements.includes(optionValue);

            if (checkbox.checked) {
                if (shouldBeSelected) {
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    parentCard.classList.add('border-error', 'border-4');
                    anyCorrectAnswerWronglySelected = true; // User selected a true statement (A or B)
                }
            } else { // Checkbox is NOT checked
                if (shouldBeSelected) {
                    // This statement should have been selected but wasn't
                    parentCard.classList.add('border-error', 'border-4');
                    allWrongAnswersSelected = false;
                } else {
                    // This statement should NOT have been selected, and it wasn't
                    // This is correct behavior, no specific border needed here, or green if desired for explicit feedback
                    // parentCard.classList.add('border-success', 'border-4'); // Optional: show green for correctly unselected
                }
            }
        });

        // Final check: Did the user select *only* the false statements?
        if (allWrongAnswersSelected && !anyCorrectAnswerWronglySelected) {
            // Also ensure all correct "false statements" were checked
            const allRequiredFalseStatementsChecked = Array.from(checkboxes).filter(cb => falseStatements.includes(cb.value)).every(cb => cb.checked);
            if(allRequiredFalseStatementsChecked) {
                cardSuccess.classList.remove('hidden');
                cardError.classList.add('hidden');
            } else {
                cardError.classList.remove('hidden');
                cardSuccess.classList.add('hidden');
            }

        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
