import React from 'react';
import logoBurger from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoBurger} alt="burger-logo" />
    </div>
);

export default logo;