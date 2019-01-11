import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        price: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({ price: updatedPrice, ingredients: newIngredient });
        this.updatepurchaseState(newIngredient);


    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const updatedPrice = oldPrice - priceAddition;

        this.setState({ price: updatedPrice, ingredients: newIngredient });
        this.updatepurchaseState(newIngredient);
    }

    updatepurchaseState(ingredients) {
        const totalSum = Object.keys(ingredients).map(igKey => { return ingredients[igKey] }).reduce((sum, el) => { return sum + el }, 0);
        this.setState({ purchasable: totalSum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancleHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('continue Shopping');
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <>
                <Modal show={this.state.purchasing} modalClicked={this.purchaseCancleHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseContinued={this.purchaseContinueHandler}
                        purchaseCancelled={this.purchaseCancleHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    removed={this.removeIngredientHandler}
                    added={this.addIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.price}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder;