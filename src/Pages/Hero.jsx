import React, { useState } from 'react'
import axios from "axios"
import '../styles/home.css'
import { FaFistRaised, FaCogs, FaUsers, FaBullhorn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from "react-icons/fa";
const Hero = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubscribe = async() => {
    if(!email) {
      setMessage("Please Enter an Email address")
    }
    try{
      const response = await axios.post("http://localhost:5000/subscribe", {email});
      setMessage(response.data.message)
      setEmail("")
    } catch (error){
      console.error("Error:", error)
      setMessage("Subscription Failed. Try again later")
    }
  };


  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "What types of teams and industries do you support with shift management?",
      answer: "We support various industries and team types - including healthcare retail, hospitality, logistics, and more - helping business streamline shift management with ease",
    },
      {
      question: "How do I register my business or team for ShiftCube services?",
      answer:
        "To get started, simply sign up on our website and create an account. Provide basic details about your business—such as team size, industry, and scheduling needs. Once registered, you’ll gain access to our platform, and our team will be available to guide you through setup and onboarding.",
    },
    {
      question: "How do you handle scheduling emergencies or last-minute changes?",
      answer:
        "ShiftCube allows managers to make real-time adjustments to shifts, notify team members instantly, and ensure smooth coverage even during last-minute changes.",
    },
    {
      question: "Are there any special features for teams?",
      answer:
        "Yes, teams can collaborate efficiently with built-in chat, shared calendars, and performance tracking features to stay connected and organized.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
<h1 className="hero__title"> 
Smarter Shifts, Management for Caregivers.
</h1>
<p className="hero__description">
Welcome to ShiftsCube - a powerful platform designed to simplify shift management and empower teams.
Our mission is to provide the tools, insight, and support you need to stay organized, 
streamline operations, and thrive in every aspect of workforce management
</p>
<div className="hero__newsletter">
<input type="email" placeholder="Enter your email to get updates" value={email} onChange={(e) => setEmail(e.target.value)} className="hero__input" />
<button onClick={handleSubscribe} className="hero__subscribe-btn">Subscribe</button>
{message && <p className='hero__message'>{message}</p>}
</div>
</div>
<div className="hero__image">
<img src="/care.jpeg" alt="hero" />
</div>
      </div> 
    </section>

      <section className="about-section">
        <div className="about__container">
          <div className="about__image">
            <img src="/care6.jpeg" alt="About ShiftsCube"/>
          </div>
          <div className="about__content">
            <p className="about-us-label">About Us</p>
            <div className="solutions-section">
              <h2 className="solutions-heading">Smart Solutions for</h2>
              <h2 className="solutions-subheading"> managing Shifts with Ease</h2>
            </div>
            <div className="description-section">
              <p className="description-text">
                Effective shift management is critical for maintaining productivity and supporting
                workforce satisfaction. A reliable scheduling system ensures operational eficiency,
                minimize conflicts, and provides employees with the clarity they need to balance
                professional and personal comitments.By streamlining scheduling processes,
                organizations can reduce administrative burden, enhance employee retention, and
                foster a healthier, more engaged workplace culture
              </p>

              <button className="learn-more-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mision-section">
        <div className="mission__container">
          <div className="mission__text">
            <h4 className="mission__label">Our Mission</h4>
            <h2 className="mission__title">
              Empowering Business With Smarter Shift Management
            </h2>
            <p className="mission__description">
              At ShifstCube, our mission is to simplify workforce scheduling and empower
              organizations to operate with efficiency, transparency, and balance
            </p>
            <button className="mission__btn">Learn More</button>
          </div>

          <div className="mission__grid">
            <div className="mission__card">
              <div className="card__icon"><FaFistRaised /></div>
              <h4 className="card__title">Empowerment</h4>
              <p className="card__description">
                Empower businesses to overcome scheduling chanlleges through 
                innovative technology and reliable guidance.
              </p>
            </div>

            <div className="mission__card">
              <div className="card__icon"><FaUsers /></div>
              <h4 className="card__title">Community Building</h4>
              <p className="card__description">
                Build a supportive community where shift workers and managers can 
                connect, collaborate, and share best practice for efficient scheduling.
              </p>
            </div>

            <div className="mission__card">
              <div className="card__icon"><FaCogs /></div>
              <h4 className="card__title">Personalized Approach</h4>
              <p className="card__description">
                Every business is unique. Our mission is to provide tailored shift
                management solutions and consulting.
              </p>
            </div>

            <div className="mission__card">
              <div className="card__icon"> <FaBullhorn /></div>
              <h4 className="card__title">Advocacy and Awareness</h4>
              <p className="card__description">
                Our mission extends beyond shift management to empowering organizaions with 
                smarter, streamlined workforce solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <sectiion className="heal-section">
        <div className="heal__container">
          <div className="heal__image-wrapper">
            <div className="heal__content-card">
              <div className="heal__header">
                <h1 className="heal__title">
                  Heal Yourself
                </h1>
                <p className="heal__description">
                  Our mision is to simplify workforce management.We provide powrful tools and resources to support efficient scheduling,
                  seamless communication, and balanced workloads-helping teams thrive and businesses grow
                </p>
              </div>

              <div className="heal__topics">
                <div className="heal__topic">
                  <div className="topic__check">✓</div>
                  <div className="topic__content">
                    <h3 className="topic__title">Emotional Healing</h3>
                    <p className="topic__text">
                      Our content explores the chanlleges of modern shift work and support workers emotional well-being and social balance
                      ensuring healthier, more sustainable careers
                    </p>
                  </div>
                </div>

                <div className="heal__topic">
                  <div className="topic__check">✓</div>
                  <div className="topic__content">
                    <h3 className="topic__title">Self-Care</h3>
                    <p className="topic__text">
                      We offer practical tips and strategies to help shift workers manage stress, maintain work-life balance,
                      and prioritize their well-being.
                    </p>
                  </div>
                </div>

                <div className="heal__topic">
                  <div className="topic__check">✓</div>
                  <div className="topic__content">
                    <h3 className="topic__title">Mindset and Empowerment</h3>
                    <p className="topic__text">
                      We encourage shift workers to view challenges as opportunities for growth, fostering resilience,
                      adaptability, and continue learning in every workplace.
                    </p>
                  </div>
                </div>

                <div className="heal__topic">
                  <div className="topic__check">✓</div>
                  <div className="topic__content">
                    <h3 className="topic__title">Relationships & Boundaries</h3>
                    <p className="topic__text">
                      Establishing health routines and setting clear boundaries can help shift workers build trust,
                      improve teamwork, and maintain a balanced work-life relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img src="/care2.jpeg" alt="" className='heal__bg-image' />
          </div>
        </div>
      </sectiion>


<section class="blog-section">
        <div class="blog__container">
            <div class="blog__header">
                <div class="blog__title">Inspiration and Guidance for Shift Workers</div>
            </div>
            <div class="blog__posts">
                <div class="blog__post">
                    <div class="post__image">
                        
                        <img src="/care3.jpeg" alt="Shift Management Guide"/>
                    </div>
                    <div class="post__content">
                        <h2 class="post__title"><strong>Our Shift Management Guide</strong></h2>
                        <p class="post__description">
                            This guide provides practical strategies and expert advice to help managers and teams optimize scheduling, improve communication, and create a more efficient workplace.
                        </p>
                        <p class="post__link"><strong>Listen now →</strong></p>
                    </div>
                </div>
                <div class="blog__post">
                    <div class="post__image">
                        <img src="/care4.jpeg" alt="" />
                    </div>
                    <div class="post__content">
                        <h2 class="post__title"><strong>Building Resilient Teams</strong></h2>
                        <p class="post__description">
                            Fostering strength and adaptability in every workforce. Equipping teams to face challenges with confidence and agility.
                        </p>
                        <p class="post__link"><strong>Listen now →</strong></p>
                    </div>
                </div>
                <div class="blog__post">
                    <div class="post__image">
                        <img src="/care5.jpeg" alt="" />
                    </div>
                    <div class="post__content">
                        <h2 class="post__title"><strong>Operational Reliability</strong></h2>
                        <p class="post__description">
                            Building a strong foundation for the future. Ensuring smooth operations and protecting what matters most - your team's performance and stability.
                        </p>
                        <p class="post__link"><strong>Listen now →</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image">
          <img src="/Image.png" alt="FAQ" />
        </div>
        <div className="faq-card">
          <p className="faq-label">FAQ</p>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="blog-section">
        <div className="blog__container">
          <div className="blog__header">
            <div className="blog__title">Some Outstanding Articles</div>
          </div>

          <div className="blog__posts">
            <div className="blog__post">
              <div className="post__image">
                <img src="/care8.jpeg" alt="" />
              </div>
              <div className="post__content">
                <h2 className="post__title"><strong>Practical Shift Management Tips</strong></h2>
                <p className="post__description">
                  Practical Shift Management Tips provide essential guidance for managers
                   and team leaders to navigate daily workforce challenges with ease.
                </p>
                <p className="post__link"><strong>Listen now →</strong></p>
              </div>
            </div>

            <div className="blog__post">
              <div className="post__image">
                <img src="/care9.jpeg" alt="" />
              </div>
              <div className="post__content">
                <h2 className="post__title"><strong>Emotional Well-being</strong></h2>
                <p className="post__description">
                   It involves providing support, understanding, and creating a safe.
                </p>
                <p className="post__link"><strong>Listen now →</strong></p>
              </div>
            </div>

            <div className="blog__post">
              <div className="post__image">
                <img src="/care10.jpeg" alt="" />
              </div>
              <div className="post__content">
                <h2 className="post__title"><strong>Personal Growth and Self-Discovery</strong></h2>
                <p className="post__description">
                  Personal growth is the journey of understanding oneself.
                </p>
                <p className="post__link"><strong>Listen now →</strong></p>
              </div>
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
    </>
  )
}

export default Hero