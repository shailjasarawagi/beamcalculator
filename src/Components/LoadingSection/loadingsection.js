import React, { Component } from "react";
import Modal from '../../Container/Modal/modal';
import { Image, Grid, Popup, Segment, Icon, Message } from "semantic-ui-react";
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
                <Popup content={lElement.config.name} position='top center'
                    size='tiny' inverted trigger={
                        <Image key={lElement.config.name} onClick={(e) => { this.props.onclick(e, lElement.config, lElement.config.name, "LoadingSection") }}
                            size="medium" src={require(`../../assets/${lElement.config.Location}`)} alt={lElement.config.name} />
                    } />
            </Grid.Column>
        ));

        const loadArray = [], loadArray1 = [];
        for (let key in this.props.loadmodalData) {
            loadArray.push({
                id: key,
                config: this.props.loadmodalData[key]
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
                        <div key={ele1.id}>{ele1.config.label}={ele1.config.value}</div> :
                        <div key={ele1.id}>{ele1.id}:<b>{ele1.config}</b></div>)));

            return <Segment key={ele.id} raised>{loadArrEle}
                <span className="floatright1">
                    <Popup content="Edit" position='top center'
                        size='tiny' inverted trigger={<Icon name='edit' size='large' onClick={(e) => { this.props.editLoadModalData(e, ele.config, "LoadingSection", ele.id) }} />} />
                    <Popup content="Delete" position='top center'
                        size='tiny' inverted trigger={<Icon name='delete' color="red" size='large' onClick={(e) => { this.props.deleteLoadModalData(e, ele.id, ele.config) }} />} />
                </span>
            </Segment>
        });

        return (
            <div >
                <Message info color="blue" className="message">
                    <Message.Header className="messageheader">Setting Loading Data</Message.Header>
                    <hr />
                    <Grid>
                        <Grid.Row>
                            {lElements}
                        </Grid.Row>
                    </Grid>
                    <div className="loaddata">
                        {Object.keys(this.props.loadmodalData).length === 0 ? <p>Load is not defined.</p> : <div>{loadArr}</div>}
                    </div>
                </Message>

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