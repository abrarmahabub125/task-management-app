const footer = () => {
  return (
    <div>
      <div className="bg-neutral-950 pt-10 flex flex-col items-center">
        <div>
          <ul className="px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[430px_1fr] gap-8 xl:max-w-[1200px]">
            <li className="xl:max-w-sm">
              <h1 className="text-white font-semibold">CS — Ticket System</h1>
              <p className="text-sm mt-1.5 font-medium text-gray-300">
                Customer Support Zone is your dedicated help center where all
                your questions, issues, and feedback are handled with care.
                Whether you need technical assistance, order updates, or general
                guidance, our support team is here to ensure a smooth and
                satisfying experience—anytime you need it.
              </p>
            </li>
            <li className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ul>
                <li className="text-lg font-semibold text-white mb-3">
                  Company
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">About Us</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Our Mission</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Contact Saled</a>
                </li>
              </ul>
              <ul>
                <li className="text-lg font-semibold text-white mb-3">
                  Services
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Products & Services</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Customer Stories</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Download Apps</a>
                </li>
              </ul>
              <ul>
                <li className="text-lg font-semibold text-white mb-3">
                  Information
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">Join Us</a>
                </li>
              </ul>

              <ul>
                <li className="text-lg font-semibold text-white mb-3">
                  Social Links
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">
                    <i className="fa-brands fa-facebook mr-2"></i>
                    @CS — Ticket System
                  </a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter mr-2"></i>
                    @CS — Ticket System
                  </a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">
                    <i className="fa-brands fa-linkedin mr-2"></i>
                    @CS — Ticket System
                  </a>
                </li>
                <li className="text-sm mb-1.5 font-medium text-gray-300 transition-all hover:translate-x-1.5">
                  <a href="#">
                    <i className="fa-solid fa-envelope mr-2"></i>
                    support@cst.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="w-full px-4 mt-4 border-t border-gray-800 py-6 text-center text-sm text-gray-400">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
