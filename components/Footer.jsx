import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Premium handcrafted papads from Rajasthan made with authentic
              recipes, quality ingredients and traditional taste.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p>📞 +91 98294 80506</p>

            <p className="mt-2">
              📍 Jodhpur, Rajasthan
            </p>

            <a
              href="https://wa.me/919829480506"
              className="inline-block mt-6 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Samvidha Papad. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
