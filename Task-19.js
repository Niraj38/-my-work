// Function to toggle the visibility of the answer
function toggleAnswer(questionElement) {
    // Get all answer elements
    const allAnswers = document.querySelectorAll('.faq-answer');
    // Hide all answers
    allAnswers.forEach(answer => {
        if (answer !== questionElement.nextElementSibling) {
            answer.style.display = 'none';
            answer.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        }
    });

    // Toggle the visibility of the clicked answer
    const answerElement = questionElement.nextElementSibling;
    const toggleIcon = questionElement.querySelector('.toggle-icon');

    if (answerElement.style.display === 'block') {
        answerElement.style.display = 'none';
        toggleIcon.textContent = '+';
    } else {
        answerElement.style.display = 'block';
        toggleIcon.textContent = '−';
    }
}
