const faqs = [
  "How fast will I receive my designs?",
  "How does onboarding work?",
  "Who are the designers?",
  "Is there a limit to how many requests I can make?",
  "How does the pause feature work?",
  "How do you handle larger requests?",
  "What programs do you design in?",
  "How does Webflow development work?",
  "How will I request designs?",
  "What if I don&apos;t like the design?",
  "Are there any requests you don&apos;t support?",
  "What if I only have a single request?",
  "Are there any refunds?",
  "Can I use Designjoy for just a month?"
];

const FAQ = () => (
  <section id="faq" className="w-full max-w-3xl mx-auto py-16 px-4">
    <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
    <ul className="flex flex-col gap-4">
      {faqs.map((q) => (
        <li key={q} className="bg-white rounded-lg shadow p-4 text-gray-700 border border-gray-100">{q}</li>
      ))}
    </ul>
  </section>
);

export default FAQ; 