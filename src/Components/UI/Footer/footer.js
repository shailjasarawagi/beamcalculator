/**his component displays the footer component in page which is fixed  */
import React from 'react';
import classes from './footer.css';

const Footer = () => ( 
    <div className={classes.footer}> 

<p> &copy; {new Date().getFullYear()} Calcgen Solutions LLC. All rights reserved.</p>
    </div> 
     );
     export default Footer;