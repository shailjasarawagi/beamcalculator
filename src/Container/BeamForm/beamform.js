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
    result: {}
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
    this.setState({ crossmodalData: updatedmodalData, modalopen: false }, () => {
      console.log("cross", this.state.crossmodalData);
    });
  }


  loadAdd = (event, modaldata, name) => {

    console.log("loadAdd", modaldata)
    const updatedmodalData = {
      ...this.state.loadmodalData,
      [this.modalId]: {
        name,
        ...modaldata
      }
    };

    this.modalId = this.modalId + 1;
    this.setState({ loadmodalData: updatedmodalData, modalopen: false }, () => {
      console.log("loaddata", this.state.loadmodalData);
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
        this.setState({ crossmodalData: {} }, () => {
          console.log("cross", this.state.crossmodalData)
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  editCrossModalData = (e, data, identity, id) => {
    console.log("sls", data, id, identity, this.state.modalInput, this.state.crossmodalData);

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
      ),
      console.log("state modalinput", this.state.modalInput, this.state.crossmodalData));
  }

  editLoadModalData = (e, data, id) => {
    console.log("ssa load", data, id, this.state.loadmodalData);
    let data1 = Object.values(data);
    console.log(data1[0]);
    // delete data.name;
    let data2 = { ...data };
    delete data2.name;
    // console.log("deleted", data);
    // this.setState({ modalopen: true, modalId: id, modalIdentity: data1[0], modalInput: data });
    console.log("modal Input error", this.state.modalInput, this.state.loadmodalData)
    this.setState(
      prevState => (
        {
          ...prevState,
          modalopen: true,
          modalId: id,
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
        this.setState({ loadmodalData: deletedmodaldata }, () => {
          console.log("deleted", this.state.loadmodalData)
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }


  checkValidity = (value, rules) => {
    let isvalid = true;
    let message = {}
    if (rules.required) {
      isvalid = value.trim() !== "" && isvalid;
      message = " Please Enter the value of length"
    }
    if (rules.minLength) {
      isvalid = value >= rules.minLength && isvalid;
      message = "Please enter value greater than 0"
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isvalid = pattern.test(value) && isvalid;
      message = "Please enter numeric value";
    }
    return [isvalid, message];
  }



  inputChangeHandler = (event, inputIdentifier, val) => {
    const updatedFormData = {
      ...this.state.formData
    };
    const updatedFormElement = {
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    const formElement = {};
    formElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    console.log("valid", formElement.valid)
    updatedFormElement.valid = formElement.valid[0]
    console.log("valid2", updatedFormElement.valid);
    updatedFormElement.touched = true;
    updatedFormElement.message = formElement.valid[1];
    updatedFormData[inputIdentifier] = updatedFormElement;
    this.setState({ formData: updatedFormData }, () => {
      console.log("form", this.state.formData)
    });
  }


  onclick = (event, modalContent, Identity, id) => {
    console.log("click ", modalContent, Identity)
    this.setState({ modalopen: true, modalInput: modalContent, modalIdentity: Identity, modalId: id });
  }

  formReset = () => {
    this.setState({ editValid: false})
  }

  solveHandler = () => {
    // let cross=[];
    // let cross1=[];
    // for (let key in this.state.crossmodalData) {
    //   cross.push({
    //     id: key,
    //     config: this.state.crossmodalData[key]
    //   });
    // }
    //  for (let key in cross[0].config) {
    //   cross1.push({
    //     id: key,
    //     config: (cross[0].config)[key]
    //   });
    // }
    // console.log("solve", cross[0].id,cross1);
    
    Axios({
      method: "post",
      url: "/api/calculator/",
      data: {
        "userinput": {
          "material_Choice": this.state.formData["Material Choice"].value,
          "length_of_beam": this.state.formData["Length of beam"].value,
          "support_type": this.state.formData["Support Choice"].value,
        },
        "Cross_Section": {
            
        }
      }
    })
      .then(response => {

        console.log(response.data);
        this.setState({ result: response.data });
      })
      .catch(error => {
        // try {
        //   console.log("Error", error);
        // } catch (Exception) {}
        console.log("Error", error);
      });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    console.log("form", formElementsArray)
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

      return <Segment key={ele.id} raised>{loadArrEle}

        <span className="floatright1">
          {console.log("cross ele", ele)}

          <Icon name='edit' size='large' onClick={(e) => { this.editLoadModalData(e, ele.config, "LoadingSection") }} />
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
                  editValid={this.state.editValid}
                />

                {Object.keys(this.state.crossmodalData).length === 0 ? <p>CrossSection is not defined.</p> : <div>{arr}</div>}

              </Message>

            </Grid.Column>
            <Grid.Column width={8}>
              <Message info color="blue" className="message">
                <Message.Header className="messageheader">Setting Loading Data</Message.Header>
                <hr />
                {console.log("Modal Identity", this.state.modalIdentity)}
                <LoadingSection modalclose={this.modalclose} addFunction={this.loadAdd}
                  modalopen={this.state.modalopen} onclick={this.onclick} val={this.state.formData}
                  modalInput={this.state.modalInput} Identity={this.state.modalIdentity}
                  modalId={this.state.modalId}
                  loadData={this.state.loadData}
                  editValid={this.state.editValid}
                  formReset={this.formReset}
                />
                <div className="loaddata">
                  {Object.keys(this.state.loadmodalData).length === 0 ? <p>Load is not defined.</p> : <div>{loadArr}</div>}
                </div>
              </Message>
              <Button primary onClick={this.solveHandler}>Solve</Button>
            </Grid.Column>

          </Grid.Row>
        </Grid>


      </Container>


    );
  }
}
export default Beamform;