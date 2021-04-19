import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Paymnet details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setisFinished] = useState(false);

  useEffect(() => {
    let isMounted = true
    if (cart.id && isMounted) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch (error) {
          console.log(error);
        }
      };
      generateToken();
    }
    return () => { 
      isMounted = false
      console.log(JSON.stringify(cart, null, 2)) 
    }
    
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {

    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setisFinished(true);
    }, 3000);
  };

  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            {" "}
            Order ref: {order.customer_reference}.
          </Typography>
          <br />
          <Button component={Link} to="/" variant="outlined" type="button">
            Back to Home
          </Button>
        </div>
      </>
    ): (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  // if (error) {
  //   <>
  //     <Typography variant="h5"> Error: {error}</Typography>
  //     <Button component={Link} to="/" variant="outlined" type="button">
  //       Back to Home
  //     </Button>
  //   </>;
  // }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );
  
  
  activeStep === 2 ? console.log(`Cart: \n ${JSON.stringify(cart, null, 2)} \n order ${JSON.stringify(order, null, 2)}`) : console.log('nothing hpappening')

  return (
    <>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form  />
            )}
          </Paper>
        </main>
      </div>
    </>
  );
};

export default Checkout;
