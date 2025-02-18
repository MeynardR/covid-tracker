import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Cases from './pages/Cases';
import Deaths from './pages/Deaths';
import Charts from './pages/Charts';

import "./index.css";

const App = () => {

  const [worldActiveCases, setWorldActiveCases] = useState(0);
  const [worldConfirmedCases, setWorldConfirmedCases] = useState(0);
  const [worldDeaths, setDeaths] = useState(0);
  const [countriesData, setCountriesData] = useState('');
  const [retrievedDate, setRetrievedDate] = useState('');

  const covidData = useRef();
  const totalCovidData = useRef();

  let formattedDate;
  let convertedDate;

  const fetchSpecificCovidCases = useCallback( async () => {
    const url = 'https://covid-19-statistics.p.rapidapi.com/reports';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2309003b88mshed98c4e5eb56241p1fee06jsn61228f12d1ed',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      covidData.current = await JSON.parse(result);
      setCountriesData(covidData.current.data);
      // console.log(covidData.current)
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchCovidCases = useCallback( async () => {
    const url = 'https://covid-19-statistics.p.rapidapi.com/reports/total';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2309003b88mshed98c4e5eb56241p1fee06jsn61228f12d1ed',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      totalCovidData.current = await JSON.parse(result);
      setWorldActiveCases(totalCovidData.current.data.active);
      setWorldConfirmedCases(totalCovidData.current.data.confirmed);
      setDeaths(totalCovidData.current.data.deaths);
      setRetrievedDate(totalCovidData.current.data.date);
      // console.log(totalCovidData.current.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchSpecificCovidCases();
    fetchCovidCases();
  }, [fetchSpecificCovidCases, fetchCovidCases]);

  if (!!retrievedDate) {
    formattedDate = new Date(retrievedDate);
    convertedDate = formattedDate.toDateString();
  }

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path={["/", "/cases"]} exact>
            <Cases worldConfirmedCases={worldConfirmedCases} countriesData={countriesData} convertedDate={convertedDate}/>
          </Route>
          <Route path="/deaths" exact>
            <Deaths worldDeaths={worldDeaths} countriesData={countriesData} convertedDate={convertedDate}/>
          </Route>
          <Route path="/charts" exact>
            <Charts worldActiveCases={worldActiveCases} worldConfirmedCases={worldConfirmedCases} worldDeaths={worldDeaths}countriesData={countriesData}/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
