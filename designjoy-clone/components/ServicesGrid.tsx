const services = [
  "Web design",
  "Logos",
  "Slide decks",
  "Branding",
  "Social media",
  "UI/UX design",
  "Webflow development",
  "Mobile apps",
  "Print design",
  "Email",
  "Display ads",
  "Icons",
  "Brand guides",
  "+ more"
];

const ServicesGrid = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-2xl font-bold mb-8 text-center">All the things you need under one roof.</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {services.map((service) => (
        <div key={service} className="bg-white rounded-lg shadow p-4 text-center text-gray-700 text-sm border border-gray-100">{service}</div>
      ))}
    </div>
  </section>
);

export default ServicesGrid; 