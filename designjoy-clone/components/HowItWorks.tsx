const steps = [
  {
    title: "Subscribe",
    description: "Subscribe to a plan & request as many designs as you'd like."
  },
  {
    title: "Request",
    description: "Request whatever you'd like, from mobile apps to logos."
  },
  {
    title: "Receive",
    description: "Receive your design within two business days on average."
  }
];

const HowItWorks = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">The way design should&apos;ve been done in the first place</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {steps.map((step, i) => (
        <div key={step.title} className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center gap-4 border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-2">{i+1}</div>
          <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
          <p className="text-gray-600 text-center">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks; 