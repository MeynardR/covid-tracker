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
  let countryNames = [];
  let countriesCasesNamesList = [];
  let countriesCasesList = [];
  let sortedCountriesCases = [];

  let testArray = [];
  let formattedList = [];

  if (!!convertedDate && !!worldConfirmedCases && !!countriesData) {

    countriesCases = countriesData.map(countryStat => {
      return {
        name: countryStat.region.name,
        cases: countryStat.confirmed
      }
    }
    );

    countriesCases.map(countryStat => {
      const exist = sortedCountriesCases.find(t => t.name === countryStat.name);
      if (exist)
        return exist.cases += countryStat.cases;
      else
        return sortedCountriesCases.push(countryStat);
    })

    const countriesArray = sortedCountriesCases.sort((a, b) => {
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

    countriesCasesNamesList = countriesArray.map(country => {
      return (
        <div key={country.name} style={{ borderSpacing: '0', border: 'solid', borderWidth: '0 0 1px 0', borderColor: 'rgb(231, 231, 232)', width: '10rem' }}>
          <p style={{ fontSize: '1.2rem' }} >{country.name}</p>
        </div>
      )
    })

    countriesCasesList = countriesArray.map(country => {
      return (
        <div key={country.cases} style={{ border: 'solid', borderWidth: '1px 0 1px 1px', borderColor: 'rgb(231, 231, 232)', width: '9rem' }}>
          <p style={{ fontSize: '1.2rem', marginLeft: '20%' }} >{country.cases}</p>
        </div>
      )
    });

    countriesCasesList.forEach(countryStat => {
      const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "m" },
        { value: 1e9, symbol: "g" },
        { value: 1e12, symbol: "t" },
        { value: 1e15, symbol: "p" },
        { value: 1e18, symbol: "e" }
    ];
      const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
      const item = lookup.findLast(item => countryStat.key >= item.value);
      const test = countryStat.key / item.value;
      const val = (test).toFixed(1).replace(regexp, "").concat(item.symbol);
      return testArray.push(val);
    });

    formattedList = testArray.map(value => {
      return (
        <div style={{ borderSpacing: '0', border: 'solid', borderWidth: '0 0 1px 1px', borderColor: 'rgb(231, 231, 232)', width: '9rem' }}>
          <p key={value} style={{ fontSize: '1.2rem', marginLeft: '20%' }} >{value}</p>
        </div>
      )
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
              <LeftPart convertedDate={convertedDate} countriesData={countriesData} newString="cases" />
            </div>
            {/* Right Part */}
            <div style={{ width: "45%" }}>
              <RightPartCases convertedDate={convertedDate} worldConfirmedCases={worldConfirmedCases} countriesCasesNamesList={countriesCasesNamesList} countriesCasesList={countriesCasesList} formattedList={formattedList} newString="cases" />
            </div>
          </section>

          <section style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', padding: '0 10rem' }}>
            <p>Source: World Health Organization</p>
            <div>
              <p>Most recent data submission date: {convertedDate}</p>
              <p>Number of countries reported: {sortedCountriesCases.length}</p>
            </div>
          </section>
        </div> : <p className="loading" style={{ textAlign: 'center', fontSize: '10rem' }}></p>
      }
    </React.Fragment>
  )
};

export default Cases;
