import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            )
        }
        <div className="total">
            <span> TOTAL: ${total}</span>
        </div>
        <StripeCheckoutButton price={total} />
        <div className="test-warning"> <span className="warning">Warning to process payments use the following card details </span> 
         <br />
        Card Number:  4242-4242-4242-4242
        <br />
        CVC Code : Any 3 digits
        <br />
        Exp Date:  Any future date
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckOutPage);