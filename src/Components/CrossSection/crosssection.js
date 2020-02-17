import React, { Component } from "react";
import Input from '../../Components/UI/Input/input';
import Modal from '../../Container/Modal/modal';
import { Image, Grid } from "semantic-ui-react";
import * as crosssectionelements from "../../JSONfiles/crosssection.json";

class CrossSection extends Component {
    



    render(){
      const ElementsArray = [];
      const crossSection = crosssectionelements.default.Cross_Section;
      for (let key in crossSection) {
        ElementsArray.push({
          id: key,
          config: crossSection[key]
        });
      }
     

      const cElements = (
        <div>
          {ElementsArray.map(cElement => (
            <p>{cElement.config.name}</p>
          ))}
        </div>);
     
      
       return(
        <div >
    {cElements}
        hello
      </div>
       );
    }

  }

export default CrossSection;


 
  