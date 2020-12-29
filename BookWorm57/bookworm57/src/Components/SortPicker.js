import React from "react";
import Select from 'react-select';

const Picker = (props) => {
  return (<div style={{alignItems:"center", marginLeft:420, marginRight:420, marginTop:20}}>
    <Select
    //style={{alignItems:"center", marginLeft:400, marginRight:400, marginTop:20}}
    value={props.selectedValue}
    options={props.data}
    onChange={props.handleChange}
    placeholder="Sort By"
    />
    </div>
  );
};
export default Picker;