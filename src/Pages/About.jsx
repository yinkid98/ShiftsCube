import React from 'react'
import "../styles/About.css"
import { FaFistRaised, FaCogs, FaUsers, FaBullhorn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


const About = () => {
  return (
    <>
        <section className="about-us-section">
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">About Us</h1>
          <p className="about-us__description">
            Welcome to ShiftsCube, a platform dedicated to simplifying shift management and empowering businesses to run smoothly.
          </p>
        </div>
      </div>
    </section>
    <section className="abt__section">
      <div className="abt__container">
        <div className="abt__image">
          <img src="/care11.jpeg" alt="About" />
        </div>
        <div className="abt-content">
          <p className="abt-us-label">About Us</p>

          <div className="empower-section">
            <h2 className="empower-heading">Empowering Businesses</h2>
            <h2 className="empower-subheading">With Smarter Shift Management</h2>
          </div>

          <div className="description-section">
            <p className="description-text">
              Reliable shift management is essential for workers balancing unpredictable schedules and demanding jobs.
              It provides structure, ensures fair scheduling, and allows employess to plan their personal lives with confidence
            </p>
            <button className="learn-more-btn">
              Learn More
            </button>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">180+</div>
                <div className="stat-label">Our Complete Projects</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">120+</div>
                <div className="stat-label">Happy Clients</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">International Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mission-section">
      <div className="mission__container">
        <div className="mission__text">
          <h4 className="mission__label">Our Mission</h4>
          <h2 className="mission__title">
            Empowering Business with Smarter Shift Management
          </h2>
          <p className="mission__description">
            At ShiftsCube, our mission is to simplify workforce scheduling and empower
            organizations to operate with efficiency, transparency, and balance
          </p>
          <button className="mission__btn">Learn More</button>
        </div>
        <div className="mission__grid">
          <div className="mission__card">
            <div className="card__icon"><FaFistRaised/></div>
            <h4 className="card__title">Empowerment</h4>
            <p className="card__description">
              Empower businesses to overcome scheduling challenges through
              innovative technology and relaible guidance
            </p>
          </div>

          <div className="mission__card">
            <div className="card__icon"><FaUsers/></div>
            <h4 className="card__title">Community Building</h4>
            <p className="card__description">
              Build a supportive community where shift workers and managers can 
              connect, collaborate, and share best practice for efficient scheduling
            </p>
          </div>

          <div className="mission__card">
            <div className="card__icon"><FaCogs/></div>
            <h4 className="card__title">Personalized Approach</h4>
            <p className="card__description">
              Every business is unique. Our mission is to provide tailored shift
              management solutions and consulting
            </p>
          </div>

          <div className="mission__card">
            <div className="card__icon"><FaBullhorn/></div>
            <h4 className="card__title">Advocacy and Awareness</h4>
            <p className="card__description">
              Our mission extends beyond shift management to empower organizaions with
              smarter, streamlined workforce solutions
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="testimonial-section">
      <div className="testimonial__container">
        <div className="testimonial__header">
          <div>
            <h4 className="testimonial__label">Testimonial</h4>
            <h2 className="testimonial__title">What our Clients say About us</h2>
          </div>
          <a href="" className="testimonial__btn">View More →</a>
        </div>

        <div className="testimonial__cards">
          <div className="testimonial__card">
            <img src="/client1.png" alt="" className='testimonial__photo'/>
            <div className="testimonial__content">
              <span className="quote-icon">"</span>
              <h3 className="testimonial__quote">Exceptional Support and Reliability</h3>
              <p className="testimonial__text">
                We couldn't be happier with ShiftsCube!. THe platform makes managing shifts effortless,
                and the support team is always responsive and helpful.
              </p>
              <div className="testimonial__stars">★★★★★</div>
              <p className="testimonial__author">
                <strong>Dr. Abu Talal</strong>, Consultant Interventional Cardiologist
              </p>
            </div>
          </div>

          <div className="testimonial__card">
            <img src="/client2.png" alt="" className="testimonial__photo" />
            <div className="testimonial__content">
              <span className="quote-icon">“</span>
              <h3 className="testimonial__quote">Reliable Partner in Growth</h3>
              <p className="testimonial__text">
              As our company grew, managing shift manually becam impossible.ShiftsCube sealed with us seamlessly giving us
              confidence that our workforce is always in sync
              </p>
              <div className="testimonial__stars">★★★★★</div>
              <p className="testimonial__author">
                <strong>Sad bin Ali</strong>, Cosultant Interventional Cardiologist
              </p>
            </div>
          </div>

          <div className="testimonial__card highlighted">
            <img src="/client3.png" alt="" className="testimonial__photo" />
            <div className="testimonial__content">
              <span className="quote-icon">“</span>
              <h3 className="testimonial__quote">Game-Changer for Our Business </h3>
              <p className="testimonial__text">
              Before ShiftsCube, scheduling was a nightmare. Now Everything is streamlined, and we save hours every week.
              </p>
              <div className="testimonial__stars">★★★★★</div>
              <p className="testimonial__author">
                <strong>Hossain</strong>, Consultant Interventional Cardiologist
              </p>
            </div>
          </div>

          <div className="testimonial__card highlighted">
            <img src="/client4.png" alt="" className="testimonial__photo" />
            <div className="testimonial__content">
              <span className="quote-icon">“</span>
              <h3 className="testimonial_quote">Outstanding Service</h3>
              <p className="testimonial__text">
                We have been beyond impressed with the ShiftsCube.
                 The platform has gone above and beyond to deliver a seamless shift manaement experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="care__section">
      <div className="care__container">
        <div className="care__header">
          <div>
            <h4 className="care__label">Our</h4>
            <h2 className="care__title">Care givers</h2>
          </div>
        </div>

        <div className="care__grid">
          {[
            {img: "/C1.png", name:"Wade Warren", role: "Volunteer"},
            {img: "/c2.png", name:"Ralph Edwards", role: "Activities Coordinator"},
            {img: "/c3.png", name:"John Smith", role: "Volunteer"},
            {img: "/c4.png", name:"Steve Edwards", role: "Volunteer"},
          ] .map((caregiver, index) => (
            <div className="care__card" key={index}>
              <img src={caregiver.img} alt={caregiver.name} className="care__photo" />
              <div className="care__overlay">
                <p className="care__name">{caregiver.name}</p>
                <p className="care__role">{caregiver.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    </>
  )
}

export default About