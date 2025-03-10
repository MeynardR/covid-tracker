import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const RightPartDeaths = (props) => {
    const convertedDate = props.convertedDate;
    const worldDeaths = props.worldDeaths;
    const newString = props.newString;
    const countriesArray = props.countriesArray;

    let formattedDeathsCountriesArray;

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
    let item = lookup.findLast(item => worldDeaths >= item.value);
    let test = worldDeaths / item?.value;
    
    let formattedWorldDeathsTotal = (test)?.toFixed(1).replace(regexp, "")?.concat(item.symbol);

    formattedDeathsCountriesArray = countriesArray.map(countryStat => {
            item = lookup.findLast(i => countryStat.deaths >= i.value);
            test = countryStat.deaths / item?.value;
            const deaths = (test)?.toFixed(1).replace(regexp, "")?.concat(item?.symbol);
            if(deaths === 'NaNundefined') {
                return {
                    name: countryStat.name,
                    deaths: 0
                }    
            } else {
                return {
                    name: countryStat.name,
                    deaths: deaths
                }   
            }
    });

    return (
        <React.Fragment>

            <section id="first">
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '0.1' }}>{worldDeaths}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '0.1' }}>Reported COVID-19 {newString}</p>
                    <p style={{ fontSize: '1rem', lineHeight: '1', color: '#595959' }}>{`As of ` + convertedDate}</p>
                </div>
            </section>

            <section id="second">

                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1.6rem', lineHeight: '1.3' }}>Number of COVID-19 {newString} reported to WHO</p>
                    <p style={{ fontSize: '1rem', color: '#595959', lineHeight: '.1' }}>{`As of ` + convertedDate}</p>
                </div>

                <InfiniteScroll
                dataLength={formattedDeathsCountriesArray.length} 
                //This is important field to render the next data
                // next={fetchData}
                hasMore={true}
                height={350}
                >
                    <table id="table">
                        <tbody>
                            <tr>
                                <th>Country</th>
                                <th>Cases</th>
                            </tr>
                            <tr>
                                <td>World</td>
                                <td>{formattedWorldDeathsTotal}</td>
                            </tr>
                            {formattedDeathsCountriesArray.map((item, index) => {
                                return(
                                    <tr key={index} style={{ height: '7vh', textAlign: 'left'}}>
                                        <td style={{ border: '1px solid black', borderWidth: '1px 0 0 0', borderColor: 'rgb(231, 231, 232)'}}>{item.name}</td>
                                        <td style={{ border: '1px solid black', borderWidth: '1px 0 0 1px', borderColor: 'rgb(231, 231, 232)', paddingLeft: '10%'}}>
                                            {item.deaths}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </InfiniteScroll>
                

            </section>

        </React.Fragment>
    )
};

export default RightPartDeaths;
