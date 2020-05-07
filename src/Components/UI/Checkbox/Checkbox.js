/**
 * Display radio component
 */
import React from "react";
// import { Checkbox } from 'semantic-ui-react'
import "./Checkbox.css";

/**Display radio label and input for units US and metric */
const Radio = (props) => {
    return (
        <div className="ui checkbox">
            <input id={props.id} className="button" onChange={props.changed} value={props.value} type="checkbox" disabled={props.disable}
                checked={props.isSelected} />
            <label htmlFor={props.id} className="label" style={{ color: '#1a3260' }}>{props.label}</label>
        </div>
        // <Checkbox id={props.id} className="button" onChange={props.changed} value={props.value} type="checkbox" disabled={props.disable}
        //     label={props.label} checked={props.isSelected} />
    );
}
export default Radio;
