import React from 'react';
import BeamForm from "./containers/BeamForm/beamform";
import './App.css';
import { Header } from 'semantic-ui-react';
import Ribbon from '../src/components/UI/Toolbar/Ribbon';
import Footer from '../src/components/UI/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Ribbon />
      <Header size="large" style={{ marginTop: "50px" }}>Beam Calculator</Header>
      <BeamForm />
      <Footer />
    </div>
  );
}

export default App;
