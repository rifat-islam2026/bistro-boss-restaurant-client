import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="lg:flex">
        <div className="lg:w-1/2 bg-slate-700 py-10">
          <div className="text-center text-white">
            <h2 className="uppercase text-3xl font-bold mb-5">contact us</h2>
            <div className="font-semibold">
              <span>123 ABS Street, Uni 21, Bangladesh</span>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p> Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-slate-800 py-10">
          <div className="text-center text-white">
            <h2 className="uppercase text-3xl font-bold mb-5">follow us</h2>
            <div>
              <span>Join us on social media</span>
              <div className="flex justify-center gap-5 mt-5 text-lg">
                <span className="hover:text-blue-500 duration-300">
                  <FaFacebookF />
                </span>
                <span className="hover:text-blue-500 duration-300">
                  <FaInstagram />
                </span>
                <span className="hover:text-blue-500 duration-300">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Footer
