import React, { Component } from "react";
import { Modal, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';
import './modal.css';

class Modal1 extends Component {

  state = {
    formData: this.props.modalInput.fields,
    formIsValid: false,

  }


  checkValidity = (value, rules) => {
    let isvalid = true;
    let message = {};
    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;
      message = "Please enter the value";
    }

    // if (rules.minLength) {
    //   isvalid = value >= rules.minLength && isvalid;
    //   message = "Please enter value greater than 0"
    // }

    // if (rules.isNumeric) {
    //   const pattern = /^\d+$/;
    //   isvalid = pattern.test(value) && isvalid;
    //   message = "Please enter numeric value";
    // }

    // if (rules.lessthanBeam) {
    //   isvalid = value <= this.beamLength.value && isvalid;
    //   message = "Please enter value less than length of beam"
    // }
    return [isvalid, message];
  }


  modalInputChangeHandler = (event, inputIdentifier) => {
    this.props.formReset();

    const updatedFormData = {
      ...this.state.formData
    };

    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    const formElement = {};
    formElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    console.log("valid", formElement.valid)
    updatedFormElement.valid = formElement.valid[0]
    console.log("valid2", updatedFormElement.valid);
    updatedFormElement.touched = true;
    updatedFormElement.message = formElement.valid[1];
    updatedFormData[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let ele in updatedFormData) {
      formIsValid = updatedFormData[ele].valid && formIsValid;
    }
    this.setState({ formData: updatedFormData, formIsValid: formIsValid }, () => {
      console.log("valid456", formIsValid)
    });
  }

  componentDidMount() {
    console.log("modal rendered", this.props.modalInput, this.props.identity, this.props.modalId);
    // this.setState({ id:this.props.modalId });
  }

  componentWillUnmount() {
    this.props.formReset();
  }


  render() {
    const buttonsubmit = ((!this.state.formIsValid || !this.props.editValid)
      && (!this.state.formIsValid !== !this.props.editValid))
    console.log("formisvalid", !this.state.formIsValid);
    console.log("editvalid  compare two", !this.state.editValid);
    this.beamLength = this.props.val["Length of beam"];

    const modalArray = [];
    for (let key in this.state.formData) {
      modalArray.push({
        id: key,
        config: this.state.formData[key],
      });
    };

    const modalInput = modalArray.map(modalElement => (
      <Input elementType={modalElement.config.elementType}
        elementConfig={modalElement.config.elementConfig}
        key={modalElement.id}
        label={modalElement.config.label}
        value={modalElement.config.value}
        invalid={!modalElement.config.valid}
        shouldValidate={modalElement.config.validation}
        touched={modalElement.config.touched}
        changed={(e) => this.modalInputChangeHandler(e, modalElement.id)}
        message={modalElement.config.message}
      />
    ));
    console.log("before modalheader", this.props)

    return (
      <Modal
        style={{ marginTop: '-200px' }}
        centered={false}
        open={this.props.modalopen}
        closeIcon onClose={this.props.modalclose} >
        <Modal.Header>{this.props.identity}</Modal.Header>
        {this.beamLength.valid ? <><Modal.Content>
          {modalInput}
        </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.modalclose}>Cancel</Button>
            <Button style={{ border: "#324561 !important" }} primary disabled={!buttonsubmit} onClick={(e) => { this.props.addFunction(e, this.state.formData, this.props.identity, this.state.formIsValid) }}>Add</Button>
          </Modal.Actions></> :
          <><Modal.Content>
            Enter length of beam
          </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.props.modalclose}>Cancel</Button>
            </Modal.Actions></>}
      </Modal>
    );
  }
}
export default Modal1;