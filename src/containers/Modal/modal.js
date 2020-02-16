import React from "react";
import { Modal, Image, Grid, Button } from 'semantic-ui-react';
import Input from '../../components/Input/input';

const modal = (props) => {
  const modalId = props.modalIdentity;
  const modalArray = [];
  for (let key in props.formData) {
    modalArray.push({
      modalIdentity: props.modalIdentity,
      id: key,
      config: props.formData[key],
    });
  }
  const modalInput = modalArray.map(modalElement => {
    return modalElement.config.elementType !== "image" ?
      <Input elementType={modalElement.config.elementType}
        elementConfig={modalElement.config.elementConfig}
        label={modalElement.config.label}
        value={modalElement.config.value}
        key={modalElement.id}
        changed={(e, id, modalidentity) => props.modalInputChangeHandler(e, modalElement.id, modalId)}
      /> : null
  });
  const modalImage = modalArray.filter(item => item.config.Location).map(modalElement => (
    <Image key={modalElement.id} wrapped size='small' src={require(`../../assets/${modalElement.config.Location}`)} />));
  console.log(modalImage);
  return (
    <div>
      <Modal
        style={{ marginTop: "-240px" }}
        centered={false}
        open={props.modalopen}
        modalIdentity={props.modalIdentity}
        closeIcon onClose={props.modalclose} >
        <Modal.Header>{props.modalIdentity}</Modal.Header>
        <Modal.Content image>
          <Grid centered>
            <Grid.Row stackable columns={2}>
              <Grid.Column width={12}>{modalInput}</Grid.Column>
              <Grid.Column width={4}>{modalImage}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={props.modalclose}>Cancel</Button>
          <Button primary onClick={props.modalInputSubmit}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default modal;