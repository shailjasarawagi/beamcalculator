import React from 'react';
import BeamForm from '../src/Container/BeamForm/beamform';
import './App.css';
import Ribbon from '../src/Components/UI/Ribbon/ribbon';
import Footer from '../src/Components/UI/Footer/footer';

function App() {
  return (
    <div className="App">
      <Ribbon />
      <div style={{paddingTop:"100px"}}>
        <BeamForm/>
        
       </div>
      <Footer />
    </div>
  );
}

export default App;
