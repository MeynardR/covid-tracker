import React, { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

import "./MapChart.css";

const MapChart = (props) => {

  const countriesData = props.countriesData;
  const newString = props.newString;

  let countriesMap;
  let casesValue;
  let deathsValue;

  let sortedCountriesCases = [];
  let sortedCountriesDeaths = [];

  if(!!countriesData) {
    
    countriesMap = countriesData.map(countryStat => {
        return {
          name: countryStat.region.name,
          cases: countryStat.confirmed,
          deaths: countryStat.deaths,
          lat: countryStat.region.lat,
          long: countryStat.region.long
        }
      }
    );

    countriesMap.map(countryStat => {
      const exist = sortedCountriesCases.find(t => t.name === countryStat.name);
      if(exist)
          return exist.cases += countryStat.cases;
      else 
          return sortedCountriesCases.push(countryStat);
    })

    countriesMap.map(countryStat => {
      const exist = sortedCountriesDeaths.find(t => t.name === countryStat.name);
      if(exist)
          return exist.deaths += countryStat.deaths;
      else 
          return sortedCountriesDeaths.push(countryStat);
    })

    const getCountryWithHighestCases = countriesMap.sort((a,b) => {
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
    }).slice(0,1);

    const getCountryWithHighestDeaths = countriesMap.sort((a,b) => {
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
    }).slice(0,1);


    casesValue = getCountryWithHighestCases[0].cases;
    deathsValue = getCountryWithHighestDeaths[0].deaths;

  }

  const popScaleCases = useMemo(
    () => scaleLinear().domain([0, casesValue]).range([0, 50]),
    [casesValue]
  );

  const popScaleDeaths = useMemo(
    () => scaleLinear().domain([0, deathsValue]).range([0, 50]),
    [deathsValue]
  );


  return (
    <ComposableMap style={{ height: '580px'}} projectionConfig={{ rotate: [-10, 0, 0] }}>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography id="geography" key={geo.rsmKey} geography={geo}>
            </Geography>
          ))
        }
      </Geographies>
      {newString === "cases" && sortedCountriesCases.map(({ name, cases, lat, long }) => {
        return (
            <Marker key ={name} coordinates={[long, lat]} >
              <circle id="circle" r={popScaleCases(cases)} />
              {/* <svg id="hidden-text" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg">
                <text textAnchor="start" x={-100} y={20} >{name}</text>
              </svg> */}
              <text style={{ textAlign: 'center'}} id="hidden-text" textAnchor="end" x={5} y={30}>
                <tspan>{name}</tspan>
                <tspan> </tspan>
                <tspan fill="black" x={5} y={50}>{cases}</tspan>
              </text>
            </Marker>          
        );
      })}
      {newString === "deaths" && sortedCountriesDeaths.map(({ name, deaths, lat, long }) => {
        return (
          <Marker key ={name} coordinates={[long, lat]} >
            <circle id="circle" r={popScaleDeaths(deaths)} />
            {/* <text
              id="hidden-text"
              textAnchor="end"
              x={5}
              y={30}
            >
              {name}
              <tspan> </tspan>
              <tspan fill="black"  >{deaths}</tspan>
            </text> */}
            <text style={{ textAlign: 'center'}} id="hidden-text" textAnchor="end" x={5} y={30}>
              <tspan>{name}</tspan>
              <tspan> </tspan>
              <tspan fill="black" x={5} y={50}>{deaths}</tspan>
            </text>
          </Marker>
        );
      })}
    </ComposableMap>
  );
  
};

export default MapChart;
