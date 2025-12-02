async function getWeather() {
    let city = document.getElementById("city").value;

    if (city.trim() === "") {
        document.getElementById("result").innerText = "Please enter a city name.";
        return;
    }

    let url = `https://wttr.in/${city}?format=j1`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let temp = data.current_condition[0].temp_C;
        let desc = data.current_condition[0].weatherDesc[0].value;

        document.getElementById("result").innerText =
            `${city.toUpperCase()} → ${temp}°C, ${desc}`;
    } catch (error) {
        document.getElementById("result").innerText = "City not found!";
    }
}