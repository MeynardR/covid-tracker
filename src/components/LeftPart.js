import React from 'react';

import MapChart from "./MapChart";

const LeftPart = (props) => {

    const convertedDate = props.convertedDate;
    const countriesData = props.countriesData;
    const newString = props.newString;

    return (
        <React.Fragment>
            <div style={{ border: '2px solid rgb(231, 231, 232)', backgroundColor: 'white', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 3% 2% 3%', borderBottom: 'solid', borderWidth: '2px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>Number of COVID-19 {newString} reported to WHO</p>
                    <p style={{ fontSize: '1rem', lineHeight: '0.1', color: '#595959' }}>As of {convertedDate}</p>
                </div>
                <MapChart countriesData={countriesData} newString={newString}/>
            </div>
        </React.Fragment>
    )
};

export default LeftPart;
