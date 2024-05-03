// adding event listener for the form to get the input and start giving the output
document.getElementById('targetHeartRateForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const age = parseFloat(document.getElementById('age').value);
    const restingHeartRate = parseFloat(document.getElementById('restingHeartRate').value);

    // function for cal the hihest needed heart rate for the needed patient 
    function calculateTargetHeartRate(age, restingHeartRate) {
        const maxHeartRate = 220 - age;
        const lowerBound = 0.5 * maxHeartRate; // getting lower bound to cal the lower boundary value 
        const upperBound = 0.85 * maxHeartRate; // upper bound is for the maximum limit the heart rate should go about 

        const lowerBoundTarget = lowerBound + restingHeartRate; // getting the lower bound target according to the goven inp
        const upperBoundTarget = upperBound + restingHeartRate;

        return { lowerBoundTarget, upperBoundTarget }; // returning the range as the result of the function
    }

    const targetHeartRate = calculateTargetHeartRate(age, restingHeartRate); // taking the input as the age of the patient and the restin heart rate for the patient 

    
    const resultContainer = document.getElementById('result'); // retrieving the result
    resultContainer.innerHTML = `<p>Target Heart Rate Zone: ${targetHeartRate.lowerBoundTarget.toFixed(2)} - ${targetHeartRate.upperBoundTarget.toFixed(2)} bpm</p>`; // helping print
    resultContainer.style.display = 'block'; 
});
