import React, { Component } from "react";
import Modal from '../../Container/Modal/modal';
import { Image, Grid, Popup } from "semantic-ui-react";
import * as crosssectionelements from "../../JSONfiles/crosssection.json";

class CrossSection extends Component {

  render() {
    const ElementsArray = [];
    const crossSection = crosssectionelements.default.Cross_Section;
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

    return (
      <div >
        <Grid>
          <Grid.Row>
            {cElements}
          </Grid.Row>
        </Grid>
        {(this.props.modalopen && (this.props.modalId === "CrossSection")) ? <Modal
          val={this.props.val}
          modalInput={this.props.modalInput}
          modalopen={this.props.modalopen}
          modalclose={this.props.modalclose}
          addFunction={this.props.addFunction}
          identity={this.props.Identity} />
          : null}
      </div>
    );
  }
}
export default CrossSection;