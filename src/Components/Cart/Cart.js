import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    console.log(cart);
    const total = cart.reduce((total,prd)=> total + parseInt(prd.salary), 0); 
    return (
        <div style={{marginTop:'50px'}}>
            <h4>Total Players: {cart.length}</h4>
            <h5>Team Values:$ {total}</h5>
            
        </div>
    );
};

export default Cart;