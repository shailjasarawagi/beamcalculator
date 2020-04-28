import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import { Message, Grid, Container, Button } from 'semantic-ui-react';
import './beamform.css';
import * as loadingsectionelements from "../../JSONfiles/loadingsection.json";
import * as crosssectionelements from "../../JSONfiles/crosssection.json";
import Swal from "sweetalert2";
import Axios from '../../hoc/Axios-orders';
import { checkValidity } from '../../Functions/index'
import Scene from '../../Components/Scene/scene';
import Graph from '../../Container/Graph/Graph';
class Beamform extends Component {
  state = {
    formData: data.default,
    modalopen: false,
    modalInput: {},
    modalIdentity: '',
    modalId: null,
    crossmodalData: {},
    loadmodalData: {},
    modalData: {},
    loadData: loadingsectionelements.default.Loading_Section,
    crossData: crosssectionelements.default.Cross_Section,
    editValid: false,
    newid: null,
    response: {}
  }

  componentDidMount() {
    this.modalId = 0;
  }
  modalclose = () => {
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
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
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

  loadAdd = (event, modaldata, name, valid, modalid, id, editV) => {
    let newId = null;
    if (id !== null && editV) {
      newId = id
    }
    else {
      newId = this.modalId
      this.modalId = this.modalId + 1;
    }
    const updatedmodalData = {
      ...this.state.loadmodalData,
      [newId]: {
        name,
        ...modaldata
      }
    };
    this.setState({ loadmodalData: updatedmodalData, modalopen: false });
  }

  deleteCrossModalData = (e, selectedData) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({ crossmodalData: {} })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  editCrossModalData = (e, data, identity, id) => {
    this.setState(
      prevState => (
        {
          modalopen: true, modalId: id, modalIdentity: identity, editValid: true,
          modalInput:
          {
            ...prevState.modalInput,
            fields: data,
          },
        }
      ));
  }

  editLoadModalData = (e, data, id, ID) => {
    let data1 = Object.values(data), data2 = { ...data };
    delete data2.name;
    this.setState(
      prevState => (
        {
          ...prevState,
          modalopen: true, modalId: id, newid: ID, modalIdentity: data1[0], editValid: true,
          modalInput:
          {
            ...prevState.modalInput,
            fields: data2,
          },
        }));
  }

  deleteLoadModalData = (e, selectedDataid, selectedDatavalue) => {
    const deletedmodaldata = {
      ...this.state.loadmodalData
    }
    delete deletedmodaldata[selectedDataid];
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({ loadmodalData: deletedmodaldata });
        Swal.fire(
          'Deleted!',
          'Your component has been deleted.',
          'success'
        )
      }
    })
  }

  inputChangeHandler = (event, inputIdentifier, val) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    let valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.valid = valid[0];
    updatedFormElement.touched = true;
    updatedFormElement.message = valid[1];
    updatedFormData[inputIdentifier] = updatedFormElement;
    this.setState({ formData: updatedFormData });
  }

  onclick = (event, modalContent, Identity, id) => {
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity, modalId: id });
  }

  formReset = () => {
    this.setState({ editValid: false })
  }
  solveHandler = () => {
    let arr = [], objNew = {}, componentName = null;
    for (let x in this.state.crossmodalData) {
      componentName = x;
      for (let y in this.state.crossmodalData[x]) {
        let val = this.state.crossmodalData[x][y].value;
        let yin = y.replace(/ /g, '_').toLowerCase();
        let newOb = { [yin]: val }
        arr.push(newOb)
        var result = Object.assign({}, ...arr);
      }
    }
    objNew = {
      [componentName]: {
        ...result
      }
    }
    console.log(objNew)
    /**load section  */
    let arr3 = [], name1 = '';
    for (let x in this.state.loadmodalData) {
      let arr2 = [], newload = { ...this.state.loadmodalData[x] }
      delete newload.name;
      name1 = this.state.loadmodalData[x].name;
      for (let y in newload) {
        let val = this.state.loadmodalData[x][y].value;
        let yin = y.replace(/ /g, '_').toLowerCase();
        arr2.push({ [yin]: val })
        const obj = {
          name: name1
        }
        var result1 = Object.assign({}, obj, ...arr2);
      }
      arr3.push(result1);
      console.log(arr3)
    }

    for (let y in arr3) {
      let
        m = arr3[y].distance_from_a,
        a = arr3[y].starting_point_of_udl_from_a,
        b = arr3[y].ending_point_of_udl_from_a,
        i = arr3[y].starting_point_of_load_from_a,
        j = arr3[y].ending_point_of_load_from_a
      if ((this.state.formData["Length of beam"].value < m) || (this.state.formData["Length of beam"].value < a)
        || (this.state.formData["Length of beam"].value < b) ||
        (this.state.formData["Length of beam"].value < i || (this.state.formData["Length of beam"].value < j))) {
        // console.log(alert('error'))
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Length of beam is less than component distance from point A'

        })
      }
      else {
        Axios({
          method: "post",
          url: "/api/calculator/",
          data: {
            "userinput": {
              "material_choices": this.state.formData["Material Choice"].value,
              "length_of_beam": this.state.formData["Length of beam"].value,
              "support_type": this.state.formData["Support Choice"].value,
              "cross_section": componentName,
              ...objNew,
              "load_section": [
                ...arr3
              ]
            }
          }
        }).then(response => {
          console.log(response.data);
          this.setState({ graphResponse: true, response: response.data });
        }).catch(error => {
          console.log("Error", error);
        });
      }
    }
  }

  render() {
    let formIsValid = true;
    for (let ele in this.state.formData) {
      formIsValid = this.state.formData[ele].valid && formIsValid;
    }
    let formcheck = formIsValid && (Object.keys(this.state.crossmodalData).length !== 0) && (Object.keys(this.state.loadmodalData).length !== 0);
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    const form = formElementsArray.map(formElement => {
      return <div key={formElement.id} style={{ padding: '5px' }}>
        <Input elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          key={formElement.id} label={formElement.config.label}
          value={formElement.config.value} invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation} touched={formElement.config.touched}
          changed={(e) => this.inputChangeHandler(e, formElement.id)} selectChanger={this.selectChanger}
          message={formElement.config.message} />
      </div>
    });
    return (
      <Container>
        <Scene value={this.state.formData} loadValue={this.state.loadmodalData} />
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Message info className="message">
                {form}
              </Message>
              <CrossSection modalclose={this.modalclose}
                addFunction={this.crossAdd} val={this.state.formData}
                modalopen={this.state.modalopen} onclick={this.onclick}
                modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
                modalId={this.state.modalId} formReset={this.formReset}
                crossData={this.state.crossData} editValid={this.state.editValid}
                crossmodalData={this.state.crossmodalData} editCrossModalData={this.editCrossModalData}
                deleteCrossModalData={this.deleteCrossModalData} />
            </Grid.Column>
            <Grid.Column width={8}>
              <LoadingSection modalclose={this.modalclose} addFunction={this.loadAdd}
                modalopen={this.state.modalopen} onclick={this.onclick} val={this.state.formData}
                modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
                modalId={this.state.modalId} newid={this.state.newid}
                loadData={this.state.loadData} editValid={this.state.editValid}
                formReset={this.formReset} loadmodalData={this.state.loadmodalData}
                editLoadModalData={this.editLoadModalData} deleteLoadModalData={this.deleteLoadModalData} />
              <div style={{ padding: '5px' }}>
                <Button color="green" disabled={!formcheck} onClick={this.solveHandler}>Solve</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.state.graphResponse &&
          <Graph response={this.state.response} />
        }
      </Container >
    );
  }
}
export default Beamform;