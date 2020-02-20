import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import { Message, Segment, Icon ,Grid} from 'semantic-ui-react';
import './beamform.css';

class Beamform extends Component {

  state = {
    formData: data.default,
    modalopen: false,
    modalInput: {},
    modalIdentity: '',
    modalId: null,
    crossmodalData: {},
    addedmodalName: ''
  }

  modalclose = () => {
    console.log("shailja");
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  addFunction = (event, modaldata, name) => {
    const updatedmodalData = {
      [name]: {
        ...modaldata
      }
    };
    console.log(updatedmodalData)
    this.setState({ crossmodalData: updatedmodalData, addedmodalName: name, modalopen: false });
  }

  deleteModalData=(e,selectedData)=>{
   console.log(e,selectedData);
  }

  checkValidity = (value, rules) => {
    let isvalid = true;
    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;
    }
    return isvalid;
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedFormData[inputIdentifier] = updatedFormElement;
    this.setState({ formData: updatedFormData });
  }

  onclick = (event, modalContent, Identity, id) => {
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity, modalId: id });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const form = formElementsArray.map(formElement => {
      return <div key={formElement.id}>
        <Input elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          key={formElement.id}
          label={formElement.config.label}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(e) => this.inputChangeHandler(e, formElement.id)}
          selectChanger={this.selectChanger}
        />
        <br />
      </div>
    });


    const crossArray = [];
    for (let key in this.state.crossmodalData) {
      crossArray.push({
        id: key,
        config: this.state.crossmodalData[key]
      });
    }
    console.log(crossArray)
    const arr = crossArray.map(ele => {
             
      return <Segment key={ele.id} raised>{ele.id}
            <span className="float-right">
            <Icon name='edit' size='large' /><Icon name='delete' size='large'
                      onClick={(e)=>{this.deleteModalData(e,ele.id)}}/>
            </span>
            </Segment>
              
    });

    return (
        
        <Grid stackable>
          <Grid.Row>
           
            <Grid.Column width={8}>
             
               {form}

          <Message info color="blue" className="message">
            <Message.Header className="messageheader">Setting CrossSection Data</Message.Header>
            <hr style={{ border: '1px solid ' }} />

            <CrossSection modalclose={this.modalclose}
              addFunction={this.addFunction} val={this.state.formData}
              modalopen={this.state.modalopen} onclick={this.onclick}
              modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
              modalId={this.state.modalId} />

            {Object.keys(this.state.crossmodalData).length === 0 ? <p>CrossSection is not defined.</p> : <div>{arr}</div>}

          </Message>
        
            </Grid.Column>
            <Grid.Column width={8}>

          <Message info color="blue" className="message">
            <Message.Header className="messageheader">Setting Loading Data</Message.Header>
            <hr />
            <LoadingSection modalclose={this.modalclose} addFunction={this.addFunction}
              modalopen={this.state.modalopen} onclick={this.onclick} val={this.state.formData}
              modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
              modalId={this.state.modalId} />
              

          </Message>
            </Grid.Column>
             
          </Grid.Row>
        </Grid>
      
      
       

       
    );
  }
}
export default Beamform;