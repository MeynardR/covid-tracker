import React from 'react';

import Select, { components } from "react-select";

const Dropdown = () => {
  const options = [
    { value: "World", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }}/> <p style={{ marginLeft: '5%', fontSize: '1.1rem'}}>World</p>
        </div>
      </>
    ), color: "#FF8B00"},
    { value: "Antigua and Barbuda", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }}/> <p style={{ marginLeft: '5%', fontSize: '1.1rem'}}>Antigua and Barbuda</p>
        </div>
      </>
    ), color: "#FF8B00"},    
    { value: "Afghanistan", label: (
      <>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src='https://cdn-icons-png.flaticon.com/512/3083/3083741.png' style={{ width: '20px', height: '20px' }}/> <p style={{ marginLeft: '5%', fontSize: '1.1rem'}}>Afghanistan</p>
        </div>
      </>
    ), color: "#FF8B00"},    
  ];
  
  return (
    <React.Fragment>
      <div style={{width: '280px', fontWeight: 'bold'}}>
        <Select
          defaultValue={options[0]}
          options={options}
        />
      </div>
    </React.Fragment>
    
  );
};

export default Dropdown;