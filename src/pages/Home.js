import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {

  const [user,setUser]=useState({
     name:"",
     img_src:"",
     price:""
  })
  
  const [msg, setMsg] = useState({
    name:"",
    surname:"",
    email:"",
    phone:"",
    message:"",
  });
  let name,value;
  const getMsgData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setMsg({...msg,[name]:value});
  }

  const [search, setSearch] = useState({
    tourname:"",
  });
  let name2,value2;
  const getSearchData=(event)=>{
    name2=event.target.name;
    value2=event.target.value;

    setSearch({...search,[name2]:value2});
  }

  const navigate = useNavigate();

  const onCheckStatusClick = useCallback(() => {
    navigate("/check-status");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const ToDescription = useCallback(() =>{
    navigate("/description" , {state : {name : user.name , img_src : user.img_src, price : user.price}});
  },[navigate]);

  const Search = () =>{
    const {tourname} = search;
    console.log(tourname);
    if(tourname=="paris" || tourname == "PARIS" || tourname== "Paris"){
      onGroupButton1Click();
    }
    else if(tourname=="moscow" || tourname == "MOSCOW" || tourname== "Moscow"){
      onGroupButton2Click();
    }
    else if(tourname=="new york" || tourname == "NEW YORK" || tourname== "New York" || tourname=="New york" || tourname=="new York" || tourname =="NEW york" || tourname == "new YORK"){
      onGroupButton3Click();
    }
    else if(tourname=="sylht" || tourname == "SYLHT" || tourname== "Sylht"){
      onGroupButton4Click();
    }
    else if(tourname=="rome" || tourname == "Rome" || tourname== "ROME"){
      onGroupButton5Click();
    }
    else if(tourname=="prague" || tourname == "PRAGUE" || tourname== "Prague"){
      onGroupButton6Click();
    }
    else if(tourname=="thailand" || tourname == "THAILAND" || tourname== "Thailand"){
      onGroupButton7Click();
    }
    else if(tourname=="london" || tourname == "LONDON" || tourname== "London"){
      onGroupButton8Click();
    }
    else if(tourname=="maldives" || tourname == "MALDIVES" || tourname== "Maldives"){
      onGroupButton9Click();
    }
    else{
      alert("sorry😢 we are not currently offering a tour to "+tourname+" keep visiting to check or contact us to have it custom made for you🤞");
    }
  }

  const onGroupButton1Click = ()=>{
    user.name="Paris"
    user.img_src="../diogofagundesdbbken1s8gyunsplash-1@2x.png"
    user.price="PKR 200,000"
    ToDescription();
  }

  const onGroupButton2Click = ()=>{
    user.name="Moscow"
    user.img_src="../alexandersmaginb-f3hjz-scunsplash-1@2x.png"
    user.price="PKR 250,000"
    ToDescription();
  }

  const onGroupButton3Click = ()=>{
    user.name="New York"
    user.img_src="../davidgrovesraxnrehbuiunsplash-1@2x.png"
    user.price="PKR 300,000"
    ToDescription();
  }

  const onGroupButton4Click = ()=>{
    user.name="Sylht"
    user.img_src="../erykaragnaerwx0f75gaiunsplash-1@2x.png"
    user.price="PKR 350,000"
    ToDescription();
  }

  const onGroupButton5Click = ()=>{
    user.name="Rome"
    user.img_src="../christopherczermakgzkzbhso6kyunsplash-1@2x.png"
    user.price="PKR 370,000"
    ToDescription();
  }

  const onGroupButton6Click = ()=>{
    user.name="Prague"
    user.img_src="../yevheniiateiypcjqmesunsplash-1@2x.png"
    user.price="PKR 400,000"
    ToDescription();
  }

  const onGroupButton7Click = ()=>{
    user.name="Thailand"
    user.img_src="../mathewschwartznumfw34iha4unsplash-1@2x.png"
    user.price="PKR 430,000"
    ToDescription();
  }

  const onGroupButton8Click = ()=>{
    user.name="London"
    user.img_src="../sabrinamazzeogkrqzqo9miunsplash-1@2x.png"
    user.price="PKR 470,000"
    ToDescription();
  }

  const onGroupButton9Click = ()=>{
    user.name="Maldives"
    user.img_src="../datingjunglecjfik-lwfounsplash-1@2x.png"
    user.price="PKR 500,000"
    ToDescription();
  }

  const submitted = async (e)=>{
    e.preventDefault()
    const {name,surname,email,phone,message} = msg;
    if(name && surname && phone && email && message)
    {
      const resp = await fetch('https://se-tpa-feedbacks-default-rtdb.firebaseio.com/feedback.json' ,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        surname,
        email,
        phone,
        message
      })

    });
    alert("Thank you for getting in contact with us, Your response has been recorded, we will get in touch with you as sson as possible")
    }
    else{
      alert("Please Fill the data first!")
    }
    
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
          Check Status
        </div>
        
        <div className={styles.about} onClick={onAboutTextClick}>About</div>
        <div className={styles.admin} onClick={onAdminTextClick}>
          Admin
        </div>
        <div className={styles.rectangleWrapper}>
        <Form.Group className={styles.groupChild}>
          <Form.Control as="textarea" placeholder="Search Here"  
          value={search.tourname}
          onChange={getSearchData}
          type="text"
          name="tourname"
          />
        </Form.Group>
        </div>
        
        <div className={styles.home1}>Home</div>
        <b className={styles.letsTravel}>Lets Travel</b>
        <img
          className={styles.s7j4kii6hsgshmcxlovq7siag8vktvIcon}
          alt=""
          src="../11640084021s7j4kii6hsgshmcxlovq7siag8vktv9rhqscjbbuyse2favmnjhrpjhrgqcug2nqdcpxsmovtjjonzon74knmk3kywi3tpxrpg8r-26@2x.png"
        onClick={Search}
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
        <img className={styles.lineIcon} alt="" src="../line-1.svg" />
        <b className={styles.popularTours}>Popular Tours</b>
        <div className={styles.ourServices}>Our Services</div>
      </div>
      <div className={styles.lineGroup}>
        <img className={styles.groupChild1} alt="" src="../line-1.svg" />
        <b className={styles.photosByOurCustomers}>A Signature of Excellence</b>
        <div className={styles.aboutUs} onClick={onAboutTextClick}>About Us</div>
      </div>
      <div className={styles.kevinIaneselli4itvogyy7bmUnParent}>
        <img
          className={styles.kevinIaneselli4itvogyy7bmUnIcon}
          alt=""
          src="../kevinianeselli4itvogyy7bmunsplash-1@2x.png"
        />
        <div className={styles.loremIpsumDolorSitAmetCon}>
          One of the most excellent tours I have travelled in my entire life. Highly recommended.
        </div>
        <div className={styles.vikings}>Vikings</div>
        <div className={styles.harryBrook}>Harry Brook</div>
        <img className={styles.groupChild2} alt="" src="../line-1.svg" />
        <b className={styles.whatOurClientsSay}>What Our Clients Say</b>
        <div className={styles.testimonials}>Testimonials</div>
        <img className={styles.groupIcon} alt="" src="../group-30.svg" />
      </div>
      <div className={styles.lineContainer}>
        <img className={styles.groupChild3} alt="" src="../line-1.svg" />
        <b className={styles.photosByOurCustomers}>Photos by Our Customers</b>
        <div className={styles.ourGallery}>Our Gallery</div>
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
          <b className={styles.toursInParis}>TOUR IN PARIS</b>
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
            View More
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
          <b className={styles.toursInParis}>TOUR IN MOSCOW</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton2Click}
          >
            View More
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
          <b className={styles.toursInParis}>TOUR IN NEW YORK</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton3Click}
          >
            View More
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
          <b className={styles.toursInParis}>TOUR IN SYLHT</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton4Click}
          >
            View More
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
          <b className={styles.toursInParis}>TOUR IN ROME</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton5Click}
          >
            View More
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
          <b className={styles.toursInParis}>TOUR IN PRAGUE</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton6Click}
          >
            View More
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
            View More
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
          <b className={styles.toursInParis}>TOUR IN LONDON</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton8Click}
          >
            View More
          </Button>
          <div className={styles.pkr470000}>PKR 470,000</div>
        </div>
        <div className={styles.rectangleParent5}>
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
          <b className={styles.toursInParis}>TOUR IN MALDIVES</b>
          <Button
            className={styles.groupButton}
            variant="primary"
            onClick={onGroupButton9Click}
          >
            View More
          </Button>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild21} />
          <div className={styles.loremIpsumDolorSitAmetCon10}>
            <p
              className={styles.loremIpsumDolor}
            >{`We have a great amount of statisfied clients `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{` of approximately 2500+ by our services `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
              of travelling, hotels and meals.
            </p>
          </div>
          <div className={styles.happyClients}>HAPPY CLIENTS</div>
          <Button className={styles.groupChild22} variant="primary" onClick={onAboutTextClick}>
            View More
          </Button>
        </div>
        <img
          className={styles.checkMark1Icon}
          alt=""
          src="../check-mark-1@2x.png"
        />
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild21} />
          <div className={styles.loremIpsumDolorSitAmetCon11}>
            <p
              className={styles.loremIpsumDolor}
            >{`We have arranged a large number of`}</p>
            <p
              className={styles.loremIpsumDolor}
            >{` amazing tours of about 80+ and`}</p>
            <p className={styles.perferendisReiciendisQuasi}>
            successfully completed these tours.
            </p>
          </div>
          <div className={styles.amazingTours}>AMAZING TOURS</div>
          <Button className={styles.groupChild24} variant="primary" onClick={onAboutTextClick}>
            View More
          </Button>
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild21} />
          <div className={styles.loremIpsumDolorSitAmetCon12}>
            <p
              className={styles.loremIpsumDolor}
            >{`All the tours have a great positive feedback `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`from clients and 5 star ratings of all the `}</p>
            <p className={styles.perferendisReiciendisQuasi}>
              arranged tours.
            </p>
          </div>
          <div className={styles.goodRatings}>GOOD RATINGS</div>
          <Button className={styles.groupChild26} variant="primary" onClick={onAboutTextClick}>
            View More
          </Button>
        </div>
        <img
          className={styles.mathewSchwartzNumfw34iha4UnIcon}
          alt=""
          src="../mathewschwartznumfw34iha4unsplash-1@2x.png"
        />
        <img
          className={styles.sabrinaMazzeoGKrqzqo9miUnsIcon}
          alt=""
          src="../sabrinamazzeogkrqzqo9miunsplash-1@2x.png"
        />
        <img
          className={styles.davidGrovesRaxnrehbUiUnsplIcon}
          alt=""
          src="../datingjunglecjfik-lwfounsplash-1@2x.png"
        />
      </div>
      <div className={styles.filipZrnzevicQswg0kjpqryUnsParent}>
        <img
          className={styles.filipZrnzevicQswg0kjpqryUnsIcon}
          alt=""
          src="../filipzrnzevicqswg0kjpqryunsplash-1@2x.png"
        />
        <Button className={styles.groupChild27} variant="primary" onClick={()=>{
          alert("Subscription to Newsletter Successful")
        }}>
          Subscribe Now
        </Button>
        <Form.Group className={styles.enterYourEmailHereParent}>
          <Form.Label>Enter your Email here</Form.Label>
          <Form.Control as="textarea" placeholder=""  />
        </Form.Group>
        <div className={styles.subscribe}>SUBSCRIBE</div>
        <img className={styles.groupChild28} alt="" src="../line-2.svg" />
        <b className={styles.subscribeToOurNewsletter}>
          Subscribe to our Newsletter
        </b>
      </div>
      <img className={styles.mapPin1Icon} alt="" src="../map-pin-1@2x.png" />
      <img className={styles.comment1Icon} alt="" src="../comment-1@2x.png" />
      <div className={styles.karimManjraQti6cazgmjyUnsplParent}>
        <img
          className={styles.karimManjraQti6cazgmjyUnsplIcon}
          alt=""
          src="../karimmanjraqti6cazgmjyunsplash-1@2x.png"
        />
        <img
          className={styles.fonsHeijnsbroekLokexqzkdi0UIcon}
          alt=""
          src="../fonsheijnsbroeklokexqzkdi0unsplash-1@2x.png"
        />
        <img
          className={styles.gilgitBaltistan9nyrroz9awqUIcon}
          alt=""
          src="../gilgitbaltistan9nyrroz9awqunsplash-1@2x.png"
        />
        <img
          className={styles.danielKuruvillaTsjc5u6f1m4UIcon}
          alt=""
          src="../danielkuruvillatsjc5u6f1m4unsplash-1@2x.png"
        />
        <img
          className={styles.julienDoclotSfvTw658y4UnspIcon}
          alt=""
          src="../juliendoclotsfv-tw658y4unsplash-1@2x.png"
        />
        <img
          className={styles.joshuaJCottenW5yci0ghvkUnIcon}
          alt=""
          src="../karimmanjraqti6cazgmjyunsplash-1@2x.png"
        />
        <img
          className={styles.droneviewsFrXywvfa8zlyeUnspIcon}
          alt=""
          src="../droneviewsfrxywvfa8zlyeunsplash-1@2x.png"
        />
        <img
          className={styles.matiasMalkaSb3xmbevja4UnsplIcon}
          alt=""
          src="../matiasmalkasb3xmbevja4unsplash-1@2x.png"
        />
        <img
          className={styles.joshuaJCottenW5yci0ghvkUnIcon}
          alt=""
          src="../joshuajcottenw-5yci0ghvkunsplash-1@2x.png"
        />
        <img
          className={styles.pascalBernardonVopqjbdttlmUIcon}
          alt=""
          src="../pascalbernardonvopqjbdttlmunsplash-1@2x.png"
        />
        <img
          className={styles.lucSanteramo1momh5tba8iUnspIcon}
          alt=""
          src="../lucsanteramo1momh5tba8iunsplash-1@2x.png"
        />
        <img
          className={styles.nicolasPerezFjusx9nlfc4UnspIcon}
          alt=""
          src="../nicolasperezfjusx9nlfc4unsplash-1@2x.png"
        />
        <img
          className={styles.alexanderSchimmeckAstoh0kb9iIcon}
          alt=""
          src="../alexanderschimmeckastoh0kb9imunsplash-1@2x.png"
        />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild29} />
          <img className={styles.groupChild30} alt="" src="../line-1.svg" />
          <b className={styles.getInTouch}>Get in Touch</b>
          <div className={styles.contact}>Contact</div>
        </div>
        <form method="POST">
        <div className={styles.rectangleParent10}>
          <Button className={styles.groupButtonNew} onClick={submitted}>Submit</Button>
        </div>
        <Form.Group className={styles.wrapper}>
          <Form.Control as="textarea" placeholder="Email" 
          value={msg.email}
          onChange={getMsgData}
          type="text"
          name="email"/>
        </Form.Group>
        {/* <div className={styles.email}>Email</div> */}
        
        <Form.Group className={styles.message}>
          <Form.Control as="textarea" placeholder="Message" 
          value={msg.message}
          onChange={getMsgData}
          type="text"
          name="message"/>
        </Form.Group>
        {/* <div className={styles.message}>Message</div> */}
        {/* <div className={styles.message}>Message</div> */}
        {/* <div className={styles.groupChild32} /> */}
        <Form.Check className={styles.groupChild32}  onClick={()=>{
          user.individualORorganization="organization"
        }}/>
        <div className={styles.iHaveReadAndAgreedWithTe}>
          I have read and agreed with Terms and Conditions
        </div>
        <Form.Group className={styles.container}>
          <Form.Control as="textarea" placeholder="Phone #" 
          value={msg.phone}
          onChange={getMsgData}
          type="text"
          name="phone"/>
        </Form.Group>
        {/* <div className={styles.phone}>Phone</div> */}
        <Form.Group className={styles.frame}>
          <Form.Control as="textarea" placeholder="Sur Name" 
          value={msg.surname}
          onChange={getMsgData}
          type="text"
          name="surname"/>
        </Form.Group>
        {/* <div className={styles.surname}>Surname</div> */}
        <Form.Group className={styles.rectangleFormgroup}>
          <Form.Control as="textarea"  placeholder="Name" 
          value={msg.name}
          onChange={getMsgData}
          type="text"
          name="name"/>
        </Form.Group>
        {/* <div className={styles.name}>Name</div> */}
        </form>
      </div>
      <div className={styles.rectangleParent11}>
        <div className={styles.groupChild33} />
        <div className={styles.allRightsReserved}>
          © 2022 All Rights Reserved
        </div>
        <div className={styles.support}>Support</div>
        <div className={styles.aboutUs1} onClick={onAboutTextClick}>About Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Home;
