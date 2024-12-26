import Image from "../assets/AboutPageCatnDog.jpg";

const AboutUs = () => {
  return (
    <main>
      <div className="relative bg-white">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-4 py-2">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="lg:max-w-lg space-y-6">
              <h1 className="text-6xl font-extrabold text-black">Our Story</h1>
              <p className="text-xl text-gray-600">
                Find the pawfect getaway for your pets while you're on vacation
                <br /> — where comfort and care come first
              </p>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                As pet parents, we understand the deep bond you share with your furry friends and the need to ensure they feel loved and cared for — even when you’re away.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That’s why we started StayFur: to help pet owners find trusted caregivers who provide a safe, nurturing environment where pets are treated like family.
              </p>
              <p className="text-xl font-bold text-[#B46B42]">
                Be the Reason Pets Feel Safe and Loved While Their Parents Are Away
              </p>
              <button className="mt-6 bg-[#B46B42] text-white py-3 px-6 rounded-lg text-lg hover:bg-orange-600">
                Team Up With StayFur!
              </button>
            </div>

            {/* 图片部分 */}
            <div>
              <img
                src={Image}
                alt="Cat and Dog"
                className="object-cover w-full h-full rounded-lg opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

