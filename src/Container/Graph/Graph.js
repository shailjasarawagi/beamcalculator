import React from 'react';
import D3Chart from '../../Components/chart/chart';
import { Message } from 'semantic-ui-react';
import '../BeamForm/beamform.css'
const graph = (props) => {

    var y = [2, 3, 4, 6, 6, 7, 9]
    // var y = props.response.Yxmm
    var yB = [2, 67, 89, 8, 9, 1, 3, 4.5];
    // var yB = props.response.Mx
    // var x = props.response.x
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13]
    var ymax = (Math.max(...y)).toFixed(5);
    var yBmax = Math.max(...yB)

    let i = y.indexOf(Math.max(...y));
    let j = yB.indexOf(yBmax)
    // console.log(i, j)
    var yxmax = x[i], yBxmax = x[j];
    // console.log("yyy", x[i], x[j])

    return (
        <div style={{ backgroundColor: '#d3d3d3', padding: "10px" }}>
            <div style={{ fontWeight: '700', color: 'red', textAlign: 'center', padding: "15px" }}>RESULT OF CALCULATION</div>
            <hr></hr> <div className="row">
                <div className="column">

                    <Message style={{ marginTop: '10px' }}>
                        <div className="para">Reaction at A:  {props.response.Ra}</div>
                        <div className="para">Reaction at B:  {props.response.Rb}</div>
                        <div className="para">Moment at A: {props.response.Ma}</div>
                        <div className="para">Moment at B: {props.response.Mb}</div>
                        <div className="para">Maximum deflection:{ymax} at {yxmax}</div>
                        <div className="para">Maximum bendingmoment:{yBmax} at {yBxmax}</div>
                    </Message>
                </div >
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Shearforce vs distance</div>
                    <D3Chart x={props.response.x} y={props.response.V} xName="distance(mm)" yName="shearforce" id="sheer" />
                </div>
            </div >
            <br></br>
            <div className="row">
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Bendingmoment vs distance</div>
                    <D3Chart x={props.response.x} y={props.response.Mx} id="bending"
                        xName="distance(mm)" yName="bendingmoment" />
                </div>
                <div className="column">
                    <div style={{ fontWeight: '600', textAlign: 'center' }}>Graph of Deflection vs distance</div>
                    <D3Chart x={props.response.x} y={props.response.Yxmm} id="deflection"
                        xName="distance(mm)" yName="deflection" />
                </div>
            </div>
        </div >)
};

export default graph;