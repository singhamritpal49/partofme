import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_zHjhGKW4D30nz2eevBpStJCi00YmNQrIvp';

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='PARTOFME COMPANY & CO'
        billingAddress
        shippingAddress
        image='https://lh5.googleusercontent.com/SYwR0ZyCBafvfQlci5D_sotDCI3dMylytoScgOuVtNNlXzL1uR8lWQUnqqsZ4BgKS9JAxCqB5gvgWg=w1920-h978'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;