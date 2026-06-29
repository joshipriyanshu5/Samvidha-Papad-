export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-block bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-semibold mb-6">
            Premium Handcrafted Papads
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Every Bite
            <span className="text-orange-600"> Carries </span>
            the Taste of Tradition.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Experience the authentic flavour of Rajasthan with handcrafted
            papads made from premium ingredients, traditional recipes, and
            modern hygiene.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/919829480506"
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition"
            >
              Order on WhatsApp
            </a>

            <a
              href="#products"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition"
            >
              Explore Products
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Papad"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
