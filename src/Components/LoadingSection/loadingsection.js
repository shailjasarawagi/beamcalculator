import React, { Component } from "react";
import Modal from '../../Container/Modal/modal';
import { Image, Grid, Popup } from "semantic-ui-react";
// import * as loadingsectionelements from "../../JSONfiles/loadingsection.json";

class LoadSection extends Component {

    render() {
        const ElementsArray = [];
        const loadSection = this.props.loadData;
        for (let key in loadSection) {
            ElementsArray.push({
                id: key,
                config: loadSection[key]
            });
        };

        const lElements = ElementsArray.map(lElement => (
            <Grid.Column width={4} key={lElement.config.name}>
                {/* {console.log("modal input",lElement.config)} */}
                <Popup content={lElement.config.name} position='top center'
                    size='tiny' inverted trigger={
                        <Image key={lElement.config.name} onClick={(e) => { this.props.onclick(e, lElement.config, lElement.config.name, "LoadingSection") }}
                            size="medium" src={require(`../../assets/${lElement.config.Location}`)} alt={lElement.config.name} />
                    } />
            </Grid.Column>
        ));

        return (
            <div >
                <Grid>
                    <Grid.Row>
                        {lElements}
                    </Grid.Row>
                </Grid>
                {console.log("hello loadingsection",this.props.newid, this.props.editValid)}
                {(this.props.modalopen && (this.props.modalId === "LoadingSection")) ? <Modal
                    modalInput={this.props.modalInput}
                    modalopen={this.props.modalopen}
                    modalclose={this.props.modalclose}
                    val={this.props.val}
                    newid={this.props.newid}
                    addFunction={this.props.addFunction}
                    identity={this.props.Identity}
                    editValid={this.props.editValid}
                    formReset={this.props.formReset}
                />
                    : null}
            </div>
        );
    }
}
export default LoadSection;