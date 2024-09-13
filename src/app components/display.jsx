import React from "react";

const MyDisplay = ({jina}) => {
    const styleContainerDiv = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius:'5px'
    }
    return (
        <div style={styleContainerDiv}>
            <span>{" "+jina}</span>
        </div>
    )
}

export default MyDisplay;