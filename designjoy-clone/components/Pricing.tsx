const features = [
  "One request at a time",
  "Avg. 48 hour delivery",
  "Unlimited brands",
  "Webflow development",
  "Unlimited stock photos",
  "Up to 2 users",
  "Pause or cancel anytime"
];

const Pricing = () => (
  <section id="pricing" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">One subscription, endless possibilities</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
        <div className="text-blue-600 font-semibold mb-2">Monthly Club</div>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-5xl font-extrabold">$4,995</span>
          <span className="text-lg text-gray-500 mb-1">/month</span>
        </div>
        <ul className="mb-6 text-gray-700 text-sm list-disc list-inside">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <a href="https://buy.stripe.com/fZe28BaiLfOO99e146" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Join today</a>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 text-gray-500 text-xs text-center">
          <div className="flex-1">Pause anytime: Temporarily pause your subscription anytime, no sweat.</div>
          <div className="flex-1">Try it for a week: Not loving it after a week? Get 75% back, no questions asked.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing; 