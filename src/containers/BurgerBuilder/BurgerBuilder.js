import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.4,
    bacon: 0.5,
    meat: 0.7,
    cheese: 0.1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4
    }

    addIngredientHandler = (type) => {
        console.log(type);
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({ price: updatedPrice, ingredients: newIngredient })

    }


    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls added={this.addIngredientHandler} />
            </>
        );
    }
}

export default BurgerBuilder;