import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import { Message, Segment, Icon, Grid, Container } from 'semantic-ui-react';
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
  }

  modalclose = () => {
    console.log("shailja");
    this.setState({ modalopen: false, modalIdentity: "" });
  }

  selectChanger = (e, data) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[data.label]
    };
    updatedFormElement.value = data.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedFormData[data.label] = updatedFormElement;
    this.setState({ formData: updatedFormData });
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
      },

    };

    console.log(updatedmodalData)
    this.setState({ loadmodalData: updatedmodalData, modalopen: false });
  }


  deleteCrossModalData = (e, selectedData) => {
    console.log(e, selectedData);
    console.log("ssa", this.state.crossmodalData);
    this.setState({ crossmodalData: {} }, () => {
      console.log("cross", this.state.crossmodalData)
    })

  }

  deleteLoadModalData = (e, selectedData, i) => {

    console.log(e, selectedData, i);
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
    const crossArray1 = [];
    for (let key in this.state.crossmodalData) {
      crossArray.push({
        id: key,
        config: this.state.crossmodalData[key]
      });
    }
    const arr = crossArray.map(ele => {
      for (let key in ele.config) {
        crossArray1.push({
          id: key,
          config: ele.config[key]
        });
      }

      const crossArrayEle = crossArray1.map(ele1 => (<div key={ele1.id}>{ele1.id}={ele1.config.value}</div>));

      return <Segment key={ele.id} raised><b>{ele.id}</b>{crossArrayEle}
        <span className="floatright1">
          <Icon name='edit' size='large' /><Icon name='delete' size='large'
            onClick={(e) => { this.deleteCrossModalData(e, ele.id) }} />
        </span></Segment>
    });



    const loadArray = [];
    const loadArray1 = [];

    for (let key in this.state.loadmodalData) {
      loadArray.push({
        id: key,
        config: this.state.loadmodalData[key]
      });
    }

    const loadArr = loadArray.map((ele, index) => {

      for (let key in ele.config) {
        loadArray1.push({
          id: key,
          config: ele.config[key]
        });
      }

      console.log(loadArray, loadArray1);
      const loadArrEle = loadArray1.map(ele1 => (<div key={ele1.id}>{ele1.id}={ele1.config.value}</div>));

      return <Segment key={ele.id} raised><b>{ele.id}</b>{loadArrEle}

        <span className="floatright">
          <Icon name='edit' size='large' /><Icon name='delete' size='large'
            onClick={(e) => { this.deleteLoadModalData(e, ele.id) }} />
        </span>
      </Segment>

    });


    return (
      <Container>
        <Grid stackable>
          <Grid.Row>

            <Grid.Column width={8}>

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

            </Grid.Column>
            <Grid.Column width={8}>

              <Message info color="blue" className="message">
                <Message.Header className="messageheader">Setting Loading Data</Message.Header>
                <hr />
                <LoadingSection modalclose={this.modalclose} addFunction={this.loadAdd}
                  modalopen={this.state.modalopen} onclick={this.onclick} val={this.state.formData}
                  modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
                  modalId={this.state.modalId} />

                {Object.keys(this.state.loadmodalData).length === 0 ? <p>Load is not defined.</p> : <div>{loadArr}</div>}
              </Message>
            </Grid.Column>

          </Grid.Row>
        </Grid>


      </Container>


    );
  }
}
export default Beamform;