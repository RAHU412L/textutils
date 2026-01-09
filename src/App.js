
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';  
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  
  Route
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout((()=>{
      setAlert(null);
    }),1500);
  }
  const handleMode=()=>{
    if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor = 'rgb(4,55,112)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
    

  } 
  

  
  return (
    <>
  <Router basename="/textutils"> 
<Navbar title="textUtils" aboutText="About textUtils" mode={mode} toggleMode={handleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
        <Routes> 
         {/* /users--->component1
          /users/home--->component2 */ }
          <Route  path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode} toggleMode={handleMode}/> }/>
       </Routes>
       
  
</div>
{/* <About/> */}
</Router> 
    </>
  );
}
// bootstrap mein ek class hoti hai container jisse andar jitna bhi content hota hai wo center mein aa jata hai aur thoda margin bhi mil jata hai dono sides se
// my-3  means margin in y direction(top and bottom) with size 3

export default App;
