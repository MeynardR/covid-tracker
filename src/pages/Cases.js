import React from 'react';

import FirstPart from "../components/FirstPart";
import SecondPart from "../components/SecondPart";
import ThirdPart from '../components/ThirdPart';
import LeftPart from "../components/LeftPart";
import RightPartCases from '../components/RightPartCases';

import "./Cases.css";

const Cases = (props) => {

  const worldConfirmedCases = props.worldConfirmedCases;
  const countriesData = props.countriesData;
  const convertedDate = props.convertedDate;

  let countriesCases;
  let countriesArray = [];
  let countryNames = [];
  let sortedCountriesCases = [];

  if (!!convertedDate && !!worldConfirmedCases && !!countriesData) {

    countriesCases = countriesData.map(countryStat => {
      return {
        name: countryStat.region.name,
        cases: countryStat.confirmed
      }
    });

    countriesCases.map(countryStat => {
      const exist = sortedCountriesCases.find(t => t.name === countryStat.name);
      if (exist)
        return exist.cases += countryStat.cases;
      else
        return sortedCountriesCases.push(countryStat);
    })

    countriesArray = sortedCountriesCases.sort((a, b) => {
      // if statement checks if index a.cases is less than b.cases
      if (a.cases < b.cases) {
        // return 1 means that if statement is true then this put element a to the location of b on the array which means on the right
        return 1
      } else if (a.cases > b.cases) {
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
      <ThirdPart countryNames={countryNames}/>

      {countriesData ?
        <div>
          <section id="main">
            {/* Left Part */}
            <div>
              <LeftPart convertedDate={convertedDate} countriesData={countriesData} newString="cases" />
            </div>
            {/* Right Part */}
            <div>
              <RightPartCases convertedDate={convertedDate} worldConfirmedCases={worldConfirmedCases} countriesArray={countriesArray} newString="cases" />
            </div>
          </section>

          <section id='footer'>
            <p>Source: World Health Organization</p>
            <div>
              <p>Most recent data submission date: {convertedDate}</p>
              <p>Number of countries reported: {sortedCountriesCases.length}</p>
            </div>
          </section>

        </div> : <p className="loading"></p>
      }
    </React.Fragment>
  )
};

export default Cases;
