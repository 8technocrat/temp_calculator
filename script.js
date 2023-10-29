document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultSpan = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        switch (unit) {
            case "celsius":
                convertedTemperature = temperature;
                break;
            case "fahrenheit":
                convertedTemperature = (temperature * 9/5) + 32;
                break;
            case "kelvin":
                convertedTemperature = temperature + 273.15;
                break;
            case "rankine":
                convertedTemperature = (temperature + 273.15) * 9/5;
                break;
            default:
                convertedTemperature = "Invalid";
                break;
        }

        resultSpan.textContent = `${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
    });
});
