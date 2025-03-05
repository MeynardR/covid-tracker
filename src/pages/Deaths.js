import React from 'react';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';
import LeftPart from "../components/LeftPart";
import RightPartDeaths from '../components/RightPartDeaths';

import "./Deaths.css";

const Deaths = (props) => {

  const worldDeaths = props.worldDeaths;
  const countriesData = props.countriesData;
  const convertedDate = props.convertedDate;

  let countriesDeaths;
  let countriesArray = [];
  let countryNames = [];
  let sortedCountriesDeaths = [];

  if (!!convertedDate && !!worldDeaths && !!countriesData) {

    countriesDeaths = countriesData.map(countryStat => {
        return {
            name: countryStat.region.name,
            deaths: countryStat.deaths
        }
    });

    countriesDeaths.map(countryStat => {
        const exist = sortedCountriesDeaths.find(t => t.name === countryStat.name);
        if (exist)
            return exist.deaths += countryStat.deaths;
        else
            return sortedCountriesDeaths.push(countryStat);
    })


    countriesArray = sortedCountriesDeaths.sort((a, b) => {
        // if statement checks if index a.cases is less than b.cases
        if (a.deaths < b.deaths) {
            // return 1 means that if statement is true then this put element a to the location of b on the array which means on the right
            return 1
        } else if (a.deaths > b.deaths) {
            // return -1 means to moves element a to the left
            return -1
        } else {
            return 0
        }
    })

    countriesArray.forEach(country => {
      return countryNames.push(country.name)
    });

  }


  return (
    <React.Fragment>
      <FirstPart />
      <SecondPart />
      <ThirdPart />

      {countriesData ?
        <div>
          <section style={{ display: 'flex', padding: '0 10rem' }}>
            {/* Left Part */}
            <div style={{ width: "70%" }}>
              <LeftPart convertedDate={convertedDate} countriesData={countriesData} newString="deaths" />
            </div>
            {/* Right Part */}
            <div style={{ width: "45%" }}>
              <RightPartDeaths convertedDate={convertedDate} worldDeaths={worldDeaths} countriesArray={countriesArray} newString="deaths" />
            </div>
          </section>

          <section style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', padding: '0 10rem' }}>
            <p>Source: World Health Organization</p>
            <div>
              <p>Most recent data submission date: {convertedDate}</p>
              <p>Number of countries reported: {sortedCountriesDeaths.length}</p>
            </div>
          </section>
        </div> : <p className="loading" style={{ textAlign: 'center', fontSize: '10rem' }}></p>
      }


    </React.Fragment>
  )
};

export default Deaths;
