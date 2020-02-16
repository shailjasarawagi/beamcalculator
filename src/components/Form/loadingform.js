import React, { Component } from "react";
import * as data from "../../JSONfiles/selection.json";
import * as modalData from "../../JSONfiles/modal.json";
// import Input from '../Input/input';
import Modal from '../../containers/Modal/modal';
import { Image, Header, Grid } from "semantic-ui-react";
import "./form.css";

class form extends Component {
  state = {
  
    modalIdentity: "Circular Hollow",
    modalopen: false,
    imageData: [],
    modalData: {}
  }

  componentDidMount() {
    this.setState({modalData: modalData.default, imageData: data.default.Loading_Selection });
  }

  modalclose = () => {
    this.setState({ modalopen: false, modalIdentity: "" });
  }

    checkValidity(value, rules) {
      console.log("hello")
      let isValid = true;
      if (rules.required) {
          isValid = value.trim() !== '' && isValid;
      }
      
      console.log(isValid);
      return isValid;
     
  }


  modalInputChangeHandler = (event, inputIdentifier, modalIdentity,isvalid,touched,shouldValidate) => {
     
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
    updatedmodalElement.valid=this.checkValidity(updatedmodalElement.value,updatedmodalElement.validation)

    console.log(modalElement);
    updatedmodalData = {
      ...this.state.modalData,
      [modalIdentity] : modalElement
    }
    console.log(updatedmodalData,updatedmodalElement);
    this.setState({modalData:updatedmodalData},()=>{
      // console.log(this.state.modalData);
    });
   
  }

  onclick = (event, inputIdentifier, modalrender) => {
    if (modalrender === true) {
      this.setState({ modalIdentity: inputIdentifier, modalopen: true });
    }
  }
  render() {
  
  
    const image = this.state.imageData.map(imageElement => {
      return (
        <div key={imageElement.name}>
          <Grid.Column width={4}>
            {imageElement.name}
            <Image key={imageElement.name} onClick={(e) => { this.onclick(e, imageElement.name, imageElement.modal) }} size="medium" src={require(`../../assets/${imageElement.Location}`)} alt={imageElement.name} />
          </Grid.Column>
        </div>
      )
    })
    return (
       <div>
      
        <Header>Loading Selection</Header>
        <Grid>
          <Grid.Row>
            {image}
          </Grid.Row>
        </Grid>
        {this.state.modalopen ? <Modal modalIdentity={this.state.modalIdentity}
          formData={this.state.modalData[this.state.modalIdentity]}
          modalopen={this.state.modalopen}
          modalInputChangeHandler={(e, id, modalIdentity) => this.modalInputChangeHandler(e, id, modalIdentity)}
          modalclose={this.modalclose} />
          : null};
          </div>
    );
  }
}
export default form