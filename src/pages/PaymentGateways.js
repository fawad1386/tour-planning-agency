import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentGateways.module.css";

const PaymentGateways = () => {
  const navigate = useNavigate();

  const onCheckStatusClick = useCallback(() => {
    navigate("/check-status");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const CompeleteRegister = ()=>{
    const {fname,lname,CardNum,ExpDate,SecurityCode}=user;
    if(fname && lname && CardNum && ExpDate && SecurityCode)
    {
      alert("Registration Compeleted ✌. Thank you so much for choosing us 😁")
      onHomeTextClick()
    }
    else{
      alert("Fill the form first")
    }
  }


  const [user, setUser] = useState({
    fname:"",
    lname:"",
    CardNum:"",
    ExpDate:"",
    SecurityCode:""
  });
  let name,value;
  const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value});
  }

  return (
    <div className={styles.paymentGateways}>
      <div className={styles.erykaRagnaCxaqlat5gbiUnsplaParent}>
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-23@2x.png"
        />
        <div className={styles.checkStatus} onClick={onCheckStatusClick}>
          Check Status
        </div>
        <div className={styles.about}>About</div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
        <div className={styles.rectangleWrapper}>
          <Button className={styles.groupChild} variant="primary">
            Search here
          </Button>
        </div>

        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <b className={styles.letsTravel}>Lets Travel</b>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
        />
      </div>
      <div className={styles.erykaRagnaMbndpk6e2mqUnsplaParent}>
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-1@2x.png"
        />
        <Button className={styles.groupItem} variant="primary">
          Search Now
        </Button>
        <img className={styles.groupInner} alt="" src="../group-31.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.whereWouldYouLikeToGo}>
          Where would you like to go
        </div>
        <div className={styles.bookWithUsAndBookItOutO}>
          Book with Us and Book it out of Here
        </div>
        <div className={styles.aSignatureOfExcellence}>
          A Signature of Excellence
        </div>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon1}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
        />
      </div>
      <img
        className={styles.paymentGatewaysChild}
        alt=""
        src="../rectangle-192.svg"
      />
      <div className={styles.iAgree}>I Agree</div>
      <b className={styles.enterYourPaymentDetails}>
        Enter Your Payment Details
      </b>
      <img
        className={styles.ddCreditCardsAndReader786}
        alt=""
        src="../dd-credit-cards-and-reader-78695-1@2x.png"
      />
      <form>
      <Form.Group className={styles.wrapper}>
        <Form.Control as="textarea" placeholder="First Name" 
        value={user.fname}
        onChange={getUserData}
        type="text"
        name="fname"
        />
      </Form.Group>
      <Form.Group className={styles.container}>
        <Form.Control as="textarea" placeholder="Last Name"
        value={user.lname}
        onChange={getUserData}
        type="text"
        name="lname"
        />
      </Form.Group>
      <Form.Group className={styles.frame}>
        <Form.Control as="textarea" placeholder="Card Number" 
        value={user.CardNum}
        onChange={getUserData}
        type="text"
        name="CardNum"
        />
      </Form.Group>
      <Form.Group className={styles.groupFormgroup}>
        <Form.Control as="textarea" placeholder="Expiry Date (MM/YY)" 
        value={user.ExpDate}
        onChange={getUserData}
        type="text"
        name="ExpDate"
        />
      </Form.Group>
      <Form.Group className={styles.wrapper1}>
        <Form.Control as="textarea" placeholder="Security Code (CVV)" 
        value={user.SecurityCode}
        onChange={getUserData}
        type="text"
        name="SecurityCode"
        />
      </Form.Group>
      {/* <div className={styles.firstName}>First Name</div>
      <div className={styles.lastName}>Last Name</div>
      <div className={styles.cardNumber}>Card Number</div>
      <div className={styles.expiryDateMmyy}>Expiry Date (MM/YY)</div>
      <div className={styles.securityCodeCvv}>Security Code (CVV)</div> */}
      <img
        className={styles.paymentGatewaysItem}
        alt=""
        src="../ellipse-6.svg"
      />
      <div className={styles.div}>?</div>
      <div className={styles.yourPaymentsWillBeProcesse}>
        <p
          className={styles.yourPaymentsWill}
        >{`Your payments will be processed internationally. Additional `}</p>
        <p className={styles.yourPaymentsWill}>bank fees may apply.</p>
      </div>
      <Form.Check className={styles.paymentGatewaysInner} />
      <Button className={styles.rectangleButton} variant="outline-primary" onClick={CompeleteRegister}>
        Pay Now
      </Button>
      </form>

      <div className={styles.rectangleParent}>
        <div className={styles.groupChild1} />
        <div className={styles.allRightsReserved}>
          © 2022 All Rights Reserved
        </div>
        <div className={styles.support}>Support</div>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
    </div>
  );
};

export default PaymentGateways;
