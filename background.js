
//key= 41b01f731e59ef15c4219f26e163e2f9

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=41b01f731e59ef15c4219f26e163e2f9&units=metric';

// Function to fetch weather data
function fetchWeather() {
    fetch(apiURL)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Failed to fetch weather data.');
        })
        .then(data => {
            
            console.log(data);
    
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {weatherData: data});
            });
        })
        .catch(error => console.error('Error fetching weather:', error));
}

// Listen for an event
chrome.browserAction.onClicked.addListener((tab) => {
    fetchWeather();
});


fetchWeather();
