/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckoutForm = () => {

    const data = useLoaderData()

    const [clientSecret, setcClientSecret] = useState('')
    const { user } = useAuth()


    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (data.price > 0) {
            axiosSecure.post(`/payment-intent`, { price: data?.price })
                .then(res => {
                    setcClientSecret(res?.data?.clientSecret)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast.error(error.message)

        } else {
            toast.success("Payment Done", paymentMethod?.id)
            // console.log(paymentMethod.id);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        } else {
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success(paymentIntent?.id)

                const status = data.name
                axiosSecure.patch(`/usersStatus/${user?.email}`, { status })
                    .then(data => console.log(data?.data))
            }
        }

    }


    return (
        <div className="my-40">
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

                <button className="text-sm font-bold justify-center mt-8 text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;