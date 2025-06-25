document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    // This part should be in an outer scope or initialized once
    // It's assumed btnValidate, cardSuccess, cardError, cardDefault are already defined from the previous task.

    btnValidate.addEventListener('click', () => {
        // --- Logic for the "Welcher Bus ist besser" task ---
        const busRadios = document.querySelectorAll('input[name="best_bus"]');
        let selectedBus = null;
        let isBusTaskCorrect = false;

        // Calculate profits
        const bus1Profits = [
            10000 - 8000, // Year 1
            16000 - 8000, // Year 2
            12000 - 8000, // Year 3
            4000 - 9000,  // Year 4
            18000 - 10000,// Year 5
            30000 - 13000 // Year 6
        ];
        const bus2Profits = [
            1000 - 4500,  // Year 1
            33000 - 6200, // Year 2
            4500 - 13400, // Year 3
            3000 - 30100, // Year 4
            2000 - 20300, // Year 5
            60000 - 38800 // Year 6
        ];

        const totalBus1Profit = bus1Profits.reduce((sum, current) => sum + current, 0);
        const totalBus2Profit = bus2Profits.reduce((sum, current) => sum + current, 0);

        const correctBusAnswer = (totalBus1Profit > totalBus2Profit) ? 'bus1' : 'bus2';

        // Reset borders for bus selection
        document.querySelectorAll('#bus-selection-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        busRadios.forEach(radio => {
            if (radio.checked) {
                selectedBus = radio.value;
                const parentCard = radio.closest('.card');

                if (selectedBus === correctBusAnswer) {
                    isBusTaskCorrect = true;
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    isBusTaskCorrect = false;
                    parentCard.classList.add('border-error', 'border-4');
                }
            }
        });

        // --- Overall validation logic (combining tasks if multiple) ---
        // For this specific request, we assume it's a standalone validation.
        // If you want to combine with the previous task, you'd need a more complex state.

        if (isBusTaskCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
