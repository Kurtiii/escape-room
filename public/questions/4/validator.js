document.addEventListener('DOMContentLoaded', () => {
    const btnValidate = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    btnValidate.addEventListener('click', () => {
        const productionVolume = 20000; // Stück

        // Data for Anlage A
        const ak_A = 80000;
        const nd_A = 5;
        const rw_A = 5000;
        const zins_A = 0.06;
        const wart_fix_A = 2000;
        const raum_fix_A = 3000;
        const vers_fix_A = 800;
        const mat_var_A = 3.5;
        const energie_var_A = 1;
        const lohn_var_A = 2.5;
        const wart_var_A = 0.5;

        // Data for Anlage B
        const ak_B = 150000;
        const nd_B = 8;
        const rw_B = 15000;
        const zins_B = 0.06;
        const wart_fix_B = 1500;
        const raum_fix_B = 3500;
        const vers_fix_B = 1200;
        const mat_var_B = 3.2;
        const energie_var_B = 0.8;
        const lohn_var_B = 2;
        const wart_var_B = 0.3;

        // Data for Anlage C
        const ak_C = 250000;
        const nd_C = 10;
        const rw_C = 30000;
        const zins_C = 0.06;
        const wart_fix_C = 1000;
        const raum_fix_C = 4000;
        const vers_fix_C = 1800;
        const mat_var_C = 3;
        const energie_var_C = 0.5;
        const lohn_var_C = 1.5;
        const wart_var_C = 0.2;

        // Function to calculate annual fixed costs
        function calculateAnnualFixedCosts(ak, nd, rw, zins, wart_fix, raum_fix, vers_fix) {
            const annual_abschreibung = (ak - rw) / nd;
            const average_capital = (ak + rw) / 2;
            const annual_zins = average_capital * zins;
            const total_fixed_annual = annual_abschreibung + annual_zins + wart_fix + raum_fix + vers_fix;
            return total_fixed_annual;
        }

        // Function to calculate total variable costs per piece
        function calculateVariableCostPerPiece(mat, energie, lohn, wart_var) {
            return mat + energie + lohn + wart_var;
        }

        // Calculate costs for Anlage A
        const annualFixedCosts_A = calculateAnnualFixedCosts(ak_A, nd_A, rw_A, zins_A, wart_fix_A, raum_fix_A, vers_fix_A);
        const variableCostPerPiece_A = calculateVariableCostPerPiece(mat_var_A, energie_var_A, lohn_var_A, wart_var_A);
        const totalCost_A = annualFixedCosts_A + (variableCostPerPiece_A * productionVolume);

        // Calculate costs for Anlage B
        const annualFixedCosts_B = calculateAnnualFixedCosts(ak_B, nd_B, rw_B, zins_B, wart_fix_B, raum_fix_B, vers_fix_B);
        const variableCostPerPiece_B = calculateVariableCostPerPiece(mat_var_B, energie_var_B, lohn_var_B, wart_var_B);
        const totalCost_B = annualFixedCosts_B + (variableCostPerPiece_B * productionVolume);

        // Calculate costs for Anlage C
        const annualFixedCosts_C = calculateAnnualFixedCosts(ak_C, nd_C, rw_C, zins_C, wart_fix_C, raum_fix_C, vers_fix_C);
        const variableCostPerPiece_C = calculateVariableCostPerPiece(mat_var_C, energie_var_C, lohn_var_C, wart_var_C);
        const totalCost_C = annualFixedCosts_C + (variableCostPerPiece_C * productionVolume);

        // Determine the cheapest Anlage
        let cheapestAnlage = 'A';
        let minCost = totalCost_A;

        if (totalCost_B < minCost) {
            minCost = totalCost_B;
            cheapestAnlage = 'B';
        }
        if (totalCost_C < minCost) {
            minCost = totalCost_C;
            cheapestAnlage = 'C';
        }

        console.log(`Total Cost Anlage A: ${totalCost_A.toFixed(2)}`);
        console.log(`Total Cost Anlage B: ${totalCost_B.toFixed(2)}`);
        console.log(`Total Cost Anlage C: ${totalCost_C.toFixed(2)}`);
        console.log(`Cheapest Anlage: ${cheapestAnlage}`);


        // --- Validation Logic ---
        const anlageRadios = document.querySelectorAll('input[name="best_anlage"]');
        let isAnlageSelectionCorrect = false;
        let selectedAnlage = null;

        // Reset borders for anlage selection
        document.querySelectorAll('#anlage-selection-options .card').forEach(card => {
            card.classList.remove('border-success', 'border-error', 'border-4');
        });

        anlageRadios.forEach(radio => {
            if (radio.checked) {
                selectedAnlage = radio.value;
                const parentCard = radio.closest('.card');

                if (selectedAnlage === cheapestAnlage) {
                    isAnlageSelectionCorrect = true;
                    parentCard.classList.add('border-success', 'border-4');
                } else {
                    isAnlageSelectionCorrect = false;
                    parentCard.classList.add('border-error', 'border-4');
                }
            }
        });

        // --- Overall validation result ---
        if (isAnlageSelectionCorrect) {
            cardSuccess.classList.remove('hidden');
            cardError.classList.add('hidden');
        } else {
            cardError.classList.remove('hidden');
            cardSuccess.classList.add('hidden');
        }
        cardDefault.classList.add('hidden');
    });
});
