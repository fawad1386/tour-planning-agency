import { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./CheckStatus.module.css";

const CheckStatus = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://se-tpa-default-rtdb.firebaseio.com/registration.json").then(
      (result) => {
        result.json().then((resp) => {
          console.log(resp);
          setData(resp);
        });
      }
    );
  }, []);
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const CheckStatusUpdate = () => {
    const { name, phone } = user;
    let key;
    let index=0;
    let flag=0;
    const arr=[];
    for(key in data){
      arr[index]=key;
      index++;
    }
    index=0;
    console.log(data[arr[0]].name);
    for(key in data){
      if(data[arr[index]].name==name && data[arr[index]].phone==phone)
      {
        flag=1;
        alert("Dear "+data[arr[index]].name+", You are currently registered in a tour to "+data[arr[index]].tourLocation+" for "+data[arr[index]].numberOfpeople+" persons. As an "+data[arr[index]].individualORorganization)
      }
      index++;
    }
    if(flag==0){
      alert("OOPS! looks like you haven't registered with us yet");
    }
   };

  return (
    <div className={styles.checkStatus}>
      <div className={styles.group}>
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
            Subscribe Now
          </Button>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.enterYourEmailHere}>
              Enter your Email here
            </div>
          </div>
          <div className={styles.subscribe}>SUBSCRIBE</div>
          <img className={styles.lineIcon} alt="" src="../line-2.svg" />
          <b className={styles.subscribeToOurNewsletter}>
            Subscribe to our Newsletter
          </b>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.rectangleContainer}>
            <Button
              className={styles.rectangleButton}
              variant="outline-primary"
              onClick={CheckStatusUpdate}
            >
              Check Now
            </Button>
            {/* <div className={styles.check}>Check</div> */}
          </div>
          <Form.Group className={styles.wrapper}>
            <Form.Control
              as="textarea"
              placeholder="Phone #"
              type="text"
              value={user.phone}
              onChange={getUserData}
              name="phone"
            />
          </Form.Group>
          {/* <div className={styles.phone}>Phone #</div> */}
          <Form.Group className={styles.container}>
            <Form.Control
              as="textarea"
              placeholder="Name"
              type="text"
              value={user.name}
              onChange={getUserData}
              name="name"
            />
          </Form.Group>
          {/* <div className={styles.name}>Name</div> */}
        </div>
        <div className={styles.lineParent}>
          <img className={styles.groupChild1} alt="" src="../line-1.svg" />
          <b className={styles.checkStatusOfRegisteredTou}>
            Check Status of Registered Tour
          </b>
          <div className={styles.checkStatus1}>Check Status</div>
        </div>
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-23@2x.png"
        />
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-23@2x.png"
        />
        <b className={styles.letsTravel}>Lets Travel</b>
        <div className={styles.groupDiv} onClick={onGroupContainer7Click}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.checkStatusParent}>
          <div className={styles.checkStatus2} >Check Status</div>
          <div className={styles.about} onClick={onAboutTextClick}>
            About
          </div>
          <div className={styles.admin} onClick={onAdminTextClick}>
            Admin
          </div>
          <div className={styles.rectangleFrame}>
            {/* <Button className={styles.check} variant="primary">
              Check
            </Button>*/}
          </div>
          <div className={styles.searchHere}>Search here</div>
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
        <div className={styles.rectangleParent1}>
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
        {/* <Button className={styles.groupButton} variant="primary">
          Search Now
        </Button> */}
        <img className={styles.groupIcon} alt="" src="../group-31.svg" />
      </div>
    </div>
  );
};

export default CheckStatus;
