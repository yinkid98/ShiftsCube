import React from 'react'
import '../styles/Blog.css'
import { Link } from "react-router-dom";
import { FaFistRaised, FaCogs, FaUsers, FaBullhorn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaArrowRight } from 'react-icons/fa'
const blogPosts = [
  {
    img: "/care16.jpeg",
    title: "Professional Growth and Team Empowerment",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  },
   {
    img: "/care17.jpeg",
    title: "Transform Your Team's Shift Experience",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  },
   {
    img: "/care18.jpeg",
    title: "Achieve more than you ever imagined with smarter shift management",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  },
   {
    img: "/care19.jpeg",
    title: "Shifts Smarter, Achieve Greater Success",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  },
   {
    img: "/care20.jpeg",
    title: "Your Shift Management Roadmap to Success",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  },
   {
    img: "/care21.jpeg",
    title: "The Ultimate Success Guide for Shift Managers",
    date: "Oct 7 2025",
    tag: "Dress Codes"
  }
]


const Blog = () => {
  return (
    <>
     <section className="about-us-section">
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">Some Outstanding Article</h1>
          <p className="about-us__description">
            Welcome to ShiftsCube, a platform dedicated to simplifying shift management and empowering businesses to run smoothly.
          </p>
        </div>
      </div>
    </section>


      <section className="about-section">
        <div className="about__container">
          <div className="about__image">
            <img src="/care15.jpeg" alt="About ShiftsCube"/>
          </div>
          <div className="about__content">
            <div className="solutions-section">
              <h2 className="solutions-heading">Unlock the Secrets to </h2>
              <h2 className="solutions-subheading">Seamless Shift Success!</h2>
            </div>
            <div className="description-section">
              <p className="description-text">Unlock the secrets to seamless shift success by optimizing workflows administrative
                eliminating inefficiences. Discover how the right strategies can boost team performance and keep running smoothly.
              </p>
             <Link to="/Blog1" className="testimonial__btn">
             Read Full →
             </Link>
            </div>
          </div>
        </div>
      </section>


    <section className="community-section">
      <div className="community-image">
        <img src="/care14.jpeg" alt="" />
      </div>
      <div className="community-content">
        <h2>Are You Ready to Explore More?</h2>
        <p>
          Don’t miss out on expert shift management insights, productivity tips, and team-focused strategies! Stay
          connected with us for the latest updates and exclusive features.
        </p>
        <button className="community-btn">Join Our Community →</button>
      </div>
    </section>

      <section className="blog__section">
        <h2>Our Insights & Resources</h2>
        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog__card">
              <img src={post.img} alt={post.title} />
              <div className="blog__content">
                <div className="blog__meta">
                  <span className="blog__tag">{post.tag}</span>
                  <span className="blog__date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <a href="#" className="blog__link">
                  Listen now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Blog