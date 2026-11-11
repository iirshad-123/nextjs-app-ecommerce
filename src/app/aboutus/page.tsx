import React from 'react'
import './about.css'
import { Target, Heart, Award, Users, ShoppingBag, ShieldCheck } from 'lucide-react'

function AboutUs() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <span>ABOUT OUR COMPANY</span>
        <h1>We Make Shopping <br /> Simple & Enjoyable</h1>
        <p>
          Welcome to My App! We believe shopping should be simple,
          convenient and enjoyable. Our goal is to bring quality
          products and an amazing shopping experience to everyone.
        </p>
      </section>

      {/* About Content */}
      <section className="about-container">

        <div className="about-image">
          <div className="image-content">
            <ShoppingBag size={55} />
            <h2>My App</h2>
            <p>Your Shopping Destination</p>
          </div>
        </div>

        <div className="about-content">
          <span>WHO WE ARE</span>
          <h2>More Than Just An Online Store</h2>
          <p>
            At My App, we are passionate about making online shopping
            easier and better. We bring together a wide range of products
            so customers can find what they need in one place.
          </p>

          <p>
            We focus on quality, customer satisfaction and a smooth
            shopping experience. Every interaction matters to us,
            and we continuously work to improve our services.
          </p>

          <div className="about-stats">
            <div>
              <h3>100%</h3>
              <p>Customer Focus</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Online Shopping</p>
            </div>
          </div>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="section-heading">
          <span>WHAT DRIVES US</span>
          <h2>Our Mission & Vision</h2>
          <p>Everything we do is guided by our commitment to customers.</p>
        </div>

        <div className="mission-cards">

          <div className="mission-card">
            <div className="mission-icon">
              <Target size={30} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide a simple, reliable and convenient online
              shopping experience with quality products and
              customer-focused service.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Heart size={30} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted shopping destination where
              customers enjoy discovering and purchasing
              products with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Shopping Made Better</h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <ShoppingBag size={32} />
            <h3>Quality Products</h3>
            <p>Explore a variety of products for your everyday needs.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={32} />
            <h3>Secure Shopping</h3>
            <p>We aim to make every shopping experience safe and reliable.</p>
          </div>

          <div className="feature-card">
            <Users size={32} />
            <h3>Customer First</h3>
            <p>Your satisfaction and experience are always our priority.</p>
          </div>

          <div className="feature-card">
            <Award size={32} />
            <h3>Our Commitment</h3>
            <p>We continuously work to deliver a better shopping experience.</p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta">
        <h2>Ready to Explore?</h2>
        <p>Discover our collection and find something you love.</p>
        <a href="/products">Explore Products</a>
      </section>

    </div>
  )
}

export default AboutUs