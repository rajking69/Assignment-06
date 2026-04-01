const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

        <ul className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <li>
            <a href="#products" className="transition hover:text-purple-600">
              Products
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-purple-600">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="transition hover:text-purple-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="transition hover:text-purple-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" className="transition hover:text-purple-600">
              FAQ
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="text-gray-600 transition hover:text-purple-600" aria-label="Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartCount}
            </span>
          </div>

          <a href="#login" className="text-sm font-medium text-gray-700 transition hover:text-purple-600">
            Login
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
