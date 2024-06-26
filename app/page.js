'use client'
import Image from "next/image";
import Header from "./Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  
  const firstRead = useRef(null)
  const firstInView = useInView(firstRead, {once: true})

  const secondRead = useRef(null)
  const secondInView = useInView(secondRead, {once: true})

  const giftcard = useRef(null)
  const giftInView = useInView(giftcard, {once: true})


  return (
    <main className="home-page">
      <Header />      
      <section className="hero-section" id="hero-section">
        <motion.div className="hero-contents"
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
            color: "white"
          }}
          transition={{
            stiffness: 5,
            duration: .5
          }}
        >
          <h1 className="hero-title">Award Winning Barbecue</h1>
          <p className="hero-subtitle">Come see us to experience the best barbecue you have ever had</p>
          <div className="cta-div">
            <a className="hero-cta" href="https://order.toasttab.com/online/wahoo-bbq-new-10-centre-court">Order Now for Pick Up</a>
            <a className="hero-cta" href="https://www.toasttab.com/catering/wahoo-bbq-new-10-centre-court/?mode=fulfillment">Schedule Bulk Carry Out</a>
          </div> 
        </motion.div>
        <motion.div className="socials-banner" id="banner"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .5,
            duration: 1
          }}
        >
          <div className="icons-div">
            <a className="icon" target="_blank" href="https://www.facebook.com/WahooBBQVirginia/">
              <Image
                className="icon-image"
                src="/icons8-facebook.svg"
                fill={true}
                alt="facebook icon"
              />
            </a>
            <a className="icon" target="_blank" href="https://www.instagram.com/wahoo_bbq/">
              <Image
                className="icon-image"
                src="/icons8-instagram.svg"
                fill={true}
                alt="instagram icon"
              />
            </a>
            </div>
        </motion.div>
      </section>

      <section className="about-section">
        <div className="exterior-image-div">
          <Image
            className="exterior-image"
            src="/exterior-sign.webp"
            fill={true}
            alt="wahoo bbq sign"
          />
        </div>
        <div className="about-text-div">
          <h1 className="about-header">Our Mission.</h1>
          <motion.p className="about-text"
            ref={firstRead}
            style={{
              opacity: firstInView ? 1 : 0,
              y: firstInView ? 0 : 50,
              transition: "1s"
            }}
          >Welcome to Wahoo BBQ, where we invite you to experience the ultimate barbecue adventure! At Wahoo BBQ, we pride ourselves on serving up a delectable array of mouthwatering dishes crafted from meticulously curated recipes passed down through generations. Step into our unique and inviting atmosphere, where the intoxicating aroma of smoked meats fills the air, and every bite is a celebration of flavor. We are more than just a restaurant; we are a community hub, fostering connections and creating memorable experiences for all who walk through our doors.</motion.p>
          <motion.p className="about-text"
            ref={secondRead}
            style={{
              opacity: secondInView ? 1 : 0,
              y: secondInView ? 0 : 50,
              transition: "1s"
            }}
          >Looking to elevate your next event? Let Wahoo BBQ cater to your needs! Whether it's a corporate gathering, family reunion, or birthday bash, our dedicated team is committed to providing the same exceptional quality food and service that defines our restaurant experience, all at an affordable rate. With our customizable catering options, you can relax and enjoy your event while we handle the rest, ensuring that every guest leaves satisfied and craving more of our delicious barbecue delights. Call <a href="tel:434-589-2286" className="text-cta">434-589-2286</a> or <a className="text-cta" href="https://www.toasttab.com/catering/wahoo-bbq-new-10-centre-court/?mode=fulfillment">schedule online</a>!</motion.p>
        </div>
      </section>

      <motion.section className="giftcard-section"
        ref={giftcard}
        style={{
          opacity: giftInView ? 1 : 0,
          transition: "1s opacity"
        }}
      >
        <h1 className="giftcard-header">Get Gift Cards Online!</h1>
        <a href="https://www.toasttab.com/wahoo-bbq-new-10-centre-court/giftcards" className="giftcard-link">Order Here</a>
      </motion.section>

      <motion.section className="hours-and-location-section"
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: .5
        }}
      >
        <h1 className="hours-header">Hours of Operation</h1>
        <div className="hours-div">
          <p className="day">Monday:<span className="time">11 AM - 10 PM</span></p>
          <p className="day">Tuesday:<span className="time">11 AM - 10 PM</span></p>
          <p className="day">Wednesday:<span className="time">11 AM - 10 PM</span></p>
          <p className="day">Thursday:<span className="time">11 AM - 10 PM</span></p>
          <p className="day">Friday:<span className="time">11 AM - 11 PM</span></p>
          <p className="day">Saturday:<span className="time">11 AM - 11 PM</span></p>
          <p className="day">Sunday:<span className="time">CLOSED</span></p>
          <p className="day notice">Hours for bar side. Dining room closes at 9pm every day.</p>
        </div>
        <div className="location-div">
          <h1 className="address"><span>Address:</span> 10 Centre Ct, Palmyra, VA 22963</h1>
          <h1 className="phone"><span>Phone:</span> <a className="phone-number" href="tel:434-589-2286">(434) 589-2286</a></h1>
        </div>
        <div className="map-div">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14975.35077635338!2d-78.32574291957704!3d37.902862298522436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b393b3e068bf4d%3A0xffcbb09dcd2ccc90!2sWahoo%20BBQ!5e0!3m2!1sen!2sus!4v1715293289985!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </div>
      </motion.section>
    </main>
  );
}
