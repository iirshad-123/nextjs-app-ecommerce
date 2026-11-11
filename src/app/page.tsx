import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Headset,
  Sparkles,
  ShoppingBag,
  Heart,
  Star,
} from "lucide-react";

import "./home.css";

export default function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <Image
          src="/images/shop-bg.jpg"
          alt="Premium fashion collection"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={15} />
            NEW COLLECTION 2026
          </div>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style.</span>
          </h1>

          <p className="hero-description">
            Explore premium products, discover new trends,
            and find everything you love in one place.
            Your next favourite is just a click away.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="shop-button">
              Explore Collection <ArrowRight size={19} />
            </Link>

            <Link href="/aboutus" className="learn-button">
              Discover Our Story
            </Link>
          </div>

          <div className="hero-footer">
            <span>QUALITY PRODUCTS</span>
            <span>·</span>
            <span>SECURE SHOPPING</span>
            <span>·</span>
            <span>FAST DELIVERY</span>
          </div>
        </div>

        <div className="hero-side-text">
          STYLE · QUALITY · COMFORT
        </div>

      </section>


      {/* BENEFITS SECTION */}
      <section className="benefits-section">

        <div className="benefit">
          <div className="benefit-icon">
            <Truck size={25} />
          </div>
          <div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <ShieldCheck size={25} />
          </div>
          <div>
            <h3>Secure Shopping</h3>
            <p>Safe and secure payments</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <Headset size={25} />
          </div>
          <div>
            <h3>Customer Support</h3>
            <p>We're here to help you</p>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">
            <Heart size={25} />
          </div>
          <div>
            <h3>Quality Products</h3>
            <p>Products you'll love</p>
          </div>
        </div>

      </section>


      {/* CATEGORY SECTION */}
      <section className="category-section">

        <div className="section-heading">
          <div>
            <span>EXPLORE OUR COLLECTION</span>
            <h2>Shop by Category</h2>
            <p>Find exactly what you're looking for.</p>
          </div>

          <Link href="/products" className="view-all">
            View All Products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="category-grid">

          <Link href="/products" className="category-card category-one">
            <div className="category-card-content">
              <span>01 / COLLECTION</span>
              <h3>Fashion & Style</h3>
              <p>Discover your everyday style</p>
              <div className="category-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

          <Link href="/products" className="category-card category-two">
            <div className="category-card-content">
              <span>02 / COLLECTION</span>
              <h3>Electronics</h3>
              <p>Technology made simple</p>
              <div className="category-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

          <Link href="/products" className="category-card category-three">
            <div className="category-card-content">
              <span>03 / COLLECTION</span>
              <h3>Accessories</h3>
              <p>Complete your perfect look</p>
              <div className="category-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

        </div>

      </section>


      {/* PROMO SECTION */}
      <section className="promo-section">

        <div className="promo-content">
          <span>THE MY APP EXPERIENCE</span>

          <h2>
            Good Products.
            <br />
            Better Experiences.
          </h2>

          <p>
            Discover a collection designed around your lifestyle.
            Quality, convenience and style come together
            to make every shopping experience special.
          </p>

          <Link href="/products" className="promo-button">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>

        <div className="promo-decoration">
          <div className="promo-circle">
            <ShoppingBag size={85} strokeWidth={1} />
            <span>MY APP</span>
          </div>
          <Star className="promo-star" size={35} />
        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="home-cta">

        <span>YOUR NEXT FAVOURITE IS WAITING</span>

        <h2>Ready to Find Something You Love?</h2>

        <p>
          Explore our collection and make your shopping experience special.
        </p>

        <Link href="/products" className="cta-button">
          Shop All Products <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}