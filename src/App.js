import React from 'react';
import Form from "./components/Form/form";
import './App.css';
import {Header} from 'semantic-ui-react';
import Ribbon from '../src/components/UI/Toolbar/Ribbon';
import Footer from '../src/components/UI/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Ribbon/>
       <Header size="large" style={{ marginTop:"50px" }}>Beam Calculator</Header>
     <Form />
     <Footer/>
    </div>
  );
}

export default App;
