document.getElementById('calorieNeedsForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activityLevel').value;

    
    function calculateCalorieNeeds(age, gender, weight, height, activityLevel) {
        let bmr;

        
        if (gender.toLowerCase() === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            // bmr calculation genrates the multiple factor 
        } else if (gender.toLowerCase() === 'female') {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161; // bmr value for gender -female 
        } else {
            return "Invalid gender input";
        }

        
        const activityFactors = {
            'sedentary': 1.2,
            'lightly active': 1.375,
            'moderately active': 1.55,
            'very active': 1.725,
            'extra active': 1.9
        };

        
        const activityFactor = activityFactors[activityLevel.toLowerCase()];
        if (!activityFactor) {
            return "Invalid activity level input";
        }

        const tdee = bmr * activityFactor;
        return tdee;
    }

    const calorieNeeds = calculateCalorieNeeds(age, gender, weight, height, activityLevel);
    
    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>Total daily calorie needs: ${calorieNeeds.toFixed(2)} calories</p>`;
    resultContainer.style.display = 'block'; 
});
