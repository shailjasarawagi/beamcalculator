import React from 'react';
import classes from './input.module.css';
import { Image, Dropdown } from 'semantic-ui-react';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
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
                    label={props.label}
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
            inputElement = props.elementConfig.options.map(ele => {
                
                return <label key={ele.label}>{ele.label} <input type="radio"
                    label={ele.label}
                    value={ele.value}
                    key={ele.label}
                    checked={props.value === ele.value}
                    onChange={props.changed}
                   
                /></label>
            });


            break;
        default:
            inputElement = <input
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
            {validationError}
        </div>
    );
};

export default input;





