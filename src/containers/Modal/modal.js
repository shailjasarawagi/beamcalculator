import React, { Component } from "react";
import * as data from "../../JSONfiles/modal.json";
import { Modal, Image} from 'semantic-ui-react';
import Input from '../../components/Input/input';
// import classes from "./module.css";

class modal extends Component {
  state = {
    modalData: {}
  }

  componentDidMount() {
    // console.log(data.default[this.props.modalIdentity], "id");
    // console.log(data.default[this.props.modalIdentity], this.props.modalIdentity, data.default["Uniform Distributed Load"])
    this.setState({ modalData: data.default[this.props.modalIdentity] }, () => {
      console.log("modal in componentDidimount", this.state.modalData);
    });

  }
  

  render() {
    const modalArray = [];

    for (let key in this.state.modalData) {
      modalArray.push({
        id: key,
        config: this.state.modalData[key]
      });
    }
    console.log("Modal", modalArray);
    
    
    const modal = modalArray.map(modalElement => (
 <Modal.Content key={modalElement.id} image>

{modalElement.config.Location !== undefined?<Image wrapped size='small' src={require(`../../assets/${modalElement.config.Location}`)}/>:null}

 
  <Input elementType={modalElement.config.elementType}
                  label={modalElement.config.label}   />

    </Modal.Content>
    ));


    return (
      <div>
        <Modal 
        style={{marginTop:"-240px"}}
        centered={false}
        open={this.props.modalopen} 
        closeIcon onClose={this.props.modalclose} 
        
       >
  <Modal.Header>{this.props.modalIdentity}</Modal.Header>
          {modal}
        </Modal>
      </div>
    );
  }
}
export default modal;