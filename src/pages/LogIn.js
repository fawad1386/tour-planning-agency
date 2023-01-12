import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";


const LogIn = () => {

    const [user,setUser]=useState({
     email:"",
      pw:""
    })
    let name, value
    const getUserData=(event)=>{
      name=event.target.name;
      value=event.target.value;
  
      setUser({...user,[name]:value});
    }
  
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCheckStatusClick = useCallback(() => {
    navigate("/check-status");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/Admin-Portal");
  }, [navigate]);

  const ToAdminPortal = ()=>{
    const username1="moizarif100@gmail.com";
    const username2="mohammad.fawad.564@gmail.com";
    const username3="munazzarafique60@gmail.com"
    const username4="fz4644444@gmail.com"
    const password="*****";
    const {email,pw}= user;
    console.log(user);
    if(email == username1||email==username2 || email==username3  || email==username4 && pw==password)
    {
      onLoginClick();
    }
    else{
      alert("Wrong Email or Password")
    }
  }

  return (
    <div className={styles.logIn}>
      <div className={styles.group}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.allRightsReserved}>
            © 2022 All Rights Reserved
          </div>
          <div className={styles.support}>Support</div>
          <div className={styles.aboutUs} onClick={onAboutTextClick}>About Us</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-21@2x.png"
        />
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-2@2x.png"
        />
        <b className={styles.letsTravel}>Lets Travel</b>
        <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.checkStatusParent}>
          
          <div className={styles.checkStatus} onClick={onCheckStatusClick}>
          Check Status
        </div>
          <div className={styles.about} onClick={onAboutTextClick}>About</div>
          <div className={styles.admin}>Admin</div>
          <div className={styles.rectangleWrapper}>
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
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-20.svg"
        />
        <Form.Group className={styles.wrapper}>
          <Form.Control as="textarea" placeholder="Email" type="text" value={user.email} onChange={getUserData} name="email" />
        </Form.Group>
        {/* <div className={styles.email}></div> */}
        <Form.Group className={styles.container}>
          <Form.Control as="textarea" placeholder="Password" type="password" value={user.pw} onChange={getUserData} name="pw" />
        </Form.Group>
        {/* <div className={styles.password}></div> */}
        <Button className={styles.groupChild1} variant="primary" onClick={ToAdminPortal}>
          Log In
        </Button>
 
        {/* <div className={styles.createNewAccount}>Create New Account</div> */}
      </div>
    </div>
  );
};

export default LogIn;
