import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Registrartion.module.css";

const Registrartion = () => {
  const data=useLocation();
  
  const [user, setUser] = useState({
    name:"",
    phone:"",
    email:"",
    numberOfpeople:"",
    individualORorganization:"individual",
    tourLocation: data.state.location
  });
  let name,value;
  const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value});
  }

  const navigate = useNavigate();

  const onGroupButton1Click = useCallback(() => {
    navigate("/payment-gateways");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCheckStatusClick = useCallback(() => {
    navigate("/check-status");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);


  const PostData = async (e)=>{
    e.preventDefault()
    const {name,phone,email,numberOfpeople,individualORorganization,tourLocation} = user;
    if(location && name && phone && email && numberOfpeople && individualORorganization)
    {
      const resp = await fetch('https://se-tpa-default-rtdb.firebaseio.com/registration.json' ,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        phone,
        email,
        numberOfpeople,
        individualORorganization,
        tourLocation
      })

    });
    onGroupButton1Click()
    }
    else{
      alert("Please Fill the data first!")
    }
    
  }

  return (
    <div className={styles.registrartion}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.allRightsReserved}>
          © 2022 All Rights Reserved
        </div>
        <div className={styles.support}>Support</div>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
      <div className={styles.filipZrnzevicQswg0kjpqryUnsParent}>
        <img
          className={styles.filipZrnzevicQswg0kjpqryUnsIcon}
          alt=""
          src="../filipzrnzevicqswg0kjpqryunsplash-1@2x.png"
        />
        <Button className={styles.groupItem} variant="primary">
          Subsribe Now
        </Button>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.enterYourEmailHere}>Enter your Email here</div>
        </div>
        <div className={styles.subscribe}>SUBSCRIBE</div>
        <img className={styles.lineIcon} alt="" src="../line-2.svg" />
        <b className={styles.subscribeToOurNewsletter}>
          Subscribe to our Newsletter
        </b>
      </div>
      <form method="POST">
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangleDiv} />
        </div>
        <Button
          className={styles.groupButton}
          variant="outline-primary"
          onClick={PostData}
        >
          Proceed to Payment
        </Button>
        
        <Form.Group className={styles.wrapper}>
          <Form.Control as="textarea" placeholder="Email" 
          value={user.email}
          onChange={getUserData}
          type="text"
          name="email"
          required
          />
        </Form.Group>
        {/* <div className={styles.email}>Email</div>  */}
        <Form.Check className={styles.rectangleFormcheck}  onClick={()=>{
          user.individualORorganization="organization"
        }}/>
        <Form.Check className={styles.groupChild1}  onClick={()=>{
          user.individualORorganization="individual"
        }}/>
        <div className={styles.organization}>Organization</div>
        <div className={styles.individual}>Individual</div>
        <Form.Group className={styles.container}>
          <Form.Control as="textarea" placeholder="Phone #"
          value={user.phone}
          onChange={getUserData}
          type="text"
          name="phone"
          required
          />
        </Form.Group>
        {/* <div className={styles.phone}>Phone #</div> */}
        <Form.Group className={styles.frame}>
          <Form.Control as="textarea" placeholder="Number of People"
          value={user.numberOfpeople}
          onChange={getUserData}
          type="text"
          name="numberOfpeople"
          required
          />
        </Form.Group>
        {/* <div className={styles.numberOfPeople}>Number of People</div> */}
        <Form.Group className={styles.rectangleFormgroup}>
          <Form.Control as="textarea" placeholder="Name"
          value={user.name}
          onChange={getUserData}
          type="text"
          name="name"
          required
          />
        </Form.Group>
        {/* <div className={styles.name}>Name</div> */}
      </div>
      </form>
      <div className={styles.lineParent}>
        <img className={styles.groupChild2} alt="" src="../line-1.svg" />
        <b className={styles.registerATourWithUs}>Register a Tour with Us</b>
        <div className={styles.registration}>Registration</div>
      </div>
      <img
        className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
        alt=""
        src="../erykaragnacxaqlat5gbiunsplash-24@2x.png"
      />
      <img
        className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
        alt=""
        src="../erykaragnambndpk6e2mqunsplash-1@2x.png"
      />
      <b className={styles.letsTravel}>Lets Travel</b>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer6Click}
      >
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.checkStatusParent}>
        <div className={styles.checkStatus} onClick={onCheckStatusClick}>
          Check Status
        </div>
        <div className={styles.about}>About</div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
        <div className={styles.rectangleFrame}>
          <Button className={styles.rectangleButton} variant="primary">
            Search here
          </Button>
        </div>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
        />
      </div>
      <div className={styles.bookWithUsAndBookItOutO}>
        Book with Us and Book it out of Here
      </div>
      <div className={styles.aSignatureOfExcellence}>
        A Signature of Excellence
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} />
        <div className={styles.whereWouldYouLikeToGo}>
          Where would you like to go
        </div>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon1}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
        />
      </div>
      <Button className={styles.registrartionChild} variant="primary">
        Search Now
      </Button>
      <img className={styles.registrartionItem} alt="" src="../group-31.svg" />
    </div>
  );
};

export default Registrartion;
