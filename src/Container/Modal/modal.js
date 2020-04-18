import React, { Component } from "react";
import { Modal, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';
import './modal.css';

class Modal1 extends Component {
  state = {
    formData: this.props.modalInput.fields,
    formIsValid: false,
    editTrue: false
  }

  checkValidity = (value, rules, updatedFormData) => {
    let isValid = true;
    let message = [];
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
      if (isValid === false)
        message.push("Please enter the value");
    }

    if (rules.isNumeric) {
      // const pattern = /^\d+$/;
      const pattern = /^(\d*\.)?\d+$/;

      isValid = pattern.test(value) && isValid;
      if (isValid === false)
        message.push("Please enter numeric value");
    }

    if (rules.minLength) {
      isValid = (value >= rules.minLength) && isValid;
      if (isValid === false)
        message.push("Please enter value greater than 0");
    }

    if (rules.lessthanBeam) {
      isValid = (parseFloat(value) <= parseFloat(this.beamLength.value)) && isValid;
      if (isValid === false)
        message.push("Please enter value less than length of beam");
    }



    if (rules.lessorequaltoEnding) {
      var v1 = Object.values(updatedFormData)[1]
      if (Object.values(v1)[2] !== '') {
        isValid = (parseFloat(value) <= parseFloat(Object.values(v1)[2])) && isValid;
        if (isValid === false)
          message.push("Please enter value less than or equal to ending load distance");
      }
    }

    if (rules.greaterorequaltoStarting) {
      var v = Object.values(updatedFormData)[0]
      isValid = (parseFloat(value) >= parseFloat(Object.values(v)[2])) && isValid;
      if (isValid === false)
        message.push("Please enter value greater than or equal to starting load distance");
    }
    return [isValid, message[0]];
  };

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
    formElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation, updatedFormData);
    updatedFormElement.valid = formElement.valid[0];
    updatedFormElement.touched = true;
    updatedFormElement.message = formElement.valid[1];
    updatedFormData[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let ele in updatedFormData) {
      formIsValid = updatedFormData[ele].valid && formIsValid;
    }
    this.setState({ formData: updatedFormData, formIsValid: formIsValid });
  }

  componentWillUnmount() {
    this.props.formReset();
  }
  componentDidMount() {
    this.setState({ editTrue: this.props.editValid })
  }

  render() {
    const buttonsubmit = ((!this.state.formIsValid || !this.props.editValid)
      && (!this.state.formIsValid !== !this.props.editValid));
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

    return (
      <Modal
        style={{ marginTop: '-200px' }}
        centered={false}
        open={this.props.modalopen}
        closeIcon onClose={this.props.modalclose} >
        <Modal.Header>{this.props.identity}</Modal.Header>
        {(this.beamLength.valid && parseFloat(this.beamLength.value) !== 0) ? <><Modal.Content>
          {modalInput}
        </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.modalclose} color="red">Cancel</Button>
            {/* {console.log("hello ok", this.props.newid, this.props.editValid, this.state.editTrue) */}
            {/* } */}
            <Button style={{ border: "#324561 !important" }} color="green"
              disabled={!buttonsubmit} onClick={(e) => {
                this.props.addFunction(e,
                  this.state.formData, this.props.identity, this.state.formIsValid, this.props.modalID, this.props.newid, this.state.editTrue)
              }}>Add</Button>
          </Modal.Actions></> :
          <><Modal.Content>
            Enter length of beam
          </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.props.modalclose} color="red">Cancel</Button>
            </Modal.Actions></>}
      </Modal>
    );
  }
}
export default Modal1;