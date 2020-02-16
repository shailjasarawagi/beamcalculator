import React, { Component } from "react";
import * as elements from "../../JSONfiles/forminput.json";
import * as data from "../../JSONfiles/selection.json";
import * as modalData from "../../JSONfiles/modal.json";
import Input from '../../components/Input/input';
import Modal from '../../containers/Modal/modal';
import { Image, Header, Grid, Popup } from "semantic-ui-react";
import "./beamform.css";

class BeamForm extends Component {
  state = {
    formData: {},
    modalIdentity: "Circular Hollow",
    modalopen: false,
    imageData: [],
    modalData: {}
  }

  componentDidMount() {
    this.setState({ formData: elements.default, modalData: modalData.default, imageData: data.default.Loading_Selection });
  }

  modalclose = () => {
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  modalInputChangeHandler = (event, inputIdentifier, modalIdentity) => {
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
    console.log(modalElement);
    updatedmodalData = {
      ...this.state.modalData,
      [modalIdentity]: modalElement
    }
    console.log(updatedmodalData);
    this.setState({ modalData: updatedmodalData }, () => {
      // console.log(this.state.modalData);
    });
  }
  inputChangeHandler = (event, inputIdentifier, modalrender) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updatedFormElement;
    // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    // console.log(updatedFormElement.valid);

    this.setState({ formData: updatedFormData });
    if (modalrender === true) {
      this.setState({ modalIdentity: event.target.value, modalopen: true });
    }
  }

  onclick = (event, inputIdentifier, modalrender) => {
    if (modalrender === true) {
      this.setState({ modalIdentity: inputIdentifier, modalopen: true });
    }
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const exceptLoadingform = (
      <div>
        {formElementsArray.map(formElement => (
          <Input elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            key={formElement.id} label={formElement.config.label}
            value={formElement.config.value}
            isvalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(e) => this.inputChangeHandler(e, formElement.id, formElement.config.modal)}
          />
        ))}
      </div>);
    const image = this.state.imageData.map(imageElement => {
      return (
        <Grid.Column width={4} key={imageElement.name}>
          <Popup content={imageElement.name} position="top center" trigger={
            <Image key={imageElement.name} centered
              onClick={(e) => { this.onclick(e, imageElement.name, imageElement.modal) }}
              size="medium" src={require(`../../assets/${imageElement.Location}`)}
              alt={imageElement.name} />
          } />
        </Grid.Column>
      )
    })
    return (
      <div>
        <div className="form">
          {exceptLoadingform}
        </div>
        <Header>Loading Selection</Header>
        <Grid centered>
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
export default BeamForm;