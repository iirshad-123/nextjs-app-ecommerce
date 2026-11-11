"use client";
import Link from "next/link";
import "./navigation.css";
import { useCart } from "../../context/cartcontext";
import { Search, ShoppingCart } from "lucide-react";
import { useSearch } from "../../search/search";

function Navigation() {
  const { cart } = useCart();
  const{setSearchTerm} = useSearch();
  const searchValue=(event:any)=>{
    const searchVal=event.target.value;
    setSearchTerm(searchVal);
  }


  return (
    <div className="navigation flex items-center p-4 text-black">
      <nav className="relative flex items-center w-full">
        <div className="logo text-2xl font-bold text-white px-4 py-2 ">
          <Link href="/">My App</Link>
        </div>

        <ul className="absolute left-1/2 -translate-x-1/2 flex gap-5 items-center text-lg  text-white font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link href="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="cart-link">
              <ShoppingCart className="w-4 h-4" />
              <span>({cart.length})</span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center w-64 rounded-full border border-gray-300 bg-white px-3 py-1 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100 ml-auto">
          <Search className="h-4 w-4 shrink-0 text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            onChange={searchValue}
            className="ml-2 min-w-0 flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />

          <button className="ml-2 shrink-0 rounded-full bg-orange-500 p-1.5 text-white hover:bg-orange-600">
            <Search size={16} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
