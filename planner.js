function generateMealPlan(){
    if (document.getElementById('Div1').style.visibility== 'visible') {
        document.getElementById('Div1').style.visibility = 'hidden';
        document.getElementById('Div2').style.visibility = 'visible';
    }
    else {
        document.getElementById('Div1').style.visibility = 'visible';
        document.getElementById('Div2').style.visibility = 'hidden';
    }   
}
const diet = document.querySelector('input[name="diet"]:checked').value;
const calories = document.getElementById('calories').value;
const meals = document.getElementById('meals').value; 

function showBMI(){
    document.getElementById('BMI').style.visibility = 'visible';
    document.getElementById('BMR').style.visibility = 'hidden';
}

function showBMR(){
    document.getElementById('BMR').style.visibility = 'visible';
    document.getElementById('BMI').style.visibility = 'hidden';
}


const bmiForm = document.getElementById('bmi-form');
const bmiOutput = document.getElementById('bmi-output');
const dietForm = document.getElementById('diet-form');
const dietOutput = document.getElementById('diet-output');

// BMI calculator

function calculateBMI(){
    event.preventDefault();
    const height = parseFloat(document.getElementById('height1').value) / 100; 
    const weight = parseFloat(document.getElementById('weight1').value);
    
    const bmi = weight / (height * height);

    let bmiInterpretation;

    if (bmi < 18.5) {
        bmiInterpretation = 'Underweight';
    } else if (bmi < 25) {
        bmiInterpretation = 'Normal weight';
    } else if (bmi < 30) {
        bmiInterpretation = 'Overweight';
    } else {
        bmiInterpretation = 'Obese';
    }
    document.getElementById('bmi-output').innerHTML = '<p>Your BMI is: ' +bmi.toFixed(2) +'</p><p>Interpretation: ' +bmiInterpretation+'</p>';
};

// Diet calculator

function calculateBMR(){
    event.preventDefault();
    const resultDiv = document.getElementById("result");
    const age = parseInt(document.getElementById("age").value);

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const height = parseInt(document.getElementById("height").value);

    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById("activity-level").value;
    const goal = document.getElementById("goal").value;
    // Calculate BMR using the Mifflin-St Jeor formula
    alert(weight)
    var bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
alert(weight)
    // Apply activity factors
    const activityFactors = {
        sedentary: 1.2,
        "lightly-active": 1.375,
        "moderately-active": 1.55,
        "very-active": 1.725,
        "extremely-active": 1.9
    };
    const tdee = bmr * activityFactors[activityLevel];

    // Adjust for goal
    const goalFactors = {
        maintain: 1,
        "lose-weight": 0.8,
        "gain-muscle": 1.2
    };
    const dailyCalories = tdee * goalFactors[goal];

    // Calculate macronutrients (general guidelines)
    const proteinGramsPerKg = 1.6; // Adjust for specific goals
    const protein = weight * proteinGramsPerKg;
    const carbs = (dailyCalories - (protein * 4) - (dailyCalories * 0.3)) / 4;
    const fat = dailyCalories * 0.3 / 9;
   
    // Display results
    //resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = ' <P>Your Basal Metabolic Rate (BMR): '+bmr+' <br>Your daily calorie requirement is approximately: '+dailyCalories.toFixed(0)+'<br>Recommended macronutrient breakdown: Protein: '+protein.toFixed(0)+ 'grams Carbohydrates: '+carbs.toFixed(0)+' grams Fat: '+fat.toFixed(0)+' grams</p>';
};
