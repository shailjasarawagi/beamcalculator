/**
 * This is main page of our project that display the Ribbon ,sidedwrawer ,submenu and properties in main page 
 */
import React, { Component } from 'react';
import Aux from '../../hoc/Dux';
import Ribbon from '../../Components/UI/Ribbon/ribbon';
import BeamForm from '../../Container/BeamForm/beamform';
import Footer from '../../Components/UI/Footer/footer';
class Beam extends Component {

    /**Display Submenu and Properties component */
    render() {
        return (
            /**Display Ribbon ,sidedrawer ,menu, submenu and its properties in main
             *  using props of  submenu and sidedrawer and displays pipingdb logo */
            <Aux>
                <Ribbon />
                <div style={{ paddingTop: "100px" }}>
                    <BeamForm />
                </div>
                <Footer />
            </Aux>
        );
    }
}

export default Beam;