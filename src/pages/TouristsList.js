import { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./TouristsList.module.css";
import Table from "react-bootstrap/Table";

const TouristsList = () => {
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
  let key;
  let index = 0;
  const arr = [];
  for (key in data) {
    arr[index] = key;
    index++;
  }
  let i = -1;
  console.log(data)


  const navigate = useNavigate();

  

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
      {/* <div className={styles.filipZrnzevicQswg0kjpqryUnsParent}>
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
      </div> */}
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.table}></div>

        <div className={styles.name}></div>
      </div>
      <div className={styles.lineParent}>
        <img className={styles.groupChild2} alt="" src="../line-1.svg" />
        <b className={styles.registerATourWithUs}>Registered Tourists List</b>
        <div className={styles.registration}>Registered Tourists</div>
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
          Tourist List
        </div>
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
      {/* <Button className={styles.registrartionChild} variant="primary">
        Search Now
      </Button> */}
      <img className={styles.registrartionItem} alt="" src="../group-31.svg" />
      <div className={styles.table}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Number Of People</th>
              <th>Individual or Organization</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {arr.map( (row,index) => {
              // {console.log(i)}
              // {console.log(data[arr[i]]);}
              {++i;}
              return(
              <tr key={arr[i]}>
                {console.log(key)}
                <td>{i+1}</td>
                <td>{data[arr[i]].name}</td>
                <td>{data[arr[i]].phone}</td>
                <td>{data[arr[i]].email}</td>
                <td>{data[arr[i]].numberOfpeople}</td>
                <td>{data[arr[i]].individualORorganization}</td>
                <td>{data[arr[i]].tourLocation}</td>
              </tr>
            )
            
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TouristsList;
