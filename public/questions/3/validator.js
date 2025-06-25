document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        let allInputsCorrect = true;
        let isSetSelectionCorrect = false;

        // --- Logic for the table inputs ---
        const basis_p = 20.00;
        const basis_kv = 12.00;
        const basis_x = 800;

        const profi_p = 35.00;
        const profi_kv = 19.00;
        const profi_x = 400;

        // Calculate correct values
        const correct_db_basis = basis_p - basis_kv; // 8.00
        const correct_total_db_basis = correct_db_basis * basis_x; // 6400

        const correct_db_profi = profi_p - profi_kv; // 16.00
        const correct_total_db_profi = correct_db_profi * profi_x; // 6400

        const correctBestSet = (correct_total_db_profi > correct_total_db_basis) ? 'profi' : 'basis';
        // In this case, both are 6400. The solution says "Profi hat einen besseren Deckungsbeitrag",
        // implying a tie-breaker or a specific interpretation where Profi is preferred due to same DB with less units.
        // We will stick to the provided solution's implied answer: "profi" if DBs are equal or if profi is greater.

        // Validate "Set Basis" inputs
        const input_db_basis = parseFloat(document.querySelector('input[data-product="basis"][data-type="db"]').value);
        const input_total_db_basis = parseFloat(document.querySelector('input[data-product="basis"][data-type="total-db"]').value);

        if (input_db_basis === correct_db_basis) {
            document.querySelector('input[data-product="basis"][data-type="db"]').classList.add('border-success');
            document.querySelector('input[data-product="basis"][data-type="db"]').classList.remove('border-error');
        } else {
            document.querySelector('input[data-product="basis"][data-type="db"]').classList.add('border-error');
            document.querySelector('input[data-product="basis"][data-type="db"]').classList.remove('border-success');
            allInputsCorrect = false;
        }

        if (input_total_db_basis === correct_total_db_basis) {
            document.querySelector('input[data-product="basis"][data-type="total-db"]').classList.add('border-success');
            document.querySelector('input[data-product="basis"][data-type="total-db"]').classList.remove('border-error');
        } else {
            document.querySelector('input[data-product="basis"][data-type="total-db"]').classList.add('border-error');
            document.querySelector('input[data-product="basis"][data-type="total-db"]').classList.remove('border-success');
            allInputsCorrect = false;
        }

        // Validate "Set Profi" inputs
        const input_db_profi = parseFloat(document.querySelector('input[data-product="profi"][data-type="db"]').value);
        const input_total_db_profi = parseFloat(document.querySelector('input[data-product="profi"][data-type="total-db"]').value);

        if (input_db_profi === correct_db_profi) {
            document.querySelector('input[data-product="profi"][data-type="db"]').classList.add('border-success');
            document.querySelector('input[data-product="profi"][data-type="db"]').classList.remove('border-error');
        } else {
            document.querySelector('input[data-product="profi"][data-type="db"]').classList.add('border-error');
            document.querySelector('input[data-product="profi"][data-type="db"]').classList.remove('border-success');
            allInputsCorrect = false;
        }

        if (input_total_db_profi === correct_total_db_profi) {
            document.querySelector('input[data-product="profi"][data-type="total-db"]').classList.add('border-success');
            document.querySelector('input[data-product="profi"][data-type="total-db"]').classList.remove('border-error');
        } else {
            document.querySelector('input[data-product="profi"][data-type="total-db"]').classList.add('border-error');
            document.querySelector('input[data-product="profi"][data-type="total-db"]').classList.remove('border-success');
            allInputsCorrect = false;
        }

        // --- Logic for the set selection ---
        const setRadios = document.querySelectorAll('input[name="best_set"]');
        let selectedSet = null;

        // Reset borders for set selection
        document.querySelectorAll('#set-selection-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        setRadios.forEach(radio => {
            if (radio.checked) {
                selectedSet = radio.value;
                const parentCard = radio.closest('.card');

                // The solution implies "Profi" is the better choice even if DBs are equal
                // If it was strictly based on calculation, if DBs are equal, neither is "better" or a tie.
                // Sticking to "profi" as the correct answer as per the provided solution.
                if (selectedSet === 'profi') { // Assuming 'profi' is the correct answer based on the image's solution text
                    isSetSelectionCorrect = true;
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    isSetSelectionCorrect = false;
                    parentCard.classList.add('border-error', 'border-4');
                }
            }
        });


        // --- Overall validation result ---
        if (allInputsCorrect && isSetSelectionCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
