import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import { Message, Segment, Icon } from 'semantic-ui-react';
import './beamform.css';

class Beamform extends Component {

  state = {
    formData: data.default,
    modalopen: false,
    modalInput: {},
    modalIdentity: '',
    modalId: null,
    crossmodalData: {},
    loadmodalData: {},
    addedmodalName: ''
  }

  modalclose = () => {
    console.log("shailja");
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  crossAdd = (event, modaldata, name) => {
    const updatedmodalData = {
      [name]: {
        ...modaldata
      }
    };
    this.setState({ crossmodalData: updatedmodalData, modalopen: false });
  }

  loadAdd = (event, modaldata, name) => {
    const updatedmodalData = {
      ...this.state.loadmodalData,
      [name]: {
        ...modaldata
      }
    };
    console.log(updatedmodalData)
    this.setState({ loadmodalData: updatedmodalData, modalopen: false });
  }

  checkValidity = (value, rules) => {
    let isvalid = true;
    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;
    }
    return isvalid;
  }

  inputChangeHandler = (event, inputIdentifier) => {
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

  onclick = (event, modalContent, Identity, id) => {
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity, modalId: id });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const form = formElementsArray.map(formElement => {
      return <div key={formElement.id}>
        <Input elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          key={formElement.id}
          label={formElement.config.label}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(e) => this.inputChangeHandler(e, formElement.id)}
          selectChanger={this.selectChanger}
        />
        <br />
      </div>
    });

    const crossArray = [];
    for (let key in this.state.crossmodalData) {
      crossArray.push({
        id: key,
        config: this.state.crossmodalData[key]
      });
    }
    const loadArray = [];
    for (let key in this.state.loadmodalData) {
      loadArray.push({
        id: key,
        config: this.state.loadmodalData[key]
      });
    }
    const arr = crossArray.map(ele => {
      return <Segment key={ele.id} raised>{ele.id}
        <span className="float-right">
          <Icon name='edit' size='large' /><Icon name='delete' size='large' />
        </span></Segment>
    });

    const loadArr = loadArray.map(ele => {
      return <Segment key={ele.id} raised>{ele.id}
        <span className="float-right">
          <Icon name='edit' size='large' /><Icon name='delete' size='large' />
        </span></Segment>
    });

    return (
      <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">

          {form}

          <Message info color="blue" className="message">
            <Message.Header className="messageheader">Setting CrossSection Data</Message.Header>
            <hr style={{ border: '1px solid ' }} />

            <CrossSection modalclose={this.modalclose}
              addFunction={this.crossAdd} val={this.state.formData}
              modalopen={this.state.modalopen} onclick={this.onclick}
              modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
              modalId={this.state.modalId} />

            {Object.keys(this.state.crossmodalData).length === 0 ? <p>CrossSection is not defined.</p> : <div>{arr}</div>}

          </Message>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">

          <Message info color="blue" className="message">
            <Message.Header className="messageheader">Setting Loading Data</Message.Header>
            <hr />
            <LoadingSection modalclose={this.modalclose} addFunction={this.loadAdd}
              modalopen={this.state.modalopen} onclick={this.onclick} val={this.state.formData}
              modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
              modalId={this.state.modalId} />

            {Object.keys(this.state.loadmodalData).length === 0 ? <p>Load is not defined.</p> : <div>{loadArr}</div>}
          </Message>
        </div>
      </div>
    );
  }
}
export default Beamform;