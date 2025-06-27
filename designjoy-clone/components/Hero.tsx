const Hero = () => (
  <section className="w-full flex flex-col items-center justify-center py-24 text-center gap-6 bg-gradient-to-b from-white to-gray-50">
    <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">Design subscriptions for <span className="text-blue-600">everyone</span></h1>
    <p className="text-lg md:text-2xl text-gray-600">Pause or cancel anytime.</p>
    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
      <a href="#pricing" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">See pricing</a>
      <a href="#book" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">Book a call</a>
    </div>
  </section>
);

export default Hero; 