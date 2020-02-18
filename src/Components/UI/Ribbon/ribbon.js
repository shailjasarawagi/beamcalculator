/**
 * This component display the two ribbons in main page ,One for platform menus and other for app menu
 */

import React, { Component } from 'react';
import './ribbon.css';
import Logo from '../Logo/logo';
import Logo4 from '../Logo/logo4';
import { Dropdown, Menu, Icon, Search } from 'semantic-ui-react';

import image from '../../../assets/shifu1.jpeg';


/** Options for the mobileview for platform menu */
const mobileoptions = [
    { key: '1', value: 'myapps', text: 'My Apps' },
    { key: '2', value: 'forum/forum/pipingdb-2', text: 'Forum' },
    { key: '3', value: 'support', text: 'Support' },
    { key: '4', value: 'profile', text: 'My Dashboard' },
    { key: '5', value: 'logout', text: 'Logout' }
]

/** Options for the desktopview for platform menu */
const desktopoptions = [
    { key: '1', value: 'profile', text: 'My Dashboard' },
    { key: '2', value: 'logout', text: 'Logout' }
]

class Ribbons extends Component {

    state = {
        url: null,
        redirect: false,
        topmenudisplay: true,
        action: ''
    }

    /**Collapse second menu(app menu) when button is clicked */
    collapse = () => {
        this.setState({ topmenudisplay: !this.state.topmenudisplay }, () => {
            // console.log(this.state.topmenudisplay);
        });

    }

    /**Redirect the url according to necessity */
    redirector = (event, data) => {
        if (data.value === "logout") {
            this.onLogOut();
        } else {
            const calcgen = process.env.REACT_APP_CALCGEN_URL;
            // console.log("hello", data.value);
            const url = `${calcgen}${data.value}`;
            // console.log(url);
            this.setState({ redirect: true, url: url });
        }

    }

    /**Logout from website */
    onLogOut = () => {
        // try {
        //     localStorage.removeItem("token");
        //     window.open("https://calcgen.com", '_self');
        // } catch (error) {
        //     console.log(error);
        // }
    }

    /** Display two menu one platform and other app.
     * In platform menu there is website logo ,search button and moving to platform dashborad option in both desktopview and mobileview .
     * In App menu there is app logo and app menus both in mobileview and desktopview*/

    render() {
        const hide = {
            display: "none",
            opacity: "0.0"
        }
        const show = {
            opacity: "1.0",
        }

        const image1 = (
            <img
                style={{ borderRadius: "50%", height: "25px", width: "25px" }}
                alt="user"
                src={image}
            />
        );
        const calcgenurl = process.env.REACT_APP_CALCGEN_URL;
        if (this.state.redirect && this.state.url !== null) {
            // console.log(this.state,"hello");
            window.location = this.state.url;
        }
        return (
            <div style={{ position: "fixed", width: "100%", zIndex: "50" }}>
                <div className="desktopmenu">
                    <Menu attached='top' borderless style={this.state.topmenudisplay ? show : hide} className="toplevelmenu">

                        <Menu.Menu position="left">
                            <Menu.Item><div className="logo" draggable="false"
                                style={{ userSelect: "none" }}>
                                <a href={calcgenurl}><Logo /></a>
                            </div>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Search size="mini" className="search1"
                                />
                                {/* <Form.Input icon='search'
                                style={{ width: "30rem" }}
                                placeholder='Search...' /> */}
                            </Menu.Item>
                            <Menu.Item href={calcgenurl + "myapps"}>My Apps</Menu.Item>
                            <Menu.Item href={calcgenurl + "forum/forum/pipingdb-2"}>Forum</Menu.Item>
                            <Menu.Item href={calcgenurl + "support"}>Support</Menu.Item>
                            <Menu.Item>
                                <Dropdown icon={image1} selectOnBlur={false}
                                    style={{ zIndex: "51" }} selectOnNavigation={false}
                                    color="white" size="large"
                                    onChange={this.redirector}
                                    options={desktopoptions} text=" " item

                                />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </div>
                <div className="mobilemenu">
                    <Menu attached='top' borderless style={this.state.topmenudisplay ? null : hide} className="toplevelmenu">
                        <Menu.Menu position="left">
                            <div className="logo">
                                <a href={calcgenurl} draggable="false"
                                    style={{ userSelect: "none" }}><Logo4 /></a>
                            </div>
                        </Menu.Menu>

                        <Menu.Menu position="right">
                            <Menu.Menu position="right">
                                {/* <Form.Input icon='search' 
                                  
                                    placeholder='Search...' /> */}
                                <Search size="mini" className="search" />
                                <Dropdown
                                    // icon="user"
                                    color="white" size="large"
                                    onChange={this.redirector} selectOnBlur={false}

                                    selectOnNavigation={false}
                                    options={mobileoptions} text=" " item
                                    icon={image1}

                                />

                            </Menu.Menu>
                        </Menu.Menu>
                    </Menu>
                </div>
                <div>

                    <Menu attached='bottom' borderless className="bottomlevelmenu" >
                        <Menu.Menu position="left" >

                            {/* <DrawerToggle clicked={this.props.drawerToggleClicked} /> */}

                            <a href="/" draggable="false" style={{ padding: "6px", userSelect: "none" }}>
                                {/* <img src={pipingdblogo} href="/" 
                                alt="PipingDB Logo" className="imagess" /> */}
                            </a>

                            <div className="DesktopOnly">
                                {/* <Menus clicked={this.props.closed} key={this.props.submenu} setMenu={this.props.setMenu} submenu={this.props.submenu} setHoveredMenu={this.props.setHoveredMenu} clickHandler={this.props.clickHandler} closed={this.props.sideDrawerClosedHandler} /> */}
                            </div>


                        </Menu.Menu>
                        <Menu.Menu>
                            <Menu.Item position="right" onClick={this.collapse}  >
                                {this.state.topmenudisplay ? <Icon style={{ height: "inherit", display: "contents" }} name="angle double up" className="iicon" size="big" /> : <Icon style={{ height: "inherit", display: "contents" }} name="angle double down" className="iicon" size="big" />}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </div>
            </div>


        );
    }
}


export default Ribbons;