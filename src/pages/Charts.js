import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

import { Pie } from 'react-chartjs-2';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';
import DoughnutChart from '../components/DoughnutChart';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Charts = (props) => {

  const worldActiveCases = props.worldActiveCases;
  const worldConfirmedCases = props.worldConfirmedCases;
  const worldDeaths = props.worldDeaths;
  const countriesData = props.countriesData;

  let countriesCases;
  let sortedCountriesCases = [];

  if (!!countriesData) {

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

    // console.log(sortedCountriesCases);

  }

  const pieData = {
    labels: ['Active Cases', 'Deaths', 'Confirmed Cases'],
    datasets: [
      {
        label: ['Total (World)'],
        data: [worldActiveCases, worldDeaths, worldConfirmedCases],
        backgroundColor: [
          'lightblue',
          'red',
          'green',
        ],
        // borderColor: [
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(255, 206, 86, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1
  };

  return (
    <React.Fragment>
      <FirstPart />
      <SecondPart />
      <ThirdPart />

      {/* Charts */}
      {sortedCountriesCases ? 
        <section >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '90vx', maxHeight: '90vh', marginTop: '30vh'}}>
            <DoughnutChart countriesData={sortedCountriesCases} />
          </div>
          <h1 style={{textAlign: 'center', marginTop: '30vh', fontSize: '2rem'}}>COVID-19 cases (World)</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '95vx', maxHeight: '95vh'}}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </section> : <p class="loading" style={{ textAlign: 'center', fontSize: '10rem' }}></p>}

      {/* <section>
        {worldActiveCases ? <Bar data={barData} options={barOptions}></Bar> : <p class="loading" style={{ fontSize: '2rem' }}></p>}
      </section> */}
    </React.Fragment>
  )
};

export default Charts;
