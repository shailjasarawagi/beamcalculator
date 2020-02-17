import React from "react";
import { Modal, Image, Grid, Button } from 'semantic-ui-react';
 import Input from '../../Components/UI/Input/input';

const modal = (props) => {
 
   const modalArray = [];
   for (let key in props.modalInput) {
    modalArray.push({
       id: key,
       config: props.modalInput[key],
     });
    console.log(modalArray);
   }
   
   const modalInput = modalArray.map(modalElement => {
     return modalElement.config.elementType === "input" ?
    <Input elementType={modalElement.config.elementType}
       elementConfig={modalElement.config.elementConfig}
        label={modalElement.config.label}
         value={modalElement.config.value}
        key={modalElement.id}
       /> : null
   });


   const modalImage = modalArray.map(modalElement => (
    modalElement.config.Location !== undefined ? <Image key={modalElement.id} wrapped size='small' src={require(`../../assets/${modalElement.config.Location}`)} /> : null));

  return (
    <div>
      <Modal
        centered={false}
        open={props.modalopen}
        closeIcon onClose={props.modalclose} >
        <Modal.Header>{props.identity}</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
               <Grid.Column width={8}>{modalInput}</Grid.Column> 
               <Grid.Column width={8}>{modalImage}</Grid.Column> 
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={props.modalclose}>Cancel</Button>
          <Button primary onClick={props.modalInputChangeHandler}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
 }
 export default modal;
          
