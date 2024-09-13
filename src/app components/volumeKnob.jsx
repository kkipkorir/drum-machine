import React from "react";
import { useState } from "react";

const VolumeControl = ({volumeChange}) => {
  // State to hold the volume value
  const [volume, setVolume] = useState(50);

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    const newVol = e.target.value;
    setVolume(newVol); // Update the volume state
    if (volumeChange) {
      volumeChange(newVol);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="volume" style={{ marginBottom: '10px', color: 'white' }}>
        Volume
      </label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        style={{ width: '150px' }}
      />
    </div>
  );
};

export default VolumeControl;
