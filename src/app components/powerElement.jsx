import React from "react";
import ReactSwitch from "react-switch";

const PowerElement = ({checked,onChange}) => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px'
        }}>
            POWER
        </span>
        <ReactSwitch
            onChange={onChange}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
        />
    </div>
);
    
}
 export default PowerElement;