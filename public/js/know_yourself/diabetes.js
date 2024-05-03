
// adding event listener for the form to give the input and judge the input from the user 
document.getElementById('diabetesRiskForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const familyHistory = document.getElementById('familyHistory').value;
    const physicalActivity = document.getElementById('physicalActivity').value;

    // defining the mathematical function to calculate the risk for the calculator for differrent gender - male and female
    function calculateDiabetesRisk(age, weight, height, familyHistory, physicalActivity) {
        let risk = 0;

        // increment of risk on the basis of age parameter 
        // setting upper bound - 45 as the standarf 
        if (age >= 45) {
            risk += 20;
        } else if (age >= 25) {
            risk += 10;
        }

        
        const bmi = weight / ((height / 100) * (height / 100));
        if (bmi >= 30) {
            risk += 20;
        } else if (bmi >= 25) {
            risk += 10;
        }

        // getting assesment of previous family history of diabetes or not for increment on the basis of input
        // imcrement of risk by 10 if user has previous record of diabetes in the family 
        if (familyHistory === 'yes') {
            risk += 10;
        }

        // taking in the physical activity level for risk assesment 
        if (physicalActivity === 'low') {
            risk += 20;
        } else if (physicalActivity === 'moderate') {
            risk += 10;
        }

        return risk;
    }
    // calling thr actual function
    const diabetesRisk = calculateDiabetesRisk(age, weight, height, familyHistory, physicalActivity);
    
    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>Diabetes risk assessment: ${diabetesRisk}%</p>`; // printing the result 
    resultContainer.style.display = 'block'; 
});
