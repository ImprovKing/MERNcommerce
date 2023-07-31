import React from 'react'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI

const currency = "USD";
const style : any = {"layout":"vertical"};
let actions : any ;
let order : any ;


export default function PayPalButton( { currency, showSpinner , amount } : { currency : any , showSpinner : any  , amount : any} ) {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    // const [price, setPrice] = useState(0);

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);



  return (
    <div>
        { (showSpinner && isPending) && <div className="spinner" /> }
        <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data : any , actions : any ) {
                    return actions.order.capture().then(function () {
                        console.log(data) ;
                    });
                }}
            />
    </div>
  )
}
