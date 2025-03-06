import React  from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./RightPartCases.css";

const RightPartCases = (props) => {
    const convertedDate = props.convertedDate;
    const worldConfirmedCases = props.worldConfirmedCases;
    const newString = props.newString;
    const countriesArray = props.countriesArray;

    let formattedCasesCountriesArray;

    let lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "m" },
        { value: 1e9, symbol: "g" },
        { value: 1e12, symbol: "t" },
        { value: 1e15, symbol: "p" },
        { value: 1e18, symbol: "e" }
    ];
    let regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    let item = lookup.findLast(item => worldConfirmedCases >= item.value);
    let test = worldConfirmedCases / item.value;
    let formattedWorldCasesTotal = (test).toFixed(1).replace(regexp, "").concat(item.symbol);

    formattedCasesCountriesArray = countriesArray.map(countryStat => {
        item = lookup.findLast(i => countryStat.cases >= i.value);
        test = countryStat.cases / item.value;
        const cases = (test).toFixed(1).replace(regexp, "").concat(item.symbol);
        return {
            name: countryStat.name,
            cases: cases
        }
    });
    

    return (
        <React.Fragment>
            <section id="first">
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '0.1' }}>{worldConfirmedCases}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '0.1' }}>Reported COVID-19 {newString}</p>
                    <p style={{ fontSize: '1rem', lineHeight: '1', color: '#595959' }}>{`As of ` + convertedDate}</p>
                </div>
            </section>

            <section id="second">
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1.6rem', lineHeight: '1.3' }}>Number of COVID-19 {newString} reported to WHO</p>
                    <p style={{ fontSize: '1rem', color: '#595959', lineHeight: '0.1' }}>{`As of ` + convertedDate}</p>
                </div> 
                
                <div>
                    <InfiniteScroll
                    dataLength={formattedCasesCountriesArray.length} 
                    //This is important field to render the next data
                    // next={fetchData}
                    hasMore={true}
                    height={450}
                    >
                        <table id="table">
                            <tbody>
                                <tr>
                                    <th>Country</th>
                                    <th>Cases</th>
                                </tr>
                                <tr>
                                    <td>World</td>
                                    <td>{formattedWorldCasesTotal}</td>
                                </tr>
                                {formattedCasesCountriesArray.map((item, index) => {
                                    return(
                                        <tr key={index} style={{ height: '7vh', textAlign: 'left'}}>
                                            <td style={{ border: '1px solid black', borderWidth: '1px 0 0 0', borderColor: 'rgb(231, 231, 232)'}}>{item.name}</td>
                                            <td style={{ border: '1px solid black', borderWidth: '1px 0 0 1px', borderColor: 'rgb(231, 231, 232)', paddingLeft: '10%'}}>
                                                {item.cases}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </InfiniteScroll>
                </div>
                
           

            </section>

        </React.Fragment>
    )
};

export default RightPartCases;
