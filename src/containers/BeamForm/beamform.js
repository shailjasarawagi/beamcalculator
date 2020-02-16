import React, { Component } from "react";
import * as data from '../../JSONfiles/forminput.json';
import SupportBeam from '../../components/Form/supportBeam';
import LoadBeam from '../../components/Form/loadingform';

class Beamform extends Component {
    render(){
       return(
        
        <div className="row container-fluid">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <SupportBeam data={data}/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <LoadBeam />  
        </div>
    </div>
        
       );
    }
}
export default Beamform
