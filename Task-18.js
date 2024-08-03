document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    calculateButton.addEventListener('click', function() {
        const value1 = parseFloat(document.getElementById('value1').value);
        const value2 = parseFloat(document.getElementById('value2').value);
        const operation = document.getElementById('operation').value;
        let result;
        if (isNaN(value1) || isNaN(value2)) {
            result = 'Please enter valid numbers.';
        } else {
            switch (operation) {
                case 'add':
                    result = value1 + value2;
                    break;
                case 'subtract':
                    result = value1 - value2;
                    break;
                case 'multiply':
                    result = value1 * value2;
                    break;
                case 'percentage':
                    result = (value1 * value2) / 100;
                    break;
                default:
                    result = 'Unknown operation';
            }
        }
        resultDiv.textContent = `Result: ${result}`;
    });
});
