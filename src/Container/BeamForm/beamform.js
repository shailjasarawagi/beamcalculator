import React, { Component } from "react";
import * as data from '../../JSONfiles/form.js';
import CrossSection from '../../Components/CrossSection/crosssection';
import LoadingSection from '../../Components/LoadingSection/loadingsection';
import Input from '../../Components/UI/Input/input';
import { Message, Segment, Icon, Grid, Container, Button } from 'semantic-ui-react';
import './beamform.css';
import * as loadingsectionelements from "../../JSONfiles/loadingsection.json";
import * as crosssectionelements from "../../JSONfiles/crosssection.json";
import Swal from "sweetalert2";
import Axios from '../../hoc/Axios-orders';
import { checkValidity } from '../../Functions/index'
import D3Chart from '../../Components/chart/chart';

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
    shearforce: {},
    bendingmoment: {},
    distance: {},
    deflection: {},
    show: false,
    newid: null
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
    console.log("idsss", id)
    let newId = null;
    if (id !== null && !editV) {
      newId = this.modalId
      this.modalId = this.modalId + 1;
    }
    else {
      newId = id
    }
    const updatedmodalData = {
      ...this.state.loadmodalData,

      [newId]: {
        name,
        ...modaldata
      }
    };
    console.log("modal", updatedmodalData)



    this.setState({ loadmodalData: updatedmodalData, modalopen: false }, () => {
      console.log("modaldata", this.state.loadmodalData)
    });
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
    console.log("cross", this.state.crossmodalData)
    this.setState(
      prevState => (
        {
          modalopen: true, modalId: id, modalIdentity: identity,
          editValid: true,
          modalInput:
          {
            ...prevState.modalInput,
            fields: data,
          },
        }
      ));
  }

  editLoadModalData = (e, data, id, ID) => {
    console.log("ssa load", e.target.value, data, id, ID, this.state.loadmodalData);
    let data1 = Object.values(data);
    console.log(data1[0], data1);
    let data2 = { ...data };
    delete data2.name;
    // console.log("deleted", data);
    // this.setState({ modalopen: true, modalId: id, modalIdentity: data1[0], modalInput: data });
    console.log("modal Input error", this.state.modalInput)
    this.setState(
      prevState => (
        {
          ...prevState,
          modalopen: true,
          modalId: id,
          newid: ID,
          modalIdentity: data1[0],
          editValid: true,
          modalInput:
          {
            ...prevState.modalInput,
            fields: data2,
          },
        }
      ),
      console.log("state modalinput after setstate", this.state.modalInput));
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
          'Your file has been deleted.',
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

    /* cross section*/
    let arr = [];
    // let component = "cross_section"
    let objNew = {};
    let componentName = null;
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
      // [component]:
      // {
      [componentName]: {
        ...result
      }
      // }
    }
    console.log("jsonObject", objNew)

    /**load section  */

    let arr3 = [];
    let name1 = '';
    for (let x in this.state.loadmodalData) {
      let arr2 = [];
      let newload = { ...this.state.loadmodalData[x] }
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
    }
    console.log("final array", ...arr3, typeof ([componentName]));

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
    })
      .then(response => {

        console.log(response.data);
        this.setState({
          graphResponse: true,
          show: true,
          shearforce: response.data.V, bendingmoment: response.data.Mx
          , distance: response.data.x, deflection: response.data.Yxmm
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
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
          message={formElement.config.message}
        />
        <br />
      </div>
    });

    const crossArray = [];
    const crossArray1 = [];
    console.log("crossdata", this.state.crossmodalData)
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
          <Icon name='edit' size='large' onClick={(e, id) => { this.editCrossModalData(e, ele.config, ele.id, "CrossSection") }} />
          <Icon name='delete' size='large' onClick={(e) => { this.deleteCrossModalData(e, ele.id) }} />
        </span></Segment>
    });

    const loadArray = [];
    const loadArray1 = [];
    console.log("loaddata", this.state.loadmodalData)
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

      let number_of_elements = Object.keys(loadArray[index].config).length;
      let element1 = loadArray1.slice(loadArray1.length - number_of_elements)
      const loadArrEle =
        element1.map((ele1) => (
          (ele1.config.value !== undefined ?
            <div key={ele1.id}>{ele1.id}={ele1.config.value}</div> :
            <div key={ele1.id}>{ele1.id}:<b>{ele1.config}</b></div>)));
      console.log("ee", ele.id)
      return <Segment key={ele.id} raised>{loadArrEle}
        <span className="floatright1">
          <Icon name='edit' size='large' onClick={(e) => { this.editLoadModalData(e, ele.config, "LoadingSection", ele.id) }} />
          <Icon name='delete' size='large' onClick={(e) => { this.deleteLoadModalData(e, ele.id, ele.config) }} />
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
                  modalId={this.state.modalId}
                  formReset={this.formReset}
                  crossData={this.state.crossData}
                  editValid={this.state.editValid} />
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
                  modalId={this.state.modalId}
                  newid={this.state.newid}
                  loadData={this.state.loadData}
                  editValid={this.state.editValid}
                  formReset={this.formReset} />
                {console.log("ids", this.state.loadmodalData)}
                <div className="loaddata">
                  {Object.keys(this.state.loadmodalData).length === 0 ? <p>Load is not defined.</p> : <div>{loadArr}</div>}
                </div>
              </Message>
              <Button primary disabled={!formcheck} onClick={this.solveHandler}>Solve</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {this.state.graphResponse && (
          <div>
            <br></br>
            <D3Chart x={this.state.distance} y={this.state.shearforce} xName="distance" yName="shearforce" id="sheer" />
            <br></br>
            <br></br>
            <D3Chart x={this.state.distance} y={this.state.deflection} id="deflection"
              xName="distance" yName="deflection" />
            <br></br>
            <br></br>
            <D3Chart x={this.state.distance} y={this.state.bendingmoment} id="bending"
              xName="distance" yName="bendingmoment" />
          </div>
        )}



      </Container>
    );
  }
}
export default Beamform;
