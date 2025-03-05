import React  from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

            <section style={{ border: '2px solid rgb(231, 231, 232)', backgroundColor: 'white', borderRadius: '8px', marginLeft: '5%' }}>
                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 4% 3% 4%', borderBottom: 'solid', borderWidth: '2px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '0.1' }}>{worldConfirmedCases}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '0.1' }}>Reported COVID-19 {newString}</p>
                    <p style={{ fontSize: '1rem', lineHeight: '1', color: '#595959' }}>{`As of ` + convertedDate}</p>
                </div>
            </section>

            <section style={{ border: '2px solid rgb(231, 231, 232)', backgroundColor: 'white', borderRadius: '8px', marginLeft: '5%', marginTop: '5%'}}>

                <div style={{ fontFamily: 'Noto Sans, sans-serif', padding: '0 2% 3% 4%', borderBottom: 'solid', borderWidth: '1px', borderColor: 'rgb(231, 231, 232)' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.6rem', lineHeight: '1.3' }}>Number of COVID-19 {newString} reported to WHO</p>
                    <p style={{ fontSize: '1rem', color: '#595959', lineHeight: '.1' }}>{`As of ` + convertedDate}</p>
                </div> 
                
                <div style={{margin: '5% 5%' }}>
                    <InfiniteScroll
                    dataLength={formattedCasesCountriesArray.length} 
                    //This is important field to render the next data
                    // next={fetchData}
                    hasMore={true}
                    height={450}
                    >
                            <table style={{ fontFamily: 'Noto Sans, sans-serif', textAlign: 'left' }}>
                            <tbody>
                                <tr style={{ height: '5vh' }}>
                                    <th style={{ width: '35%', paddingBottom: '10px' }}>Country</th>
                                    <th style={{ paddingLeft: '40px', paddingBottom: '10px'}}>Cases</th>
                                </tr>
                                <tr style={{ height: '7vh', fontWeight: 'bold', textAlign: 'left' }}>
                                    <td style={{ border: '1px solid black', borderWidth: '1px 0 0 0', borderColor: 'rgb(231, 231, 232)'}}>World</td>
                                    <td style={{ border: '1px solid black', borderWidth: '1px 0 0 1px', borderColor: 'rgb(231, 231, 232)', paddingLeft: '10%'}}>{formattedWorldCasesTotal}</td>
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
