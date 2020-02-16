import React from 'react';

import calcgen from '../../../assets/cmobile.png';
import   './Logo.css';

const logo4 = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={calcgen} alt="calcgen" />
    </div>
);

export default logo4;