import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./AddTour.module.css";

const AddTour = () => {
  const [user, setUser] = useState({
    img_src:"",
    introduction:"",
    description:"",
    price:"",
    });
  let name,value;
  const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value});
  }

  const navigate = useNavigate();

  const onGroupButton1Click =async (e)=>{
    e.preventDefault()
    const {img_src, introduction, description, price}=user;
    if(img_src && introduction && description && price)
    {
      const resp = await fetch('https://se-tpa-tours-default-rtdb.firebaseio.com/tours.json' ,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        img_src,
        introduction,
        description,
        price
      })

    });
    alert("Tour Added Successfully")
    }
    else{
      alert("Please Fill the data first!")
    }
    
  }

  const onGroupContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCheckStatusClick = useCallback(() => {
    navigate("/Tourist-List");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/Admin-Portal");
  }, [navigate]);

  const onMessagesTextClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

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
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangleDiv} />
        </div>
        <form method="POST">
        <Button
          className={styles.groupButton}
          variant="outline-primary"
          onClick={onGroupButton1Click}
        >
          Add Tour
        </Button>
        
        <Form.Group action="" className={styles.wrapper}>
          <Form.Control as="input" type="text"  placeholder="Description" value={user.description}
          onChange={getUserData}
          name="description" />
          
        </Form.Group>
        {/* <div className={styles.email}></div> */}
       
       
        <Form.Group className={styles.container}>
          <Form.Control as="input" value={user.introduction}
          onChange={getUserData}
          type="text"
          name="introduction"
          placeholder="Introduction" />
        </Form.Group>
        <div className={styles.phone}></div>
        <Form.Group className={styles.frame}>
          <Form.Control as="input" value={user.price}
          onChange={getUserData}
          type="text"
          name="price"
          placeholder="Price" />
        </Form.Group>
        <div className={styles.numberOfPeople}></div>
        <Form.Group className={styles.rectangleFormgroup}>
          <Form.Control as="input" type="file" placeholder="Upload Image"  
          value={user.img_src}
          onChange={getUserData}
          name="img_src"
          />
        </Form.Group>
        </form>
        <div className={styles.name}></div>
      </div>
      <div className={styles.lineParent}>
        <img className={styles.groupChild2} alt="" src="../line-1.svg" />
        <b className={styles.registerATourWithUs}>Add New Tours to your Agency</b>
        <div className={styles.registration}>Add a Tour</div>
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
        <div className={styles.checkStatus} onClick={onCheckStatusClick}>Tourist List</div>
        <div className={styles.about} onClick={onMessagesTextClick}>Messages</div>
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

export default AddTour;
