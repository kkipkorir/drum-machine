import React from "react";
import { useState } from "react";
import { useRef } from "react";

const MyButton = (props) => {
    const audioRef = useRef();


    const buttonStyle = {
        backgroundColor: '#333', // Dark background
        color: '#fff', // White text
        padding: '20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding shadow for depth
        transition: 'transform 0.1s ease', // For button press effect
    };


    const handleMouseDown = (e) => {
        e.target.style.transform = 'scale(0.95)';
    };

    const handleMouseUp = (e) => {
        e.target.style.transform = 'scale(1)';
    }

    const playAudio = () => {
        audioRef.current.play();
    }

    return (
        <>
        <button style={buttonStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={playAudio} >
            {props.keyboardKey}
            <audio ref={audioRef}>
                <source src={props.audiosrc} type="audio/mpeg"/>
            </audio>
        </button>
        </>
    )

}

export default MyButton;