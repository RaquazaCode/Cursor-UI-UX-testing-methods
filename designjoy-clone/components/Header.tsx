const Header = () => (
  <header className="w-full py-6 flex justify-between items-center px-6 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl tracking-tight">Designjoy</span>
    </div>
    <nav className="flex gap-6 text-sm font-medium">
      <a href="#book" className="hover:underline">Book a call</a>
      <a href="#pricing" className="hover:underline">See pricing</a>
      <a href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ" target="_blank" rel="noopener noreferrer" className="hover:underline">Login</a>
    </nav>
  </header>
);

export default Header; 