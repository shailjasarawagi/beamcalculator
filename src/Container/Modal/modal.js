import React, { Component } from "react";
import { Modal, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';
import './modal.css';

class Modal1 extends Component {

  state = {
    formData: this.props.modalInput.fields,
    formIsValid: false
  }


  checkValidity = (value, rules) => {
    let isvalid = true;

    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;

    }

    if (rules.minLength) {
      isvalid = value >= rules.minLength && isvalid;

    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isvalid = pattern.test(value) && isvalid
    }

    if (rules.lessthanBeam) {
      isvalid = value <= this.beamLength.value && isvalid;
      console.log("hhh", isvalid)
    }
    return isvalid;
  }


  modalInputChangeHandler = (event, inputIdentifier) => {

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

    let formIsValid = true;
    for (let ele in updatedFormData) {
      formIsValid = updatedFormData[ele].valid && formIsValid;
    }

    this.setState({ formData: updatedFormData, formIsValid: formIsValid });
  }

  componentDidMount() {
    console.log("modal rendered", this.props.modalInput, this.props.identity)
  }

  render() {
    //  const buttonsubmit= this.state.formIsValid || !this.props.editValid && this.props.editValid !== this.state.formIsValid; ;
    //  console.log("button",buttonsubmit)
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
      />
    ));
console.log("before modalheader",this.props)

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
            <Button style={{ border: "#324561 !important" }} primary disabled={!this.state.formIsValid} onClick={(e) => { this.props.addFunction(e, this.state.formData, this.props.identity) }}>Add</Button>
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