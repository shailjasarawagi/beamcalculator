import React, { Component } from "react";
import { Modal, Grid, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';

class Modal1 extends Component {

  state = {
    formData: this.props.modalInput.fields
  }

  modalInputChangeHandler = (event, inputIdentifier) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updatedFormElement;
    updatedFormElement.touched = true;
    console.log(updatedFormData)
    this.setState({ formData: updatedFormData }, () => {
      console.log(this.state.formData)
    });
  }

  render() {
    console.log(this.props)
    const modalArray = [];
    for (let key in this.state.formData) {
      modalArray.push({
        id: key,
        config: this.state.formData[key],
      });

    }

    const modalInput = (
      <div>
        {modalArray.map(modalElement => (
          <Input elementType={modalElement.config.elementType}
            elementConfig={modalElement.config.elementConfig}
            key={modalElement.id}
            label={modalElement.config.label}
            value={modalElement.config.value}
            isvalid={!modalElement.config.valid}
            shouldValidate={modalElement.config.validation}
            touched={modalElement.config.touched}
            changed={(e) => this.modalInputChangeHandler(e, modalElement.id)}
          />
        ))}
      </div>);

    // const modalImage = modalArray.map(modalElement => (
    //   modalElement.config.Location !== undefined ? <Image key={modalElement.id} wrapped size='small' src={require(`../../assets/${modalElement.config.Location}`)} /> : null));
    return (
      <Modal
        centered={false}
        open={this.props.modalopen}
        closeIcon onClose={this.props.modalclose} >
        <Modal.Header>{this.props.identity}</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>{modalInput}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.props.modalclose}>Cancel</Button>
          <Button primary onClick={this.props.addFunction}>Add</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Modal1;