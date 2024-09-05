document.getElementById('buscar').addEventListener('click', () => {
  let ciudad = document.getElementById('ciudad').value;

  if (ciudad) {
      const apiKey = 'ad2ef0935b0d61940b8cb436417696ab'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ad2ef0935b0d61940b8cb436417696ab}&units=metric&lang=es`;

      fetch(url)
          .then(response => response.json())
          .then(data => {
              if (data.cod === 200) {
                  let temp = Math.round(data.main.temp);
                  document.getElementById('temperatura-valor').textContent = `${temp} °C`;

                  let desc = data.weather[0].description;
                  document.getElementById('temperatura-descripcion').textContent = desc.toUpperCase();
                  document.getElementById('ubicacion').textContent = data.name;

                  document.getElementById('viento-velocidad').textContent = `${data.wind.speed} m/s`;

                  
                  let iconoAnimado = document.getElementById('icono-animado');
                  switch (data.weather[0].main) {
                      case 'Thunderstorm':
                          iconoAnimado.src = 'animated/thunder.svg';
                          break;
                      case 'Drizzle':
                          iconoAnimado.src = 'animated/rainy-2.svg';
                          break;
                      case 'Rain':
                          iconoAnimado.src = 'animated/rainy-7.svg';
                          break;
                      case 'Snow':
                          iconoAnimado.src = 'animated/snowy-6.svg';
                          break;
                      case 'Clear':
                          iconoAnimado.src = 'animated/day.svg';
                          break;
                      case 'Clouds':
                          iconoAnimado.src = 'animated/cloudy-day-1.svg';
                          break;
                      default:
                          iconoAnimado.src = 'animated/cloudy-day-1.svg';
                  }
              } else {
                  alert('Ciudad no encontrada, por favor intenta nuevamente.');
              }
          })
          .catch(error => console.error('Error:', error));
  } else {
      alert('Por favor ingresa una ciudad.');
  }
});
