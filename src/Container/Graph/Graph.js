import React from 'react';
import D3Chart from '../../Components/chart/chart';
import { Message } from 'semantic-ui-react';
import '../BeamForm/beamform.css'
const graph = (props) => {

    // var y = [2, 3, 4, 6, 6, 7, 9]
    var y = props.response.Yxmm
    // var yB = [2, 67, 89, 8, 9, 1, 3, 4.5];
    var yB = props.response.Mx
    var x = props.response.x
    // var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13]
    var ymax = (Math.max(...y)).toFixed(4);
    var yBmax = Math.max(...yB).toFixed(4);

    var ymin = (Math.min(...y)).toFixed(4);
    var yBmin = (Math.min(...yB)).toFixed(4);

    var absoluteYmax = Math.abs(ymax);
    var absoluteYmin = Math.abs(ymin);
    let maxDeflection, i;
    if (absoluteYmax > absoluteYmin) {
        maxDeflection = ymax;
        i = y.indexOf(Math.max(...y));
    }
    else {
        maxDeflection = ymin;
        i = y.indexOf(Math.min(...y));
    }

    var absoluteYBmax = Math.abs(yBmax);
    var absoluteYBmin = Math.abs(yBmin);
    let maxMoment, j;
    if (absoluteYBmax > absoluteYBmin) {
        maxMoment = yBmax;
        j = yB.indexOf(Math.max(...yB))
    }
    else {
        maxMoment = yBmin;
        j = yB.indexOf(Math.min(...yB))
    }
    // console.log(i, j)
    var yxmax = x[i], yBxmax = x[j];
    // console.log("yyy", x[i], x[j])
    var Ma = (props.response.Ma).toFixed(4);
    var Mb = (props.response.Mb).toFixed(4);
    // var Ma = 3;
    // var Mb = 6;


    var Ra = props.response.Ra;
    var directionA;
    if (Ra < 0) {
        directionA = '(Upward)'
    }
    else {
        directionA = '(Downward)'
    }

    var Rb = props.response.Rb;
    var directionB;
    if (Rb < 0) {
        directionB = '(Upward)'
    }
    else {
        directionB = '(Downward)'
    }


    var directionM;
    if (Ma < 0) {
        directionM = '(Clockwise)'
    }
    else {
        directionM = '(Anticlockwise)'
    }

    var directionN;
    if (Mb < 0) {
        directionN = '(Clockwise)'
    }
    else {
        directionN = '(Anticlockwise)'
    }

    return (
        <div style={{ backgroundColor: '#d3d3d3', padding: "10px" }}>
            <div style={{ fontWeight: '700', color: 'red', textAlign: 'center', padding: "15px" }}>RESULT OF CALCULATION</div>
            <hr></hr> <div className="row">
                <div className="column">

                    <Message style={{ marginTop: '10px' }}>
                        <div className="para">Reaction at A: {Math.abs(Ra)} N  {directionA}</div>
                        <div className="para">Reaction at B:   {Math.abs(Rb)} N  {directionB}</div>
                        <div className="para">Moment at A:{Math.abs(Ma)} Nm {directionM}</div>
                        <div className="para">Moment at B:{Math.abs(Mb)} Nm {directionN}</div>
                        <div className="para">Maximum deflection:{maxDeflection} mm at {yxmax}</div>
                        <div className="para">Maximum bendingmoment:{maxMoment} Nm at {yBxmax}</div>
                    </Message>
                </div >
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Shear Force vs Distance</div>
                    <D3Chart x={props.response.x} y={props.response.V} xName="Distance (mm)" yName="Shearforce (N)" id="sheer" />
                </div>
            </div >
            <br></br>
            <div className="row">
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Bending Moment vs Distance</div>
                    <D3Chart x={props.response.x} y={props.response.Mx} id="bending"
                        xName="Distance (mm)" yName="Bendingmoment (Nm)" />
                </div>
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Deflection vs Distance</div>
                    <D3Chart x={props.response.x} y={props.response.Yxmm} id="deflection"
                        xName="Distance (mm)" yName="Deflection (mm)" />
                </div>
            </div>
        </div >)
};

export default graph;