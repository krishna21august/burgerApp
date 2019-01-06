import React from 'react';
import classes from './Burger.js';
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient"
const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="bread-cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;