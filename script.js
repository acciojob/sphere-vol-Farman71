function volume_sphere(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Retrieve the radius value entered by the user
    let radiusValue = document.getElementById("radius").value;

    // Convert the radius value to a number
    let radius = parseFloat(radiusValue);

    // Validate the input: check if it's a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If invalid, set the volume to 'NaN'
        document.getElementById("volume").value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Round the calculated volume to four decimal places
        volume = volume.toFixed(4);

        // Display the calculated volume in the designated output field
        document.getElementById("volume").value = volume;
    }
}

// Attach the volume_sphere function to the form's onsubmit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};