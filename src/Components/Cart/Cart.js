import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const plInfo = cart.map(pl =>(pl.name));
    const total = cart.reduce((total,prd)=> total + parseInt(prd.salary), 0); 
    return (
        <div style={{marginTop:'50px'}}>
            <h4>Total Players: {cart.length}</h4>
            <h5>Team Values:$ {total}</h5>
            <ul>
            {
                cart.map(pl =><li>{pl.name} {pl.salary}</li>)
            }
            </ul>
            
            
        </div>
    );
};

export default Cart;