import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo />

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-orange-600 transition">
            Home
          </a>

          <a href="#about" className="hover:text-orange-600 transition">
            About
          </a>

          <a href="#products" className="hover:text-orange-600 transition">
            Products
          </a>

          <a href="#contact" className="hover:text-orange-600 transition">
            Contact
          </a>
        </div>

        <a
          href="https://wa.me/919829480506"
          className="rounded-full bg-orange-600 px-5 py-2 text-white font-semibold hover:bg-orange-700 transition"
        >
          Order Now
        </a>

      </div>
    </nav>
  );
}
