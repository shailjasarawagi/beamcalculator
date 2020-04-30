import React, { Component } from 'react';
// import BeamForm from '../src/Container/BeamForm/beamform';
import './App.css';
// import Ribbon from '../src/Components/UI/Ribbon/ribbon';
// import Footer from '../src/Components/UI/Footer/footer';
import Oidc from '../src/Container/oidc/Oidc';

class App extends Component {
  render() {
    return (
      // <div className="App">
      /* <Ribbon />
      <div style={{ paddingTop: "100px" }}>
        <BeamForm />
      </div>
      <Footer /> */
      < div >
        <Oidc />
      </div >
      // </div>
    );
  }
}


export default App;

