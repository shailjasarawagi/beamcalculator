import React, { Component } from "react";
import Modal from '../../Container/Modal/modal';
import { Image, Grid, Popup, Message, Segment, Icon } from "semantic-ui-react";
// import * as crosssectionelements from "../../JSONfiles/crosssection.json";

class CrossSection extends Component {


  render() {

    const ElementsArray = [];
    const crossSection = this.props.crossData;
    for (let key in crossSection) {
      ElementsArray.push({
        id: key,
        config: crossSection[key]
      });
    };

    const cElements = ElementsArray.map(cElement => (
      <Grid.Column width={4} key={cElement.config.name}>
        <Popup content={cElement.config.name} position='top center'
          size='tiny' inverted trigger={
            <Image key={cElement.config.name} onClick={(e) => { this.props.onclick(e, cElement.config, cElement.config.name, "CrossSection") }}
              size="medium" src={require(`../../assets/${cElement.config.Location}`)} alt={cElement.config.name} />
          } />
      </Grid.Column>
    ));


    const crossArray = [], crossArray1 = [];
    for (let key in this.props.crossmodalData) {
      crossArray.push({
        id: key,
        config: this.props.crossmodalData[key]
      });
    }
    const arr = crossArray.map(ele => {
      for (let key in ele.config) {
        crossArray1.push({
          id: key,
          config: ele.config[key]
        });
      }
      const crossArrayEle = crossArray1.map(ele1 => (<div key={ele1.id}>{ele1.config.label}={ele1.config.value}</div>));
      return <Segment key={ele.id} raised><b>{ele.id}</b>{crossArrayEle}
        <span className="floatright1">
          <Popup content="Edit" position='top center'
            size='tiny' inverted trigger={
              <Icon name='edit' size='large' circular={true} onClick={(e, id) => { this.props.editCrossModalData(e, ele.config, ele.id, "CrossSection") }} />} />
          <Popup content="Delete" position='top center'
            size='tiny' inverted trigger={<Icon color="red" circular={true} name='delete' size='large' onClick={(e) => { this.props.deleteCrossModalData(e, ele.id) }} />} />
        </span></Segment>
    });
    return (
      <div>
        <Message color="blue" className="message" style={{ backgroundColor: "#90c1d7" }}>
          <Message.Header className="messageheader">Setting CrossSection Data</Message.Header>
          <hr style={{ border: '1px solid ' }} />
          <Grid>
            <Grid.Row>
              {cElements}
            </Grid.Row>
          </Grid>
          {Object.keys(this.props.crossmodalData).length === 0 ? <p>CrossSection is not defined.</p> : <div>{arr}</div>}
        </Message>
        {(this.props.modalopen && (this.props.modalId === "CrossSection")) ? <Modal
          val={this.props.val}
          modalInput={this.props.modalInput}
          modalopen={this.props.modalopen}
          modalclose={this.props.modalclose}
          addFunction={this.props.addFunction}
          identity={this.props.Identity}
          editValid={this.props.editValid}
          formReset={this.props.formReset} />
          : null}
      </div>
    );
  }
}
export default CrossSection;