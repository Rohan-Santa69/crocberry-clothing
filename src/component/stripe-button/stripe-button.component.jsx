import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price}) => {
        const priceForStripe = price * 180 
        const publishableKey = 'pk_test_51IBb5VFgwuwZuEmg84yGQaXbAKHHhPRZlQZt3DLBFwi0ToxFZu2Ms08bpLcXk6wedcnKHdyoBih90m0H9emLiSCw007M7RlA6j'

        const OnToken = token => {
            console.log(token);
            alert('Payment Successful');
        }

        return(
            <StripeCheckout
             lebel= 'Pay Now'
             name='Crocberry Clothing Ltd.'
             billingAddress
             shippingAddress
             image= 'https://sendeyo.com/up/d/f3eb2117da'
             description = {`Your total is ${price}`}
             amount= {priceForStripe}
             panelLabel='Pay Now'
             token = {OnToken}
             stripeKey = {publishableKey}
             />
        )
}

export default StripeCheckoutButton;