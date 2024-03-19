import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
// import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const CheckOut = () => {
    

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm  />
            </Elements>
        </div>
    );
};

export default CheckOut;