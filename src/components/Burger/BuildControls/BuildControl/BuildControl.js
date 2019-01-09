import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <label className={classes.Label}>{props.label}</label>
        <button onClick={props.remove} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.add} className={classes.More}>More</button>
    </div>

);


export default buildControl;