import React from 'react';
import classes from './BuildControl';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <label className={classes.Label}>{props.label}</label>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>

);


export default buildControl;