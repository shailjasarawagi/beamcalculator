import React, { Component } from "react";
import * as elements from "../../JSONfiles/forminput.json";
import * as data from "../../JSONfiles/selection.json";
import Input from '../Input/input';
import Modal from '../../containers/Modal/modal';
import {Image,Header,Grid} from "semantic-ui-react";
import "./form.css";

class form extends Component {
  state={
    formData:{},
    modalIdentity:"",
    modalopen:false,
    imageData:[]
  }
  componentDidMount(){
    this.setState({formData:elements.default});
    this.setState({imageData:data.default.Loading_Selection},()=>{
      console.log(this.state.imageData)
    });
  }
  // keypress=(evt)=>{
  //   let charCode = (evt.which) ? evt.which : evt.keyCode;
  //   console.log("key",charCode);
  //   if ((charCode < 48 || charCode > 57))
  //       return false;
  //   return true;
  // }
  modalclose=()=>{
    this.setState({modalopen:false});
  }

  inputChangeHandler = (event,inputIdentifier,modalrender)=>{
    const updatedFormData = {
      ...this.state.formData
    };
    // console.log(event.target.value,inputIdentifier)
    const updatedFormElement = { 
      ...updatedFormData[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormData[inputIdentifier] = updatedFormElement;
    this.setState({formData:updatedFormData},()=>{
      console.log(this.state);
    });
    if(modalrender===true){
      this.setState({modalIdentity:event.target.value,modalopen:true});
    }
  }

  onclick=(event,inputIdentifier,modalrender)=>{
    console.log(event,inputIdentifier,modalrender)
    if(modalrender===true){
      this.setState({modalIdentity:inputIdentifier,modalopen:true});
    }
  }
    render(){
      const formElementsArray = [];
      console.log(elements.default);
        for (let key in this.state.formData) {
            formElementsArray.push({
                id: key,
                config: this.state.formData[key]
            });
        }
    const form =(
      <div>
    {formElementsArray.map(formElement => (
      <Input elementType={formElement.config.elementType}
             elementConfig={formElement.config.elementConfig}
             key={formElement.id} label={formElement.config.label}
             value={formElement.config.value}
             keypress={(e)=>this.keypress(e)}
             changed={(e)=>this.inputChangeHandler(e,formElement.id,formElement.config.modal)}
             /> 
    ))}
    </div>);   
   
      const  image=this.state.imageData.map(imageElement => {
       
        return(
         
        <div>
           <Grid.Column width={4}>
         {imageElement.name}
        <Image key={imageElement.name} onClick={(e)=>{this.onclick(e,imageElement.name,imageElement.modal)}} size="medium" src={require(`../../assets/${imageElement.Location}`)} alt={imageElement.name} />
        </Grid.Column>
        </div>
        )
      })
       return(
          <div>
            <div className="form">
              { form }         
            </div>
            <Header>Loading Selection</Header>
            <Grid>
           <Grid.Row>
            {image}
        </Grid.Row>
        </Grid>
    {this.state.modalopen?<Modal modalIdentity={this.state.modalIdentity}  modalopen={this.state.modalopen} modalclose={this.modalclose}/>:null};
            
          </div>
       );
    }
}
export default form