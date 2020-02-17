import React, { Component } from "react";
import * as data from '../../JSONfiles/form.json';
import CrossSection from '../../Components/CrossSection/crosssection';
// import LoadingSection from '../../Components/LoadingSection/loadingsection';
import * as crosssectionelements from "../../JSONfiles/crosssection.json";
// import * as loadingsectionelement from "../../JSONfiles/loadingsection.json";
import Input from '../../Components/UI/Input/input';
// import Modal from '../Modal/modal';
// import { Image, Grid } from "semantic-ui-react";



class Beamform extends Component {
    state = {
        formData: {},
        crossData:{},
        modalopen: false,
      }

      componentDidMount() {
        console.log("fff");
        this.setState({ formData: data.default});
      }
    
      modalclose = () => {
        this.setState({ modalopen: false, modalIdentity: "" });
      }
    
        
    
      modalInputChangeHandler = (event, inputIdentifier, modalIdentity,isvalid,touched,shouldValidate) => {
         
        let updatedmodalData = {
          ...this.state.modalData
        };
    
        const modalElement = {
          ...updatedmodalData[modalIdentity]
        }
    
        const updatedmodalElement = {
          ...modalElement[inputIdentifier]
        };
    
        updatedmodalElement.value = event.target.value;
        modalElement[inputIdentifier] = updatedmodalElement;
        updatedmodalElement.touched = true;
        updatedmodalElement.valid=this.checkValidity(updatedmodalElement.value,updatedmodalElement.validation)
        // console.log(modalElement);
        updatedmodalData = {
          ...this.state.modalData,
          [modalIdentity] : modalElement
        }
        // console.log(updatedmodalData,updatedmodalElement);
        this.setState({modalData:updatedmodalData},()=>{
          // console.log(this.state.modalData);
        });
       
      }
      
     
     
      inputChangeHandler = (event, inputIdentifier, modalrender) => {
        const updatedFormData = {
          ...this.state.formData
        };
        const updatedFormElement = {
          ...updatedFormData[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormData[inputIdentifier] = updatedFormElement;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        console.log(updatedFormElement);
        this.setState({ formData: updatedFormData});
        if (modalrender === true) {
          this.setState({ modalIdentity: event.target.value, modalopen: true });
        }
      }
    
    
      onclick = (event, inputIdentifier, modalrender) => {
        if (modalrender === true) {
          this.setState({ modalIdentity: inputIdentifier, modalopen: true });
        }
      }
    

    render(){
        const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const form = (
      <div>
        {formElementsArray.map(formElement => (
           
          <Input elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            key={formElement.id} 
            label={formElement.config.label}
            value={formElement.config.value}
            isvalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(e) => this.inputChangeHandler(e, formElement.id, formElement.config.modal)}
          />
        ))}
      </div>);
       return(
        
        <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
            {form}
            <CrossSection  crossData={this.state.crossData} modalclose={this.modalclose}
            modalopen={this.state.modalopen} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
         hello
        </div>
    </div>
        
       );
    }
}

export default Beamform