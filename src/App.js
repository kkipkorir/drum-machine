import logo from './logo.svg';
import './App.css';
import MyButton from './app components/button';
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
  return (
    <div className="App">
      <div className="Button-Container">
      <MyButton keyboardKey='Q' audioSrc={CevH2} />
        <MyButton keyboardKey='W' audioSrc={DscOh} />
        <MyButton keyboardKey='E' audioSrc={Heater1} />
        <MyButton keyboardKey='A' audioSrc={Heater2} />
        <MyButton keyboardKey='S' audioSrc={Heater3} />
        <MyButton keyboardKey='D' audioSrc={Heater4} />
        <MyButton keyboardKey='Z' audioSrc={Heater6}/>
        <MyButton keyboardKey='X' audioSrc={KicknHat} />
        <MyButton keyboardKey='C' audioSrc={RP4Kick} />
      </div>
    </div>
  );
}

export default App;
