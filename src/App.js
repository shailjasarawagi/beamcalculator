import React from 'react';
import Form from "./components/Form/form";
import './App.css';
import {Header} from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
       <Header size="large" style={{ marginTop:"30px" }}>Beam Calculator</Header>
     <Form />
    </div>
  );
}

export default App;
