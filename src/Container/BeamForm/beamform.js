import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';

class Beamform extends Component {

  state = {
    formData: data.default,
    modalopen: false,
    modalInput: {},
    modalIdentity: '',
    modalId: null
  }

  modalclose = () => {
    console.log("shailja");
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  addFunction = () => {
    console.log("shailja");
    //  this.setState({ modalopen: false});
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
          return <Input elementType={formElement.config.elementType}
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
        })}
      </div>);

    return (
      <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {form}
          <br></br>
          <CrossSection modalclose={this.modalclose}
            addFunction={this.addFunction}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
            modalId={this.state.modalId} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <LoadingSection modalclose={this.modalclose} modaladd={this.modaladd}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
            modalId={this.state.modalId} />
        </div>
      </div>
    );
  }
}
export default Beamform;