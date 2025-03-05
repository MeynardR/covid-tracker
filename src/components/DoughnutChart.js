import React from "react"
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {

    const countriesData = props.countriesData;

    let countryNames = [];
    let countryCases = [];

    if (!!countriesData) {
        // console.log(countriesData);

        const countriesArray = countriesData.sort((a, b) => {
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
        }).slice(0, 10);

        // console.log(countriesArray);

        countriesArray.forEach(country => {
            return countryNames.push(country.name)
        });

        countriesArray.forEach(country => {
            return countryCases.push(country.cases)
        });

    }

    return (
        <React.Fragment>
            <div style={{ display: "block"}}>
                <h1 style={{ fontFamily: 'Noto Sans, sans-serif', fontSize: '2rem' }}>Ten Countries With Highest Number of Covid-19 cases (World)</h1>
                <Doughnut data={{
                    labels: [...countryNames],
                    datasets: [{
                        data: [...countryCases],
                        backgroundColor: ["#92C5F9", "#AFDC8F", "#B6A6E9", "#F8AE54", "#F2F2F2", "blue", "indigo", "violet", "green", "red"]
                    }]
                }} redraw={false} />
            </div>
        </React.Fragment>
    )
};

export default DoughnutChart;
