import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{props.ingredients[igKey]}
        </li>)
    });
    return (
        <>
            <h3>Your Order</h3>
            <p>Your order with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

        </>
    );

}


export default orderSummary;