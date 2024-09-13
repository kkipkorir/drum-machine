import React from 'react';
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { togglePower, toggleBank, setName } from './actions';
import MyButton from './app components/button';
import PowerElement from './app components/powerElement';
import VolumeControl from './app components/volumeKnob';
import MyDisplay from './app components/display';
import BankControl from './app components/bankControl';
import CevH2 from './audio/Cev_H2.mp3';
import DscOh from './audio/Dsc_Oh.mp3';
import Heater1 from './audio/Heater-1.mp3';
import Heater2 from './audio/Heater-2.mp3';
import Heater3 from './audio/Heater-3.mp3';
import Heater4 from './audio/Heater-4_1.mp3';
import Heater6 from './audio/Heater-6.mp3';
import KicknHat from './audio/Kick_n_Hat.mp3';
import RP4Kick from './audio/RP4_KICK_1.mp3';
import Crystal from './audio/otherSounds/crystal.mp3';
import Guitar from './audio/otherSounds/guitar.mp3';
import Scratch from './audio/otherSounds/scratch.mp3';
import Acoustic from './audio/otherSounds/acoustic.mp3';

function App() {
  const dispatch = useDispatch();
  const power = useSelector(state => state.power);
  const name = useSelector(state => (state.power ? state.name : ""));
  const bank = useSelector(state => state.bank);
  const [volume, setVolume] = useState(1.0);

  const handlePowerChange = (nextCheck) => {
    dispatch(togglePower(nextCheck));
  };

  const handleVolume = (newVol) => {
    setVolume(newVol / 100);
  };

  const handleNameChange = (newName) => {
    dispatch(setName(newName));
  };

  const handleBankChange = (newBank) => {
    dispatch(toggleBank(newBank));

    // Stop all audio playback and reset audio sources
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  return (
    <div className="App" id='drum-machine'>
      <div className='AppContents'>
        <div className="Button-Container">
          <MyButton
            key={`button-Q-${bank}`}
            keyboardKey='Q'
            audioSrc={bank ? CevH2 : Crystal}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-W-${bank}`}
            keyboardKey='W'
            audioSrc={bank ? DscOh : Acoustic}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-E-${bank}`}
            keyboardKey='E'
            audioSrc={bank ? Heater1 : Guitar}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-A-${bank}`}
            keyboardKey='A'
            audioSrc={bank ? Heater2 : Scratch}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-S-${bank}`}
            keyboardKey='S'
            audioSrc={bank ? Heater3 : Crystal}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-D-${bank}`}
            keyboardKey='D'
            audioSrc={bank ? Heater4 : Guitar}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-Z-${bank}`}
            keyboardKey='Z'
            audioSrc={bank ? Heater6 : Acoustic}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-X-${bank}`}
            keyboardKey='X'
            audioSrc={bank ? KicknHat : Scratch}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
          <MyButton
            key={`button-C-${bank}`}
            keyboardKey='C'
            audioSrc={bank ? RP4Kick : Acoustic}
            power={power}
            volume={volume}
            onPlay={handleNameChange}
          />
        </div>
        <div className='Controls-Container'>
          <PowerElement checked={power} onChange={handlePowerChange} />
          <MyDisplay key={`display-${power}-${name}`} jina={name} />
          <VolumeControl volumeChange={handleVolume} />
          <BankControl checked={bank} change={handleBankChange} />
        </div>
      </div>
      <p style={{ color: 'wheat' }}>
        <a href="https://www.linkedin.com/in/kelvin-kipkorir-a89a651b8" style={{ textDecoration: 'none', color: 'wheat' }}>
          by Kkipkorir
        </a>
      </p>
    </div>
  );
}

export default App;
