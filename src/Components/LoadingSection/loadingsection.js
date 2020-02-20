import React, { Component } from "react";
import Modal from '../../Container/Modal/modal';
import { Image, Grid,Popup } from "semantic-ui-react";
import * as loadingsectionelements from "../../JSONfiles/loadingsection.json";

class LoadSection extends Component {

    render() {
        const ElementsArray = [];
        const loadSection = loadingsectionelements.default.Loading_Section;
        for (let key in loadSection) {
            ElementsArray.push({
                id: key,
                config: loadSection[key]
            });
        }


        const lElements = (
            <>
                {ElementsArray.map(lElement => (

                    <Grid.Column width={4} key={lElement.config.name}>
                          <Popup content={lElement.config.name} trigger={
                     
                        <Image key={lElement.config.name} onClick={(e) => { this.props.onclick(e, lElement.config, lElement.config.name, "LoadingSection") }} size="medium" src={require(`../../assets/${lElement.config.Location}`)} alt={lElement.config.name} />
                          }/>
                    </Grid.Column>

                ))}
            </>)


        return (
            <div >
                <Grid>
                    <Grid.Row>
                        {lElements}
                    </Grid.Row>
                </Grid>
                {(this.props.modalopen && (this.props.modalId === "LoadingSection")) ? <Modal
                    modalInput={this.props.modalInput}
                    modalopen={this.props.modalopen}
                    modalclose={this.props.modalclose}
                    val={this.props.val}
                    addFunction={this.props.addFunction}
                    identity={this.props.Identity} />
                    : null}
            </div>
        );
    }

}

export default LoadSection;



