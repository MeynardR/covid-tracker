import React, { useState } from "react";

// import ReadMore from "./ReadMore";

const RightPartCases = (props) => {

    const convertedDate = props.convertedDate;
    const worldConfirmedCases = props.worldConfirmedCases;
    const countriesCasesNamesList = props.countriesCasesNamesList;
    // const countriesCasesList = props.countriesCasesList;
    const newString = props.newString;
    const formattedList = props.formattedList;

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
    const item = lookup.findLast(item => worldConfirmedCases >= item.value);
    const test = worldConfirmedCases / item.value;
    const val = (test).toFixed(1).replace(regexp, "").concat(item.symbol);

    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    return (
        <React.Fragment>

            <section style={{ border: '2px solid rgb(231, 231, 232)', borderRadius: '8px', marginLeft: '5%' }}>
                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 4% 3% 4%', borderBottom: 'solid', borderWidth: '2px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '0.1' }}>{worldConfirmedCases}</p>
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

                     <table style={{ fontSize: '1.2rem', textAlign: 'left', paddingLeft: '30px', paddingTop: '30px', borderSpacing: '0' }}>
                        <tr style={{ height: '50px' }}>
                            <th style={{ width: '160px'}}>Country</th>
                            <th style={{ paddingLeft: '30px' }}>Cases</th>
                        </tr>
                        <tr style={{ height: '50px', fontWeight: 'bold' }}>
                            <td style={{ border: '1px solid black', borderWidth: '1px 0', borderColor: 'rgb(231, 231, 232)'}}>World</td>
                            <td style={{ border: '1px solid black', borderWidth: '1px 0 1px 1px', paddingLeft: '30px', borderColor: 'rgb(231, 231, 232)'}}>{val}</td>
                        </tr>
                        <tr>
                        <td >{countriesCasesNamesList.slice(0, visible)}</td>
                        <td >{formattedList.slice(0, visible)}</td>
                        </tr>
                    </table>

                    {/* <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.2rem', marginLeft: '2rem' }}>
                            <div>
                                <p style={{ fontWeight: 'bold' }}>Country</p>
                            </div>
                            <div style={{ border: 'solid', borderWidth: '1px 0 1px 0', borderColor: 'rgb(231, 231, 232)' }}>
                                <p style={{ fontWeight: 'bold' }}>World</p>
                            </div>
                            <div >{countriesCasesNamesList.slice(0, visible)}</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.2rem' }}>
                            <div>
                                <p style={{ fontWeight: 'bold', marginLeft: '20%', textTransform: 'capitalize' }}>{newString}</p>
                            </div>
                            <div style={{ border: 'solid', borderWidth: '1px 0 1px 1px', borderColor: 'rgb(231, 231, 232)' }}>
                                <p style={{ fontWeight: 'bold', marginLeft: '20%' }}>{val}</p>
                            </div>
                            <div >{formattedList.slice(0, visible)}</div>
=                        </div>

                    </div> */}

                    <button onClick={showMoreItems}>Load more</button>

                </div>

            </section>

        </React.Fragment>
    )
};

export default RightPartCases;
