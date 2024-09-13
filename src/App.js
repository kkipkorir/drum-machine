import React from 'react';
import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { togglePower,toggleBank,setName } from './actions';
import MyButton from './app components/button';
import PowerElement from './app components/powerElement';
import VolumeControl from './app components/volumeKnob';
import MyDisplay from './app components/display';
import BankControl from './app components/bankControl';
import CevH2 from './audio/Cev_H2.mp3';         // Importing each audio file
import DscOh from './audio/Dsc_Oh.mp3';
import Heater1 from './audio/Heater-1.mp3';
import Heater2 from './audio/Heater-2.mp3';
import Heater3 from './audio/Heater-3.mp3';
import Heater4 from './audio/Heater-4_1.mp3';
import Heater6 from './audio/Heater-6.mp3';
import KicknHat from './audio/Kick_n_Hat.mp3';
import RP4Kick from './audio/RP4_KICK_1.mp3';


function App() {
  const dispatch = useDispatch()
  const power = useSelector(state=>state.power);
  const name = useSelector(state=>state.name);
  const bank = useSelector(state=>state.bank);
  const [volume, setVolume] = useState(1.0)
  

  const handlePowerChange = (nextCheck) => {
    dispatch(togglePower(nextCheck));
  };

  const handleVolume = (newVol) => {
    setVolume(newVol / 100);
  };
  const handleNameChange = (newName)=>{
    dispatch(setName(newName))
  }
  const handleBankChange = () =>{
    dispatch(toggleBank())
  }

  return (
    <div className="App">
    <div className='AppContents'>
      <div className="Button-Container">
        <MyButton keyboardKey='Q' audioSrc={bank?CevH2:RP4Kick} power={power} volume={volume} onPlay={handleNameChange} />
        <MyButton keyboardKey='W' audioSrc={bank?DscOh:KicknHat} power={power} volume={volume} onPlay={handleNameChange}/>
        <MyButton keyboardKey='E' audioSrc={bank?Heater1:Heater6} power={power} volume={volume} onPlay={handleNameChange} />
        <MyButton keyboardKey='A' audioSrc={bank?Heater2:Heater4} power={power} volume={volume} onPlay={handleNameChange}/>
        <MyButton keyboardKey='S' audioSrc={bank?Heater3:CevH2} power={power} volume={volume} onPlay={handleNameChange}/>
        <MyButton keyboardKey='D' audioSrc={bank?Heater4:DscOh} power={power} volume={volume} onPlay={handleNameChange}/>
        <MyButton keyboardKey='Z' audioSrc={bank?Heater6:Heater1} power={power} volume={volume}  onPlay={handleNameChange}/>
        <MyButton keyboardKey='X' audioSrc={bank?KicknHat:Heater2} power={power} volume={volume} onPlay={handleNameChange}/>
        <MyButton keyboardKey='C' audioSrc={bank?RP4Kick:Heater3} power={power} volume={volume} onPlay={handleNameChange}/>
      </div>
      <div className='Controls-Container'>
        <PowerElement checked={power} onChange={handlePowerChange} />
        <MyDisplay jina={name} />
        {console.log(name)}
        <VolumeControl volumeChange={handleVolume} />
        <BankControl checked={bank} change={handleBankChange}/>
      </div>
      </div>
      <p style={{color:'wheat'}}><a href="https://www.linkedin.com/in/kelvin-kipkorir-a89a651b8" style={{textDecoration:'none',color:'wheat'}}>by Kkipkorir</a></p>
    </div>
  );
}

export default App;
