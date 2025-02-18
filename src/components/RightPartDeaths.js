import React, { useState } from "react";

const RightPartDeaths = (props) => {

    const convertedDate = props.convertedDate;
    const worldDeaths = props.worldDeaths;
    const countriesDeathsNamesList = props.countriesDeathsNamesList;
    const countriesDeathsList = props.countriesDeathsList;
    const newString = props.newString;

    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    return (
        <React.Fragment>

            <section style={{ border: '2px solid rgb(231, 231, 232)', borderRadius: '8px', marginLeft: '5%' }}>
                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 4% 3% 4%', borderBottom: 'solid', borderWidth: '2px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '0.1' }}>{worldDeaths}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '0.1' }}>Reported COVID-19 {newString}</p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1', color: '#595959' }}>{`As of ` + convertedDate}</p>
                </div>
            </section>

            <section style={{ border: '2px solid rgb(231, 231, 232)', borderRadius: '8px', marginLeft: '5%', marginTop: '5%' }}>

                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 2% 3% 4%', borderBottom: 'solid', borderWidth: '1px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.3' }}>Number of COVID-19 {newString} reported to WHO</p>
                    <p style={{ fontSize: '1.2rem', color: '#595959', lineHeight: '.1' }}>{`As of ` + convertedDate}</p>
                </div>

                <div style={{ fontFamily: 'Noto Sans, sans-serif', borderBottom: 'solid', borderWidth: '1px', borderColor: 'rgb(231, 231, 232)' }}>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.2rem', marginLeft: '2rem' }}>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Country</p>
                            </div>
                            <div style={{ border: 'solid', borderWidth: '1px 0 1px 0', borderColor: 'rgb(231, 231, 232)' }}>
                                <p style={{ fontWeight: 'bold' }}>World</p>
                            </div>
                            <div>{countriesDeathsNamesList.slice(0, visible)}</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.2rem' }}>
                            <div>
                                <p style={{ fontWeight: 'bold', marginLeft: '20%', textTransform: 'capitalize' }}>{newString}</p>
                            </div>
                            <div style={{ border: 'solid', borderWidth: '1px 0 1px 1px', borderColor: 'rgb(231, 231, 232)' }}>
                                <p style={{ fontWeight: 'bold', marginLeft: '20%' }}>{worldDeaths}</p>
                            </div>
                            <div>{countriesDeathsList.slice(0, visible)}</div>
                        </div>

                    </div>

                    <button onClick={showMoreItems}>Load more</button>

                    {/* <ReadMore limit={countryNames.length}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Country</p>
                                <div style={{ border: 'solid', borderWidth: '1px 1px 1px 0', borderColor: 'rgb(231, 231, 232)' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>World</p>
                                </div>
                                {countriesNamesList.slice(0,6)}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '20%' }}>Cases</p>
                                <div style={{ border: 'solid', borderWidth: '1px 0 1px 1px', borderColor: 'rgb(231, 231, 232)' }}>
                                    {worldConfirmedCases ? <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '20%' }}>{worldConfirmedCases}</p> : <p class="loading" style={{ fontSize: '1.2rem', marginLeft: '20%' }}></p>}
                                </div>
                                {countriesCasesList.slice(0,6)}
                            </div>

                        </div>
                    </ReadMore> */}

                </div>

            </section>

        </React.Fragment>
    )
};

export default RightPartDeaths;
