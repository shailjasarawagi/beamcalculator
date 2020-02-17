import React from 'react';
import classes from './input.css';
import { Image, Radio } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
// import Select from "react-select";


const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    // console.log(props.elementConfig.options)

    switch (props.elementType) {
        case ('input'):
            inputElement = <Form.Control
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onKeyPress={props.keypress}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>  
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.display !== undefined ?  <Image src={require(`../../../assets/${option.displayValue}.png`)} alt={option.displayValue}/> : null}
                        {option.displayValue} 
                        </option>
                    ))}          
                </select>
            );
            break;

        case ('image'):
            inputElement = <Image
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ('radio'):
            inputElement = <Radio
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;


            break;
        default:
            inputElement = <Form.Control
                style={{ ...props.style }}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;