import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./AddOrEditDetails.module.css";

const AddOrEditDetails = () => {
  const NameAndSource = useLocation();
  const data = NameAndSource.state;

  const navigate = useNavigate();
  const onCheckStatusClick = useCallback(() => {
    navigate("/Tourist-List");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/Admin-Portal");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.addOrEditDetails}>
      <img
        className={styles.addOrEditDetailsChild}
        alt=""
        src="../rectangle-19.svg"
      />
      <div className={styles.lineParent}>
        <img className={styles.groupChild} alt="" src="../line-1.svg" />
        <b className={styles.tourInMaldives}>Tour in {data.name}</b>
        <div className={styles.description}>Description</div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCon}>
      {data.name} is a very beautiful place to visit as a couple, individual, family, a trip with friends or  a trip with colleagues. It will surely be a trip to remember. and you will create memories for a life time. LetsTravel® ensures that you will cherish the memories you cretaed and hacve an experience of a lifetime.
      </div>
      <div className={styles.introduction}>Introduction</div>
      <div className={styles.pkr500000}>({data.price})</div>
      <div className={styles.loremIpsumDolorSitAmetCon1}>
      This trip offers a very interesting stay of 7 nights and 6 days at a very beautiful hotel at a messemerizing location. and everyday is going to be a day full of adventures yet ensuring your safety. Everyday there will be a new place to visit for you and a tour guide will accompany you that can speak your native language, english and language spoken in the country you're visiting.
        This tour is perfect for a solo adventure, honeymoon and trip with friends but most preferably a honeymoon trip is best suitable, since the aura, ambience and the shear vibe of this place speaks up romance and will enchant and somehow enhance you relationship with your loved one.
      </div>
      <div className={styles.details}>Details</div>
      <div className={styles.group}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.allRightsReserved}>
            © 2022 All Rights Reserved
          </div>
          <div className={styles.support}>Support</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-2@2x.png"
        />
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-2@2x.png"
        />
        <b className={styles.letsTravel}>Lets Travel</b>
        <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          {/* <Button className={styles.checkStatus} variant="primary">
            Check Status
          </Button> */}
          <div className={styles.checkStatus} onClick={onCheckStatusClick}>Tourist List</div>
          <div className={styles.about} >About</div>
          <div className={styles.admin} onClick={onAdminTextClick}>Admin</div>
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
          <div className={styles.groupChild4} />
        </div>
        <div className={styles.bookWithUsAndBookItOutO}>
          Book with Us and Book it out of Here
        </div>
        <div className={styles.aSignatureOfExcellence}>
          A Signature of Excellence
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild5} />
          <div className={styles.whereWouldYouLikeToGo}>
            Where would you like to go
          </div>
          <img
            className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon1}
            alt=""
            src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
          />
        </div>
        <Button className={styles.groupButton} variant="primary">
          Search Now
        </Button>
        <Button className={styles.groupChild6} variant="primary">
          Edit
        </Button>
        <Button className={styles.groupChild7} variant="primary">
          Edit
        </Button>
        <Button className={styles.groupChild8} variant="primary">
          Replace Image
        </Button>
        <img className={styles.groupIcon} alt="" src="../group-31.svg" />
        <img
          className={styles.datingjungleCjFikLwfoUnsplIcon}
          alt=""
          src={data.img_src}
        />
      </div>
    </div>
  );
};

export default AddOrEditDetails;
