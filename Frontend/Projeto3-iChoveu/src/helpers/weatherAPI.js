const urlSite = (term) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  return `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
};

export const searchCities = async (term) => {
  const URL = urlSite(term);
  const response = await fetch(URL);
  const data = await response.json();
  if (data.length === 0) window.alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = (cityURL) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const { current } = data;
      return {
        temp: current.temp_c,
        condition: current.condition.text,
        icon: current.condition.icon,
      };
    });
};
