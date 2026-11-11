import Link from "next/link";
import { ShoppingBag, Mail, Phone } from "lucide-react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <ShoppingBag size={22} />
            <span>My App</span>
          </Link>
          <p>Your one-stop destination for quality products.</p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/aboutus">About</Link>
          <Link href="/contactus">Contact</Link>
        </div>

        <div className="footer-contact">
          <p><Mail size={16} /> support@myapp.com</p>
          <p><Phone size={16} /> +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
}