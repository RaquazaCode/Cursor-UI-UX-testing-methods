const Footer = () => (
  <footer className="w-full py-8 px-4 bg-white border-t border-gray-200 text-center text-sm text-gray-500 mt-12">
    <div className="mb-2">Headquartered in Phoenix, Arizona</div>
    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-2">
      <a href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of service</a>
      <span className="hidden sm:inline">|</span>
      <a href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
    </div>
    <div>
      Designjoy is experiencing a high volume of bookings, so slots are limited. For faster service, email{' '}
      <a href="mailto:hello@designjoy.co" className="text-blue-600 underline">hello@designjoy.co</a> for a same-day response.
    </div>
  </footer>
);

export default Footer; 