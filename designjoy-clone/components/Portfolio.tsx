const Portfolio = () => (
  <section className="w-full max-w-5xl mx-auto py-16 px-4">
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="flex-1 flex flex-col gap-2">
        <div className="font-semibold text-blue-600">Buy Me A Coffee</div>
        <div className="text-gray-600 text-sm mb-2">Fintech Product of the Year</div>
        <div className="font-semibold text-blue-600">Switchboard</div>
        <div className="text-gray-600 text-sm mb-2">Remote Work Product of the Year</div>
        <div className="font-bold text-lg mt-4">Recent work</div>
        <p className="text-gray-700 mb-2">We're talking "Product of the Year" good.</p>
        <a href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&type=design&node-id=906-2343&viewport=450%2C721%2C0.13&t=ZYPXbxSFD1m31WCi-1&scaling=min-zoom&mode=design" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">See recent work</a>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4 mt-8 md:mt-0">
        {['Web design','Logos','Slide decks','Branding','Social media','UI/UX design','Webflow development','Mobile apps','Print design','Email','Display ads','Icons','Brand guides','+ more'].map((service) => (
          <div key={service} className="bg-white rounded-lg shadow p-4 text-center text-gray-700 text-sm border border-gray-100">{service}</div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 