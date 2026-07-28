import React from 'react'
import "../styles/services1.css"

const Services1 = () => {
  return (
    <>
      <section className="shift-section">
        {/* Hero Section (Text Only) */}
        <div className="hero hero-text-only">
          <div className="hero-text">
            <h2>Smart Shift Management Tailored to Your Team’s Needs</h2>
            <p>
              At the heart of ShiftCube is a commitment to delivering smooth,
              balanced shifts and organized care for every client. 
              Our approach simplifies team coordination, improves scheduling efficiency, 
              and ensures every shift runs seamlessly.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="process">
          <p className="process-tag">“Easy Steps for Team Work Success”</p>
          <h3>Our Simple Process for Smarter Shift Management</h3>

          <div className="process-steps">
            <div className="step">
              <h4>01</h4>
              <h5>Shift Customization and Team Planning</h5>
              <p>
                We analyze your team’s strengths and assign roles that enhance
                collaboration and care efficiency.
              </p>
            </div>

            <div className="step">
              <h4>02</h4>
              <h5>Shift Breakdown and Smooth Onboarding</h5>
              <p>
                Detailed scheduling ensures clarity, fairness, and no overlap or
                confusion among team members.
              </p>
            </div>

            <div className="step">
              <h4>03</h4>
              <h5>Continuous Support and Team Growth</h5>
              <p>
                We provide ongoing assistance and training to keep teams aligned
                with new shifts and care goals.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features">
          <h3>Features and Services</h3>
          <p>
            At the heart of ShiftCube is a team dedicated to providing tailored
            workforce support for every team.
            <br />
            Here’s what makes our service unique:
          </p>

          <div className="features-content">
            <div className="features-text">
              <div className="feature-item">
                <h4>1. Trusted Team Members</h4>
                <p>
                  Our experienced team members are qualified professionals,
                  equipped with compassion and dedication.
                </p>
              </div>

              <div className="feature-item">
                <h4>2. Flexible Team Plans</h4>
                <p>
                  Every team is unique. We develop personalized schedules and
                  plans that match your operational goals.
                </p>
              </div>

              <div className="feature-item">
                <h4>3. Engaging Team Activities</h4>
                <p>
                  We organize educational and team-building activities to foster
                  growth and harmony.
                </p>
              </div>

              <div className="feature-item">
                <h4>4. Trusted Safety Practices</h4>
                <p>
                  Maintaining the highest standards of safety and accountability
                  to ensure trust and quality care.
                </p>
              </div>
            </div>

            <div className="features-image">
              <img src="/care5.jpeg" alt="Team support" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services1
