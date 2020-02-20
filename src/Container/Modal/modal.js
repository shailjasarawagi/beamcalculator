import React, { Component } from "react";
import { Modal, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';

class Modal1 extends Component {

  state = {
    formData: this.props.modalInput.fields
  }

  checkValidity = (value, rules) => {
    let isvalid = true;
    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;
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
    this.setState({ formData: updatedFormData });
  }

  render() {
    const beamLength = this.props.val["Length of beam"];
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

    return (
      <Modal
        style={{ marginTop: '-200px' }}
        centered={false}
        open={this.props.modalopen}
        closeIcon onClose={this.props.modalclose} >
        <Modal.Header>{this.props.identity}</Modal.Header>
        {beamLength.valid ? <><Modal.Content>
          {modalInput}
        </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.modalclose}>Cancel</Button>
            <Button primary onClick={(e) => { this.props.addFunction(e, this.state.formData, this.props.identity) }}>Add</Button>
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