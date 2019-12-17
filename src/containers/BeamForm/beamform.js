import React, { Component } from "react";
import * as data from '../../JSONfiles/forminput.json';

this.state = {
    forminput: data.default,
};

class beamform extends Component {
    render(){
       return(
        
         <Form data={data} /> 
        
       );
    }
}
export default beamform
