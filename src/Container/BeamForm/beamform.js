import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import {Message} from 'semantic-ui-react';
import './beamform.css';

class Beamform extends Component {

  state = {
    formData: data.default,
    modalopen: false,
    modalInput: {},
    modalIdentity: '',
    modalId: null,
    crossmodalData: {},
    addedmodalName:''
  }

  modalclose = () => {
    console.log("shailja");
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  addFunction = (event,modaldata,name) => {
     console.log(name);
     this.setState({crossmodalData:modaldata,addedmodalName:name,modalopen:false},()=>{
       console.log("ss",this.state.crossmodalData,this.state.addedmodalName)
     })
   
     const updatedmodalData = {
       ...modaldata
     };
     console.log(updatedmodalData);
  
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updatedFormElement;
    updatedFormElement.touched = true;
    this.setState({ formData: updatedFormData }, () => {
      console.log(this.state.formData)
    });
  }

  onclick = (event, modalContent, Identity, id) => {
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity, modalId: id });
  }

  render() {
    console.log("abc")
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const form = (
      <div>
        {formElementsArray.map(formElement => {
 
          return<div> <Input elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            key={formElement.id}
           label={formElement.config.label}
            value={formElement.config.value}
            isvalid={!formElement.config.valid}
            option={formElement.config.options}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
            selectChanger={this.selectChanger}
          />
       
        <br></br>
        </div>
        })}
      </div>);


    return (
      <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
         
          {form}
          
          <Message info color="blue" className="message">
             <Message.Header className="messageheader">Setting CrossSection Data</Message.Header>
           <hr style={{border:'1px solid '}}/>
            
          <CrossSection modalclose={this.modalclose}
            addFunction={this.addFunction}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
            modalId={this.state.modalId} /></Message>
         
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
         
            <Message info color="blue" className="message">
             <Message.Header className="messageheader">Setting Loading Data</Message.Header>
           <hr/>
          <LoadingSection modalclose={this.modalclose}    addFunction={this.addFunction}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
            modalId={this.state.modalId} />
            </Message>
        </div>
      </div>
    );
  }
}
export default Beamform;