import { useState, useReducer } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import AddCityForm from "./components/AddCityForm";
import WeatherList from "./components/WeatherList";
import Header from './components/Header';
import weathersReducer from './reducers/weathers';
import WeathersContext from './context/weathersContext';
import './styles/index.scss';

const App = () => {

  const [weathers, dispatch] = useReducer(weathersReducer, []);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <WeathersContext.Provider value={{ weathers, dispatch }}>
      <Header />
      <AddCityForm
        handleLoading={(isLoading) => { setIsLoading(isLoading) }} />
      {isLoading
        ? <CircularProgress />
        : <WeatherList />}
    </WeathersContext.Provider>
  )
}

export default App;