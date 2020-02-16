import React from 'react';
// import Form from "./components/Form/form";
import './App.css';
// import {Header} from 'semantic-ui-react';
import Ribbon from '../src/components/navigation/Toolbar/Ribbon';
import Footer from '../src/components/navigation/Footer/Footer';
import BeamForm from '../src/containers/BeamForm/beamform';

function App() {
  return (
    <div className="App">
       <Ribbon/>
       <div style={{paddingTop:"100px"}}>
        <BeamForm/>
        
       </div>
     <Footer/>
    </div>
  );
}

export default App;
