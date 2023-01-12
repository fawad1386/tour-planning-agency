import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./AdminPortal.module.css";

const AdminPortal = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",
    img_src:"",
    price:""
 })

  const toAddNew = useCallback(() => {
    navigate("/Add-New-Tour");
  }, [navigate]);

  const onCheckStatusClick = useCallback(() => {
    navigate("/Tourist-List");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const onAdminTextClick = useCallback(() => {
    navigate("/Admin-Portal");
  }, [navigate]);

  const onMessageTextClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const ToEdit = useCallback(() =>{
    navigate("/EditPage" , {state : {name : user.name , img_src : user.img_src, price : user.price}});
  },[navigate]);

  const onGroupButton1Click = ()=>{
    user.name="Paris"
    user.img_src="../diogofagundesdbbken1s8gyunsplash-1@2x.png"
    user.price="PKR 200,000"
    ToEdit();
  }

  const onGroupButton2Click = ()=>{
    user.name="Moscow"
    user.img_src="../alexandersmaginb-f3hjz-scunsplash-1@2x.png"
    user.price="PKR 250,000"
    ToEdit();
  }

  const onGroupButton3Click = ()=>{
    user.name="New York"
    user.img_src="../davidgrovesraxnrehbuiunsplash-1@2x.png"
    user.price="PKR 300,000"
    ToEdit();
  }

  const onGroupButton4Click = ()=>{
    user.name="Sylht"
    user.img_src="../erykaragnaerwx0f75gaiunsplash-1@2x.png"
    user.price="PKR 350,000"
    ToEdit();
  }

  const onGroupButton5Click = ()=>{
    user.name="Rome"
    user.img_src="../christopherczermakgzkzbhso6kyunsplash-1@2x.png"
    user.price="PKR 370,000"
    ToEdit();
  }

  const onGroupButton6Click = ()=>{
    user.name="Prague"
    user.img_src="../yevheniiateiypcjqmesunsplash-1@2x.png"
    user.price="PKR 400,000"
    ToEdit();
  }

  const onGroupButton7Click = ()=>{
    user.name="Thailand"
    user.img_src="../mathewschwartznumfw34iha4unsplash-1@2x.png"
    user.price="PKR 430,000"
    ToEdit();
  }

  const onGroupButton8Click = ()=>{
    user.name="London"
    user.img_src="../sabrinamazzeogkrqzqo9miunsplash-1@2x.png"
    user.price="PKR 470,000"
    ToEdit();
  }

  const onGroupButton9Click = ()=>{
    user.name="Maldives"
    user.img_src="../datingjunglecjfik-lwfounsplash-1@2x.png"
    user.price="PKR 500,000"
    ToEdit();
  }

  return (
    <div className={styles.home}>
      <div className={styles.erykaRagnaCxaqlat5gbiUnsplaParent}>
        <img
          className={styles.erykaRagnaCxaqlat5gbiUnsplaIcon}
          alt=""
          src="../erykaragnacxaqlat5gbiunsplash-23@2x.png"
        />
        <div className={styles.checkStatus} onClick={onCheckStatusClick}>
          Tourist List
        </div>
        
        <div className={styles.about} onClick={onMessageTextClick}>Messages</div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
        <div className={styles.rectangleWrapper}>
        <Form.Group className={styles.groupChild}>
          <Form.Control as="textarea" placeholder="Search Here"  />
        </Form.Group>
        </div>
        
        <div className={styles.home1} onClick={onHomeClick}>Home</div>
        <b className={styles.letsTravel}>Lets Travel</b>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-26@2x.png"
        />
      </div>
      <div className={styles.erykaRagnaMbndpk6e2mqUnsplaParent}>
        <img
          className={styles.erykaRagnaMbndpk6e2mqUnsplaIcon}
          alt=""
          src="../erykaragnambndpk6e2mqunsplash-11@2x.png"
        />
        {/* <Button className={styles.groupItem} variant="primary">
          Search Now
        </Button> */}
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
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-26@2x.png"
        />
      </div>
      <div className={styles.lineParent}>
        <p className={styles.popularTours}>Tour List</p>
        <div className={styles.ourServices}><b>Admin Portal</b></div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A seven days stay in paris including`}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals, `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
              and visiting historical places in paris.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN PARIS</b>
          <img
            className={styles.diogoFagundesDbbken1s8gyUnsIcon }
            alt=""
            src="../diogofagundesdbbken1s8gyunsplash-1@2x.png"
          />
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton1Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr200000}>PKR 200,000</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A six days stay in moscow including `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals, `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and visiting popular places in moscow.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN MOSCOW</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton2Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr200000}>PKR 250,000</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A six days stay in New York including  `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals,`}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in new york.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN NEW YORK</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton3Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr200000}>PKR 300,000</div>
        </div>
        <img
          className={styles.alexanderSmaginBF3hjZScUIcon}
          alt=""
          src="../alexandersmaginb-f3hjz-scunsplash-1@2x.png"
        />
        <img
          className={styles.davidGrovesRaxnrehbUiUnsplIcon}
          alt=""
          src="../davidgrovesraxnrehbuiunsplash-1@2x.png"
        />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A seven days stay in Sylht including `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals, `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in SYLHT.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN SYLHT</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton4Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr350000}>PKR 350,000</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`An eight days stay in Rome including `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals, `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in Rome.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN ROME</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton5Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr200000}>PKR 370,000</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A ten days stay in Prague including`}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals,  `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in Prague.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN PRAGUE</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton6Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr200000}>PKR 400,000</div>
        </div>
        <img
          className={styles.diogoFagundesDbbken1s8gyUnsIcon}
          alt=""
          src="../erykaragnaerwx0f75gaiunsplash-1@2x.png"
        />
        <img
          className={styles.alexanderSmaginBF3hjZScUIcon}
          alt=""
          src="../christopherczermakgzkzbhso6kyunsplash-1@2x.png"
        />
        <img
          className={styles.davidGrovesRaxnrehbUiUnsplIcon}
          alt=""
          src="../yevheniiateiypcjqmesunsplash-1@2x.png"
        />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A ten days stay in THAILAND including`}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals,  `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in THAILAND.
            </p>
          </div>
          <b className={styles.toursInParis}>TOUR IN THAILAND</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton7Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr430000}>PKR 430,000</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild4} />
          <div className={styles.loremIpsumDolorSitAmetCon1}>
            <p
              className={styles.loremIpsumDolor}
            >{`A seven days stay in LONDON including `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals, `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in LONDON.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN LONDON</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton8Click}
          >
            Edit Tour
          </Button>
          <div className={styles.pkr470000}>PKR 470,000</div>
        </div>
        {/* <div className={styles.rectangleParent5}>
          <div className={styles.groupChild4} />
          <div className={styles.pkr500000}>PKR 500,000</div>
          <div className={styles.loremIpsumDolorSitAmetCon9}>
            <p
              className={styles.loremIpsumDolor}
            >{`A seven days stay in maldives including `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`airline tickets, hotel bookings, meals,`}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            and exploring famous spots in Maldives.
            </p>
          </div>
          <b className={styles.toursInParis}>TOURS IN MALDIVES</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton9Click}
          >
            Edit Tour
          </Button>
        </div> */}
        <div>
        <Button className={styles.AddButton} onClick={toAddNew}>+</Button>
        </div> 
        <div className={styles.rectangleParent11}>
        <div className={styles.groupChild33} />
        <div className={styles.allRightsReserved}>
          © 2022 All Rights Reserved
        </div>
        <div className={styles.support}>Support</div>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
    </div>
    </div>
  );
};

export default AdminPortal;
