document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const city = document.querySelector("input").value;
  const apiKey = "oURfeLvsbvhmTFUIH2qjNA==dOeOl3zMI1XmFZyB";

  fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Data tidak ditemukan");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("city").textContent = `City: ${city}`;
      document.getElementById(
        "conditions"
      ).textContent = `Conditions: ${data.cloud_pct}% Cloudy`;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${data.temp}°C`;
      document.getElementById(
        "wind_speed"
      ).textContent = `Wind Speed: ${data.wind_speed} m/s`;
      document.getElementById(
        "humidity"
      ).textContent = `Kelembaban: ${data.humidity}%`;
      document.getElementById(
        "min_temp"
      ).textContent = `Min Temperature: ${data.min_temp}°C`;
      document.getElementById(
        "max_temp"
      ).textContent = `Max Temperature: ${data.max_temp}°C`;
    })
    .catch((error) => {
      alert(error.message);
      console.error("Error:", error);
    });
});