import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      })

      const data = await res.json();

      if (res.ok) {
        setStatus(" " + data.message);
        setFormData({ name: "", email: "", subject: "", message: ""})
      } else {
        setStatus(" " + data.message)
      }
    } catch (error){
      console.log(error);
      setStatus(" Something went wrong. Try again later.");
    }
  }


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
   <section className="about-us-section">
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">Contact Us</h1>
          <p className="about-us__description">
            Welcome to ShiftsCube, a platform dedicated to simplifying shift management and empowering businesses to run smoothly.
          </p>
        </div>
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
                   <form onSubmit={handleSubmit}>
                     <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' required />
                     <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' required />
                     <input type="text" name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject' required />
                     <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Messages' required></textarea>
                     <button type='submit'>Send Message</button>
                   </form>

                   {status && <p className='status-message'>{status}</p>}
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
   </>
  )
}

export default Contact