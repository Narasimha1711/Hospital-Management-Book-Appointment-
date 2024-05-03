document.getElementById('bmiCalculatorForm').addEventListener('submit', function (event) {

    
    event.preventDefault(); 
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    const bmi = calculateBMI(weight, height);

    
    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>BMI: ${bmi.toFixed(2)}</p><p>You are ${bmiCategory}</p>`;
    resultContainer.style.display = 'block'; 
});
