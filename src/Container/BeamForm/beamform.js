import React, { Component } from "react";
import * as data from '../../JSONfiles/form.json';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
// import * as crosssectionelements from "../../JSONfiles/crosssection.json";
// import * as loadingsectionelement from "../../JSONfiles/loadingsection.json";
import Input from '../../Components/UI/Input/input';
// import Modal from '../Modal/modal';
// import { Image, Grid } from "semantic-ui-react";



class Beamform extends Component {
  state = {
    formData: {},
    modalopen: false,
    modalInput: {},
    modalIdentity: ''

  }


  componentDidMount() {
    this.setState({ formData: data.default }, () => {
      console.log(this.state.formData)
    });
  }

  modalclose = () => {
    this.setState({ modalopen: false, modalIdentity: "" });
  }



  modalInputChangeHandler = (event, inputIdentifier, modalIdentity, isvalid, touched, shouldValidate) => {

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
    updatedmodalElement.valid = this.checkValidity(updatedmodalElement.value, updatedmodalElement.validation)
    // console.log(modalElement);
    updatedmodalData = {
      ...this.state.modalData,
      [modalIdentity]: modalElement
    }
    // console.log(updatedmodalData,updatedmodalElement);
    this.setState({ modalData: updatedmodalData }, () => {
      // console.log(this.state.modalData);
    });

  }



  inputChangeHandler = (event, inputIdentifier) => {
    console.log(event, inputIdentifier);
    const updatedFormData = {
      ...this.state.formData
    };
    console.log(updatedFormData)
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    console.log(updatedFormElement);
    updatedFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updatedFormElement;
    updatedFormElement.touched = true;
    console.log(updatedFormElement);
    this.setState({ formData: updatedFormData });
    console.log(this.state.formData);

  }


  onclick = (event, modalContent, Identity) => {
    //  console.log('fff',modalContent);
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity });
  }



  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    //  console.log(formElementsArray);
    const form = (
      <div>
        {formElementsArray.map(formElement => (

          <Input elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            key={formElement.id}
            label={formElement.config.label}
            value={formElement.config.value}
            isvalid={!formElement.config.valid}
            option={formElement.config.options}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
          />
        ))}
      </div>);
    return (

      <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {form}
          <br></br>
          <CrossSection modalclose={this.modalclose}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <LoadingSection modalclose={this.modalclose}
            modalopen={this.state.modalopen} onclick={this.onclick}
            modalInput={this.state.modalInput} Identity={this.state.modalIdentity} />
        </div>
      </div>

    );
  }
}

export default Beamform