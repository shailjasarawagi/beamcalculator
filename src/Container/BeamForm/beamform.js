import React, { Component } from "react";
import * as data from '../../JSONfiles/form.json';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';

class Beamform extends Component {
  state = {
    formData: {},
    modalopen: false,
    modalInput: {},
    modalIdentity: ''
  }

  componentDidMount() {
    this.setState({ formData: data.default });
  }

  modalclose = () => {
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  modalInputChangeHandler = (event, inputIdentifier, modalIdentity, isvalid, touched, shouldValidate) => {
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
    updatedmodalElement.valid = this.checkValidity(updatedmodalElement.value, updatedmodalElement.validation)
    updatedmodalData = {
      ...this.state.modalData,
      [modalIdentity]: modalElement
    }
    this.setState({ modalData: updatedmodalData });
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
    this.setState({ formData: updatedFormData });
  }

  onclick = (event, modalContent, Identity) => {
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity });
  }

  render() {
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
            option={formElement.config.options}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
          />
        ))}
      </div>);

    return (
      <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {form}
          <br></br>
          <CrossSection modalclose={this.modalclose}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <LoadingSection modalclose={this.modalclose}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity} />
        </div>
      </div>
    );
  }
}

export default Beamform