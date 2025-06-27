const benefits = [
  { title: "Design board", description: "Easily manage your design queue with a Trello board." },
  { title: "Fixed monthly rate", description: "No surprises here! Pay the same fixed price each month." },
  { title: "Fast delivery", description: "Get your design one at a time in just a couple days on average." },
  { title: "Top-notch quality", description: "Senior-level design quality at your fingertips, whenever you need it." },
  { title: "Flexible and scalable", description: "Scale up or down as needed, and pause or cancel at anytime." },
  { title: "Unique and all yours", description: "Every design is made especially for you and is 100% yours." },
];

const BenefitsCarousel = () => (
  <section className="w-full py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Why Designjoy?</h2>
      <div className="flex items-center gap-4 overflow-x-auto pb-4">
        {benefits.map((b) => (
          <div key={b.title} className="min-w-[260px] bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
            <div className="font-semibold text-blue-600">{b.title}</div>
            <div className="text-gray-600 text-sm">{b.description}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-600" disabled>‹</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-600" disabled>›</button>
      </div>
    </div>
  </section>
);

export default BenefitsCarousel; 