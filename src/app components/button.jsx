import React from "react";
import { useRef } from "react";

const MyButton = ({keyboardKey,audioSrc,power,volume,onPlay}) => {
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
       
        if (power && audioRef.current) {
            audioRef.current.volume = volume; // Ensure full volume
            audioRef.current.currentTime = 0; // Reset time to allow multiple clicks
            audioRef.current.play().catch(error => {
              console.error("Error playing sound:", error);
            });
           
          onPlay(audioRef.current.currentSrc.split('/').pop().split('.')[0]);
          console.log(audioRef.current.currentSrc.split('/').pop().split('.')[0]);
          }
         
        
    };

    return (
        <>
        <button style={buttonStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={playAudio} >
            {keyboardKey}
            <audio ref={audioRef} onError={() => console.error("Audio failed to load")}>
                <source src={audioSrc} type="audio/mpeg"/>
            </audio>
        </button>
        </>
    )

}

export default MyButton;