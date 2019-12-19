/**This component display logo in toolbar section */
import React from 'react';

import calcgenLogo from '../../../assets/calcgen.png';
import   './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={calcgenLogo} alt="Calcgen Logo" />
    </div>
);

export default logo;