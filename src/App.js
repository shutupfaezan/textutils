import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  function showAlert(message, type){
   setAlert({
    msg: message,
    type: type
  } )
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  }

function toggleMode(){
  if(mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor = "black"
    showAlert("Dark Mode has been enabled", "success")
    document.title = "textUtils - Dark Mode"
    setInterval(() => {
      document.title="Textutils is amazing"
     }, 2000);
     setInterval(() => {
      document.title="Install Textutils is amazing"
     }, 1500);
     
  }
  else{
   setMode("light")
   document.body.style.backgroundColor = "white"
   showAlert("light Mode has been enabled", "success")
   document.title = "textUtils - Light Mode"
  }
}

  
return (
    <>
     {/* <Navbar title="TextUtils" aboutText="About us" /> */}
     <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     < div className="container my-3">
     <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/"
          element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes>
     </div>
     </Router>
    </>
  
  );
}


export default App;
