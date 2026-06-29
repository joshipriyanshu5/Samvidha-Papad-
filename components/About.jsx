export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900"
            alt="Traditional Indian Food"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            About Samvidha Papad
          </span>

          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Crafted with Tradition,
            <br />
            Served with Love.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Samvidha Papad brings together authentic Rajasthani recipes,
            premium-quality ingredients, and modern hygiene standards to create
            delicious handcrafted papads. Every batch is prepared with care,
            preserving the taste of tradition while delivering exceptional
            quality to every family.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-orange-600">100%</h3>
              <p className="text-gray-600">Premium Ingredients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">Fresh</h3>
              <p className="text-gray-600">Made with Care</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">Traditional</h3>
              <p className="text-gray-600">Family Recipes</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">Trusted</h3>
              <p className="text-gray-600">Quality & Hygiene</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
