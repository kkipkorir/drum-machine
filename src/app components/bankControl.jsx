import React from "react";
import ReactSwitch from "react-switch";


const BankControl = ({checked,change}) => {
   
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px'
        }}>
            Bank:{checked?"InvHeater":'Heater'}
        </span>
        <ReactSwitch
            onChange={change}
            checked={checked}
            handleDiameter={20}
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

export default BankControl;