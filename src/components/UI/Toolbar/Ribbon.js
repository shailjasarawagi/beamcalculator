/**This component display the toolbar in first section of main page  */
import React,{Component} from 'react';
import  './Ribbon.css';
import Logo from '../Logo/Logo';
import Logo4 from '../Logo/Logo4';
// import axios from '../hoc/axios-orders';
import { Dropdown,Menu,Form} from 'semantic-ui-react';
// import userlogo from '../../assets/user.jpg';
// import * as functions from '../Functions/Function';



const mobileoptions = [
  { key: '1', value: 'myapps', text: 'My Apps' },
  { key: '2', value: 'forum/forum/pipingdb-2', text: 'Forum' },
  { key: '3', value: 'support', text: 'Support' },
  { key: '4', value: 'profile', text: 'My Dashboard' },
  { key: '5', value: 'logout', text: 'Logout' }
]
const desktopoptions = [
  { key: '1', value: 'profile', text: 'My Dashboard' },
  { key: '2', value: 'logout', text: 'Logout' }
]
  class Ribbon extends Component {
  
    state = {
      url: null,
      redirect: false
    }
  
    redirector = (event, data) => {
      if(data.value === "logout") {
        this.onLogOut();
      } else {
        const calcgen = process.env.REACT_APP_CALCGEN_URL;
      console.log("hello", data.value);
      const url = `${calcgen}${data.value}`;
      console.log(url);
      this.setState({redirect: true, url: url});
      }
  
    }
  
   
  
    /** In toolbar there is home menu and logo on one side */
    render() {
      const calcgenurl = process.env.REACT_APP_HOME_URL;
      if(this.state.redirect && this.state.url!== null) {
        console.log(this.state,"hello");
        window.location = this.state.url;
      }
      return (
        <div>
          <div className="mobilemenu">
            <Menu borderless>
            <Menu.Menu position="left">
              <div className="logo">
                <a href={calcgenurl}><Logo4 /></a>
              </div>
            </Menu.Menu>

            <Menu.Menu position="right" >
              <Menu.Menu position="right">
                <Form.Input icon='search' className="inputs"
                  // style={{ width: "30rem"  }}
                  placeholder='Search...' />

                <Dropdown icon="user"
                  color="white" size="large"
                  onChange={this.redirector} selectOnBlur={false} selectOnNavigation={false}
                  options={mobileoptions} text=" " item
                />

              </Menu.Menu>
            </Menu.Menu>
          </Menu>
          </div>
          <div className="desktopmenu">
            <Menu borderless>
              <div className="logo">
                <a href='http://www.calcgen.com'><Logo /></a>
              </div>
              <Menu.Menu position="right" >
              <Menu.Item><Form.Input icon='search' className="inputs"
                style={{ width: "30rem" }}
                placeholder='Search...' /></Menu.Item>

                <Menu.Item href={calcgenurl + "myapps"}>My Apps</Menu.Item>
              <Menu.Item href={calcgenurl + "forum/forum/pipingdb-2/"}>Forum</Menu.Item>
              <Menu.Item href={calcgenurl + "support"}>Support</Menu.Item>
                <Menu.Item >
                <Dropdown icon="user" selectOnBlur={false} selectOnNavigation={false}
                    color="white" size="large"
                    onChange={this.redirector}
                    options={desktopoptions} text=" " item
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </div>
        </div>
      );
    }
  }
  export default Ribbon;