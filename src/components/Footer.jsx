import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080b0a] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <Link to="/" className="text-3xl font-black tracking-tight">
              APEX<span className="text-lime-400">.</span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-5 max-w-xs">
              Push your limits. Find your strength. Become part of a community
              built around movement, discipline and performance.
            </p>

            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="border border-white/20 rounded-full px-4 py-2 text-xs hover:bg-lime-400 hover:text-black transition-all">
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                className="border border-white/20 rounded-full px-4 py-2 text-xs hover:bg-lime-400 hover:text-black transition-all">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">
              Explore
            </h3>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <Link to="/" className="hover:text-lime-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-lime-400 transition-colors">About Us</Link>
              <Link to="/sports" className="hover:text-lime-400 transition-colors">Our Sports</Link>
              <Link to="/coaches" className="hover:text-lime-400 transition-colors">Our Coaches</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">
              Membership
            </h3>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <Link to="/membership" className="hover:text-lime-400 transition-colors">Membership Plans</Link>
              <Link to="/events" className="hover:text-lime-400 transition-colors">Upcoming Events</Link>
              <Link to="/contact" className="hover:text-lime-400 transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm leading-7">
              Have questions about membership or training? Our team is here to help.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 text-lime-400 font-semibold text-sm hover:gap-4 transition-all"
            >
              Contact our team <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} APEX Athletic Club. All rights reserved.</p>
          <p>Built for those who never stop moving.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
