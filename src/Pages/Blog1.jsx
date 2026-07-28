import React from 'react'
import "../styles/Blog1.css"
import { FaArrowLeft, FaArrowRight,FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from 'react-icons/fa'
const Blog1 = () => {
  return (
    <>
    <section className="about-us-section">
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">Creative Strategies for  Memorable Shifts' Experiences</h1>
          <p className="about-us__description">
            Welcome to ShiftsCube, a platform dedicated to simplify management and empowering business to run smoothly.
          </p>
        </div>
      </div>
    </section>

    <section className="article-section">
      <div className="article-container">
        <h1 className="article-title">
          Seamless Shift Planning For Your Employess
        </h1>

        <p className="article-intro">
          Welcome to <strong>ShiftsCube</strong>, a platform dedicated to 
          simplify shift management and empowering businesses to run 
          smoothly.Learn how you can make every shift count by improving
          workflows, communications, and team satisfaction
        </p>

        <h2>Make Every Shift Count For Your Team</h2>
        <p>
          Are you looking for ways to keep your team motivated and manage
          shifts more effectively? Whether it's managing peak hours or 
          ensuring smooth handovers, the right strategies can boost 
          productivity and team spirit. These approaches will help Creative
          seamless workflows, strengthen collaboration, and keep every shift
          on track.
        </p>

        <h3>1. Seamless Shifts Adventures</h3>
        <p>
          Teams thrive when their schedules are organized and communication 
          flows clearly. With smooth handovers and structured task management,
          your employees will experience fewer disruptions and more successs.
        </p>

        <h3>2. Exploring New Shift Horizons</h3>
        <p>
          Encourage innovation in managing workloads. Explore flexibility and 
          balance across shifts to help your team adapt to changing demands 
          while staying productive.
        </p>

        <h3>3. Mastering Shift Recipes</h3>
        <p>
          Every successful shifts is a mix of teamwork, timing and trust.
          Establish consistent "recipes" for communication and task
          execution--so everyone knows their role and feels supported.
        </p>

        <h3>4. Shift Explorers' Day Out</h3>
        <p>Regular rest days and team activities are essentials for morale and 
          long-term performance Recognize hard work and celebrate small
          wins-happy teams perform better.
        </p>

        <blockquote className="article-quote">
          "When teams feel supported, they perform with greater confidence and 
          collaboration - turning challenges into opportunities"
        </blockquote>

        <p>
          By adopting simple, clear shifts routines and transparent
          communication, your team can thrive in any environment. Watch your
          team grow stronger, collaboration better, and achieve more-one shift
          at a time
        </p>

        <a href="/blog" className="back-btn">
          ← Back to Blog
        </a>
      </div>
    </section>

    <section className="article-section">
      <div className="article-container">
        <h1 className="article-title">Safety Tips for Smooth Shifts</h1>
        <p className="article-text">
          Actively monitoring team operations is essential, as employees often
          rely on guidance to perform effectively during demanding tasks.
          Promote safe practices by discouraging rushing, overcrowding, or poor
          communication, which can lead to errors and accidents. Recognize that
          newer staff may have different needs and skills levels than experienced 
          team members, so provide clear roles or tailored tasks where necessary.
          Ensure all employees are equipped with the right tools and cause 
          distractions or hazards. Just as helmets are vital for specific
          tasks, safety measures should always match the activity at hand 
          to keep workflows efficient and risk-free
        </p>

        <blockquote className="article-quote">
          <em>
            "Employees thrive when they have the freedom to work efficiency and 
            safetly. By providing clear guidance, proper resources, and a 
            structured environment, we create a workplace where their 
            productivity and collaborations can flourish"
          </em>
        </blockquote>

        <p className="article-text">
          Additionally, prioritize safe and supportive work environment with
          the rigth tools, system, and processes in place. Just as softer 
          surfaces reduce risks of injury, streamlied workflows and clearl
          protocols minimize disruptions and errors. Taking these precautions
          helps create a reliable and productive environment where teams can 
          perform, adapt, and grow with confidence
        </p>

        <div className="article-nav">
          <a href="/blog" className="nav-link prev">
            <FaArrowLeft className='nav-icon'/> Previous Post
            <br />
            <span>Balancing Shifts and Team</span>
          </a>

          <a href="" className="nav-link next">
            Next Post <FaArrowRight className='nav-icon'/>
            <br />
            <span>Tips for Running Stress-Free Shifts</span>
          </a>
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



          <section className="contact-section">
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Info</h2>
                <p>
                    We are here to support you on your journey to smarter shift management
                </p>
                <div className="contact-item">
                    <FaPhoneAlt className="icon"/>
                    <div>
                        <h4>Phone</h4>
                        <p>+44 545 989 626</p>
                    </div>
                </div>

                <div className="contact-item">
                    <FaEnvelope className="icon"/>
                    <div>
                        <h4>Email Address</h4>
                        <p>shiftscube@gmail.com</p>
                    </div>
                </div>

                <div className="contact-item">
                    <FaMapMarkedAlt className="icon"/>
                    <div>
                        <h4>Location</h4>
                        <p>28 Green Tower, Street Name, London UK</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Messages"></textarea>
                    <button type="submit">Send Messages</button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog1