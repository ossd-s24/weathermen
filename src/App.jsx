import { useState, useEffect } from 'react'
import './App.css'
import { api_key, lat, lon } from './config'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/500.css';

function App() {
  const [weather, setWeather] = useState('')
// Function to fetch weather data
    useEffect(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
      fetch(apiUrl)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Failed to fetch weather data.');
        })
        .then(data => {
            setWeather(data.weather[0].description)
        })
        .catch(error => console.error('Error fetching weather:', error));
    }, []) 
    
  return (
        <Box
        sx={{
            width: '300px',
            height: '400px',
            justifyContent: 'center',
            overflow: 'hidden',
        }}
      >
        <Paper
        sx={{
          width: '100%',
          height: '100%',
          margin: "auto",
          backgroundColor: "#f5f5f5",
        }}>
        <Typography color="grey" variant="h2" gutterBottom>
        The current weather is
      </Typography>
      <Typography variant="h3" gutterBottom>
        {weather}
      </Typography>
        </Paper>
      </Box>
  )
}

export default App
