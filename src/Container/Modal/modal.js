import React, { Component } from "react";
import { Modal, Image, Grid, Button } from 'semantic-ui-react';
import Input from '../../Components/UI/Input/input';

class Modal1 extends Component {

  state = {

  }

  componentDidMount() {

  }

  changeHandler = () => {
    console.log("hello")
  }

  render() {
    console.log(this.props.modalInput.fields)
    const modalArray = [];
    for (let key in this.props.modalInput) {
      modalArray.push({
        id: key,
        config: this.props.modalInput[key],
      });

    }
    console.log(modalArray);

    const modalInput = modalArray.map(modalElement => {
      return modalElement.config.elementType === "input" ?
        <Input elementType={modalElement.config.elementType}
          elementConfig={modalElement.config.elementConfig}
          label={modalElement.config.label}
          value={modalElement.config.value}
          key={modalElement.id}
          changed={this.changeHandler}
        /> : null
    });

    const modalImage = modalArray.map(modalElement => (
      modalElement.config.Location !== undefined ? <Image key={modalElement.id} wrapped size='small' src={require(`../../assets/${modalElement.config.Location}`)} /> : null));
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
              <Grid.Column width={8}>{modalImage}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.props.modalclose}>Cancel</Button>
          <Button primary onClick={this.props.modalInputChangeHandler}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default Modal1;