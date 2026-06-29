const products = [
  {
    name: "Moong Papad",
    desc: "Light, crispy and full of authentic flavour.",
    icon: "🌿",
  },
  {
    name: "Urad Papad",
    desc: "Traditional handcrafted premium papad.",
    icon: "🥮",
  },
  {
    name: "Jeera Papad",
    desc: "Infused with aromatic cumin seeds.",
    icon: "🌾",
  },
  {
    name: "Black Pepper Papad",
    desc: "Rich pepper taste with perfect crunch.",
    icon: "🌶️",
  },
  {
    name: "Masala Papad",
    desc: "A spicy delight for every occasion.",
    icon: "🔥",
  },
  {
    name: "Special Mix Papad",
    desc: "Our signature premium recipe.",
    icon: "⭐",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#FFF8E7] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Crafted with premium ingredients and authentic Rajasthani recipes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center"
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>

              <a
                href={`https://wa.me/919829480506?text=Hello%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(item.name)}.`}
                className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
