import React from 'react'
import "../styles/Services.css"
import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt,FaMapMarkerAlt } from 'react-icons/fa'
const Services = () => {
  const cards = [
    {
      title: "Organized Shifts, Stronger Teams",
      text: "At ShiftsCube, we prioritize creating a stable and supportive environment where every team feels empowered.",
      image: "./care23.jpeg"
    },

    {
      title: "Seamless Shift Guaranteed",
      text: "We ensure every shift runs smoothly through structured planning, clear communication, and smart scheduling. Our approach minimizes confusion, prevents overlap, and keeps your team operating efficiently — every time.",
      image: "./care24.jpeg"
    },
    
    {
      title: "Team-Focused Shift Stratey",
      text: "We believe teams perform best through collaboration. Our approach integrates practical tools for success",
      image: "./care25.jpeg"
    }, 

    {
      title: "Team Collaboration and Growth",
      text: "We focus on building strong teamwork and operational resilience in employees",
      image: "./care26.jpeg"
    },

    {
      title: "Secure and Engaging Space",
      text: "Your Team's success is our priority. ShiftsCube ensures system, reliable tools, and expert support",
      image: "./care27.jpeg"
    },

    {
      title: "Shift Management Made Simple",
      text: "We understand the challenges of scheduling shifts, so we provide flexible, smartly desiged tools.",
      image: "./care28.jpeg"
    }
  ]
  return (
   <>
     <section className="about-us-section">
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">Seamless Shift Plannig For Your Employees</h1>
          <p className="about-us__description">
            Welcome to ShiftsCube, a platform dedicated to simplifying shift management and empowering businesses to run smoothly.
          </p>
        </div>
      </div>
    </section>

    <section className="allwedo__section">
      <div className="allwedo__header">
        <h2>It is all we do</h2>
        <p>
          We provide a range of tools and strategies to support efficient scheduling, team collaboration, productivity, and overall workforce growth
        </p>
      </div>

      <div className="allwedo__grid">
        {cards.map((card, index) => (
          <div key={index} className="allwedo__card">
            <img src={card.image} alt="" className="allwedo__image" />
            <div className="allwedo__content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="services1" className="allwedo__link">
                Find out more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>


          
      <section className="community-section">
        <div className="community-image">
          <img src="/care29.jpeg" alt="" />
        </div>
        <div className="community-content">
          <h2>Are You Ready to Explore More?</h2>
        <p>
          Don’t miss out on expert shift management insights, productivity tips, and team-focused strategies! Stay
          connected with us for the latest updates and exclusive features.
        </p>
        <button  className="community-btn">Join Our Community →</button>
        </div>
    </section>

    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p>
            We are here to support you on your journey to smarter shift management.
          </p>

          <div className="contact-item">
            <FaPhoneAlt className='icon'/>
          <div>
          <h4>Phone</h4>
          <p>+44 545 989 626</p>
        </div>
      </div>

      <div className="contact-item">
        <FaEnvelope className='icon'/>
        <div>
          <h4>Email Adress</h4>
          <p>shiftscube@gmail.com</p>
        </div>
      </div>

      <div className="contact-item">
        <FaMapMarkerAlt className='icon'/>
        <div>
          <h4>Location</h4>
          <p>28 Green Tower, Street Name, London UK</p>
        </div>
      </div>
    </div>

    <div className="contact-form">
      <form>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Subject' />
        <textarea placeholder='Messages'></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
    </div>
  </section>
   </>
  )
}

export default Services