import React from 'react'
import './contactus.css'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

function ContactUs() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>Let's Start a Conversation</h1>
        <p>
          Have a question or need assistance? We'd love to hear from you.
          Send us a message and we'll get back to you soon.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to us anytime.</p>

          <div className="info-item">
            <div className="info-icon"><MapPin /></div>
            <div>
              <h4>Our Location</h4>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone /></div>
            <div>
              <h4>Phone Number</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Mail /></div>
            <div>
              <h4>Email Address</h4>
              <p>support@myapp.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Clock /></div>
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Sat, 9 AM - 6 PM</p>
            </div>
          </div>

          <div className="contact-decoration"></div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll contact you.</p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" required />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                // rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactUs