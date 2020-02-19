import React from 'react';
import classes from './input.module.css';
import { Image, Radio, Dropdown } from 'semantic-ui-react';
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
                <Dropdown
                    className={inputClasses.join(' ')}
                       {...props.elementConfig}
                    value={props.value}
                    onChange={props.selectChanger}
                    options={props.elementConfig.options}
                    fluid
                    selection />
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





