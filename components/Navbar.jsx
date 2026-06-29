export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-600">
          Samvidha Papad
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="rounded-full bg-orange-600 px-5 py-2 text-white hover:bg-orange-700 transition"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
