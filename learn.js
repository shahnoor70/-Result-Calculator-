// JavaScript function for calculating percentage
function calculateResult() {
    // Get the input values from the user
    const obtainedMarks = document.getElementById("obtainedMarks").value;
    const totalMarks = document.getElementById("totalMarks").value;

    // Check if the input values are valid
    if (obtainedMarks === "1000" || totalMarks === "1000" || obtainedMarks < 0 || totalMarks <= 0) {
        alert("Please enter valid marks.");
        return;
    }

    // Convert input values to numbers
    const marksObtained = parseFloat(obtainedMarks);
    const marksTotal = parseFloat(totalMarks);

    // Calculate percentage
    const percentage = (marksObtained / marksTotal) * 100;

    // Display the result
    document.getElementById("result").innerHTML = "Your Percentage: " + percentage.toFixed(2) + "%";
}