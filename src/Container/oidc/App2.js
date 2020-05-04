/**
 * This manages the redirection of url when user is not authenticated
 */
import React, { Component } from 'react';
import classes from './App2.css';
//import axios from '../../hoc/axios-orders';
import * as functions from '../../Functions/Function';
import { withRouter } from 'react-router-dom';

/**send_request() is called when user is not authenticated and a new window is opened */
class App2 extends Component {

  componentDidMount() {
    this.status = "KO";
    this.pollInterval = null;
    this.polling_id = null;
    this.send_request();
  }

  state = {
    redirect_url: null
  }
  
  /**This opens a new window when user not authenticated */
  send_request = () => {
    // console.log("request sent")
    // axios.get('/oidc/auth/request/', {})
    //   .then(response => {
    //     // console.log("hello response", response.data);
    //     // this.setState({
    //     //   redirect_url: "df"
    //     // })
    //     // this.pooling_id = response.data.pooling_id;
    //     this.window = window.open(response.data.redirect_url, "_self");
    //     // localStorage.setItem("pollingId", this.pooling_id);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

        // const url=process.env.REACT_APP_BACKEND_URL;
        const url=functions.getBackendDomain().baseURL;

      window.open(url+"/oidc/auth/request/", "_self");
  }

 
  render() {
    return (
      <div className={classes.App2}>
      </div>
    )
  }
}

export default withRouter(App2)