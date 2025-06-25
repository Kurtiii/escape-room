    // Define the correct answers for each scenario
    const correctAnswers = {
    "scenario1": "Product",
    "scenario2": "Product",
    "scenario3": "Price",
    "scenario4": "Price",
    "scenario5": "Place",
    "scenario6": "Promotion"
};

    // Ensure the DOM is fully loaded before executing JavaScript
    document.addEventListener('DOMContentLoaded', () => {
    // Assuming checkAnswersBtn, card_success, and card_error already exist in the main HTML
    const checkAnswersBtn = document.getElementById('btn_validate');
    const cardSuccess = document.getElementById('card_success');
    const cardError = document.getElementById('card_error');
    const cardDefault = document.getElementById('card_default');

    // Get all select elements that are part of the quiz scenarios
    const scenarioSelects = document.querySelectorAll('select[id^="scenario"]');

    // Add event listener to the check answers button
    if (checkAnswersBtn) {
    checkAnswersBtn.addEventListener('click', validateAnswers);
}

    function validateAnswers() {
    let allCorrect = true;

    // Hide previous feedback messages if they exist
    if (cardSuccess) cardSuccess.classList.add('hidden');
    if (cardError) cardError.classList.add('hidden');

    // Iterate through each select element to validate answers
    scenarioSelects.forEach(selectElement => {
    const scenarioId = selectElement.id;
    const selectedValue = selectElement.value;
    const correctAnswer = correctAnswers[scenarioId];

    // Remove previous validation styling
    selectElement.classList.remove('select-success', 'select-error');

    // Check if the selected answer is correct
    if (selectedValue === correctAnswer) {
    selectElement.classList.add('select-success'); // Apply green border for correct answer
} else {
    selectElement.classList.add('select-error');   // Apply red border for incorrect answer
    allCorrect = false; // Mark that at least one answer is incorrect
}
});

    // Display overall feedback based on validation result
    if (allCorrect) {
    if (cardSuccess) cardSuccess.classList.remove('hidden'); // Show success message
    if (cardDefault) cardDefault.classList.add('hidden'); // Hide default card
} else {
    if (cardError) cardError.classList.remove('hidden');   // Show error message
    if (cardDefault) cardDefault.classList.add('hidden'); // Hide default card
}
}
});
