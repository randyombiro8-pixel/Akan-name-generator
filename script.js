// Arrays for storing daynames and Akan names
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']; // Fixed: 'kwame' → 'Kwame'
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

// Check for valid date
function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

// Get the day of week from date
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    return date.getDay(); // Returns 0-6 (Sunday-Saturday)
}

// Function to get Akan name
function getAkanName(dayIndex, gender) {
    if (gender == 'male') {
        return maleNames[dayIndex];
    } else {
        return femaleNames[dayIndex];
    }
}

// Function to check date/month validity
function checkValidity(dateString) {
    if (!dateString) {
        alert('Please enter your birthday!');
        return false;
    }
    if (!isValidDate(dateString)) {
        alert('Invalid date! Please enter a valid date (e.g., February 30th is not a real date).');
        return false;
    }
    return true;
}

// Main function
function generateAkanName() {
    // Get user input
    const birthdayInput = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const resultDiv = document.getElementById('result');
    
    // Check date validity
    if (!checkValidity(birthdayInput)) {
        resultDiv.className = 'result-box error'; // ERROR STYLING
        resultDiv.innerHTML = '<p>Invalid date entered. Please try again.</p>';
        resultDiv.style.display = 'block';
        return;
    }
    
    // Calculate the day of week
    const dayIndex = getDayOfWeek(birthdayInput);
    const dayName = dayNames[dayIndex];
    
    // Get Akan name
    const akanName = getAkanName(dayIndex, gender);
    
    // Display result (SUCCESS STYLING)
    resultDiv.className = 'result-box'; // Reset to normal
    resultDiv.innerHTML = `
        <h3>Your Akan Name is: ${akanName}</h3>
        <p>Day of Birth: ${dayName}</p>
        <p>Gender: ${gender}</p>
    `;
    resultDiv.style.display = 'block';
}

// Event listener
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    
    // Make button work when clicked
    generateBtn.addEventListener('click', generateAkanName);
});
