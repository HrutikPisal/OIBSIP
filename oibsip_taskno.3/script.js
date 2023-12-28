function convertTemperature() {
    var temperature = document.getElementById('temperature').value;
    var scale = document.getElementById('scale').value;
    var resultElement = document.getElementById('result');

    if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (scale === 'celsius') {
        var fahrenheit = (temperature * 9/5) + 32;
        resultElement.innerHTML = temperature + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit.";
    } else {
        var celsius = (temperature - 32) * 5/9;
        resultElement.innerHTML = temperature + " Fahrenheit = " + celsius.toFixed(2) + " Celsius.";
    }
}
