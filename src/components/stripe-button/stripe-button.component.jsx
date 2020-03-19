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
        image='https://uccd719e008a55808adef14b02da.previews.dropboxusercontent.com/p/thumb/AAvRumo7i1lasKnzqTuLXuOG8LsgpPJTsLkF6VwxUaapxk6TyM7wf14FdOXLCjS9c7gfs5xNT5BOCQV2Kz1CJ4rNzRjZEwR7EFy0NZdqs9SzYzOzCRzYkteVQMb44Z_qdXnijlxBgNXNLKYu3GTlLTIrZ511V9chJiXABMR09Jx1sGrgwVadzEEEkvxkAyIZJ1F78AxX-JofINCHK2zaj5XLHnWr2F-yGO19Sjh-Qbpe8v6pDbam45LV9e3k9DBkMbJ0G4DIBLfMVu2VyeGBZUQLHs1A-QrUWSMeP-qaJcez4p-uluMIPtsaRkUbZzMbtUHX7jNdrPMXfDbcFWICV7Tpr5Uh5syUs2rfjrxirIqUjy4OSQneVutH-hTZCNNNOWQey0qTrQSxgLOII7lYRfH6/p.png?fv_content=true&size_mode=5'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;