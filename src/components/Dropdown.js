import React from 'react';

import Select from "react-select";

const Dropdown = (props) => {

  // const countryNames = props.countryNames;

  // if(!!countryNames) {
  //   console.log(countryNames);
  // }

  const options = [
    { value: "World", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }} alt='' /> <p style={{ marginLeft: '5%', fontSize: '0.8rem'}}>World</p>
        </div>
      </>
    ), color: "#FF8B00"},
    { value: "Antigua and Barbuda", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }} alt='' /> <p style={{ marginLeft: '5%', fontSize: '0.8rem'}}>Antigua and Barbuda</p>
        </div>
      </>
    ), color: "#FF8B00"},    
    { value: "Afghanistan", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }} alt=''/> <p style={{ marginLeft: '5%', fontSize: '0.8rem'}}>Afghanistan</p>
        </div>
      </>
    ), color: "#FF8B00"},    
  ];
  
  return (
    <React.Fragment>
      <div>
        {/* <Select
          defaultValue={options[0]}
          options={options}
        /> */}
      </div>
    </React.Fragment>
    
  );
};

export default Dropdown;