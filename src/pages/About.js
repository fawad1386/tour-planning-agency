import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCheckStatusClick = useCallback(() => {
    navigate("/check-status");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/registrartion");
  }, [navigate]);

  return (
    <div className={styles.description}>
      <img
        className={styles.descriptionChild}
        alt=""
        src="../rectangle-191.svg"
      />
      <div className={styles.lineParent}>
      <img className={styles.groupChild} alt="" src="../line-1.svg" />
        
        <div className={styles.description1}>About Us </div>
      </div>
      <div className={styles.loremIpsumDolorSitAmetCon}>
      Happy clients of our tour agency are those who have had a memorable and enjoyable experience while booking and participating in the tours and vacation packages offered by us. These clients have been pleased with the level of customer service they received, the variety of destinations and activities available, and the overall value for the price they paid. They have appreciated the convenience and organization of the tours, and the professionalism of the tour guides. As a result, our happy clients are likely to recommend our services to others and to book future vacations through your agency.
      </div>
      <div className={styles.introduction}>Happy Clients</div>
     
      <div className={styles.loremIpsumDolorSitAmetCon1}>
      The tours arranged by your company are truly amazing, offering a wide range of exciting and unique experiences for travelers. From cultural immersion and adventure to relaxation and luxury, there is something for everyone to enjoy. Your tours are carefully planned and organized, with high-quality accommodations, activities, and transportation included. The tour guides are knowledgeable, friendly, and professional, ensuring that every detail of the trip runs smoothly. Overall, the tours arranged by your company are a fantastic way for travelers to discover new destinations and create lasting memories.
      </div>
      <div className={styles.details}>Amazing Tours</div>

      <div className={styles.loremIpsumDolorSitAmetCon2}>
      Our travelling agency has received consistently good ratings from satisfied clients, indicating a high level of customer satisfaction with the tours and vacation packages we offer. These ratings usually come from online review platforms, customer feedback surveys, or other sources, and reflect positive experiences with the quality of the accommodations, activities, and transportation provided on the tours, as well as the level of customer service and overall value for the price. Good ratings are a testament to the dedication and hard work of our company in delivering exceptional experiences to travelers.
      </div>
      <div className={styles.details2}>Good Ratings</div>

     
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
        <div className={styles.filipZrnzevicQswg0kjpqryUnsParent}>
          <img
            className={styles.filipZrnzevicQswg0kjpqryUnsIcon}
            alt=""
            src="../filipzrnzevicqswg0kjpqryunsplash-1@2x.png"
          />
          <Button className={styles.groupInner} variant="primary">
            Subsribe Now
          </Button>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
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
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-21@2x.png"
        />
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-22@2x.png"
        />
        <b className={styles.letsTravel}>Lets Travel</b>
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainer4Click}
        >
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
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
          {/* <div className={styles.searchHere}>Search here</div> */}
          <img
            className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon}
            alt=""
            src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
          />
          <div className={styles.groupChild6} />
        </div>
        <div className={styles.bookWithUsAndBookItOutO}>
          Book with Us and Book it out of Here
        </div>
        <div className={styles.aSignatureOfExcellence}>
          A Signature of Excellence
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <Form.Group className={styles.whereWouldYouLikeToGo}>
            <Form.Label>Where would you like to go</Form.Label>
            {/* <Form.Control as="textarea" placeholder="Textarea placeholder" /> */}
          </Form.Group>
          <img
            className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon1}
            alt=""
            src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-2@2x.png"
          />
        </div>
        <Button className={styles.groupButton} variant="primary">
          Search Now
        </Button>
        
        
      </div>
    </div>
  );
};

export default About;
