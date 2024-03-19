/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
// import toast from "react-hot-toast";
// import useCart from "../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckoutForm = ({data}) => {
   

    const [clientSecret, setcClientSecret] = useState('')
    const { user } = useAuth()
   

    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (data.price > 0) {
            axiosSecure.post(`/payment-intent`, { price: data.price})
                .then(res => {
                    setcClientSecret(res?.data?.clientSecret)
                })
        }
    }, [axiosSecure,data.price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (!stripe || !elements) {
        //     return
        // }
        // const card = elements.getElement(CardElement)
        // if (card === null) {
        //     return
        // }
        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card
        // })
        // if (error) {
        //     toast.error(error.message)

        // } else {
        //     // toast.success("Payment Done", paymentMethod?.id)
        //     console.log(paymentMethod);
        // }
        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: card,
        //         billing_details: {
        //             email: user?.email || 'anonymous',
        //             name: user?.displayName || 'anonymous'
        //         }
        //     }
        // })
        // if (confirmError) {
        //     console.log(confirmError);
        // } else {
        //     console.log(paymentIntent);
        //     if (paymentIntent.status === 'succeeded') {
        //         toast.success(paymentIntent?.id)
        //         const payment = {
        //             email: user?.email,
        //             price: totalPrice,
        //             transactionId: paymentIntent.id,
        //             date: new Date(),
        //             cartIds: cart.map(item => item._id),
        //             menuItemIds: cart.map(item => item.menuId),
        //             status: 'pending'
        //         }
        //         const res = await axiosSecure.post('/payment', payment)
        //         refetch()
        //         if (res?.data?.paymentResult.insertedId) {
        //             toast.success('Payment Successfully')
        //             navigate('/dashboard/paymentHistory')
        //         }
        //     }
        // }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            /> 
            {/* || !clientSecret */}
            <button className="btn btn-neutral btn-md mt-8" type="submit" disabled={!stripe }>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;