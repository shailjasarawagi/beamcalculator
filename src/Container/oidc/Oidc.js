/**
 * Used for Routing the pages of App with token validation of user and request validation 
 */
import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import * as functions from '../../Functions/Function';
import App2 from './App2';
import axios from "../../hoc/Axios-orders";
import Beam from '../BeamForm/beam';

class Oidc extends Component {

  state = {
    display: null
  }

  /**Defines routing(switch) component in mount */
  componentDidMount() {
    let str = window.location.pathname;
    let token = str.split("/")
    const url = "/auth/token-verify";
    let display1 = (<Switch>

      <Route exact path="/" component={() => <App2 />} />
      <Redirect to="/" />
    </Switch>);
    let displayer = (<Switch>
      <Route exact path="/beam" component={Beam} />
      <Route exact path="/" component={Beam} />
      <Redirect to="/beam" />
    </Switch>);

    /**token[2] contains token  which expires after 10 min */
    if (token[2])  //check if token exists in url
    {

      localStorage.setItem("token", token[2])
      let header1 = functions.getToken();
      // console.log("retrieved token using getToken", header1)
      axios.get(url,
        { headers: header1 }
      ).then(
        (response) => {
          localStorage.setItem("exp_time", response.data.exp_time * 1000);
          setTimeout(this.refresh_token, response.data.exp_time * 1000 - (new Date().getTime() + 20000));
          // setTimeout(this.refresh_token, response.data.exp_time * 1000 - (new Date().getTime() + 540000))
          this.setState({ display: displayer })
        }, (error1) => {
          if (error1.response.statusText.trim() === "Forbidden".trim()) {
            this.setState({ display: display1 })
          }//if token is expired and forbidden, direct to login page(App2)
        }
      )
    }
    else //if url does not contain token from backend
    {
      this.setState({ display: display1 })
    }
  }


  render() {
    return <div>{this.state.display}</div>;
  }

  /**again token is refeshed after expire */
  refresh_token = () => {
    let refresh_url = "/oidc/refresh-token/";
    let header2 = functions.getToken();
    // console.log("currently valid token", header2)
    axios.get(refresh_url, { headers: header2 }).then((response) => {
      // let encoded_token = window.btoa(response.data.access_token)
      let encoded_token2 = response.data.access_token
      // console.log("token for refresh", encoded_token2)
      localStorage.clear("token");
      localStorage.setItem("token", encoded_token2);
      localStorage.setItem("exp_time", response.data.exp_time)
      // setTimeout(this.refresh_token, response.data.exp_time * 1000 - (new Date().getTime() + 540000));
      setTimeout(this.refresh_token, response.data.exp_time * 1000 - (new Date().getTime() + 20000));


    })
  }


}

export default Oidc;