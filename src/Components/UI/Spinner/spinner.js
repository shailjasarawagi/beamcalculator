/**
 * aSpinner is displayed when loading 
 */
import React from 'react';

import classes from './spinner.module.css';

const spinner = () => (
    <div className={classes.Coverspin}>
        <div className={classes.lds_default}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default spinner;