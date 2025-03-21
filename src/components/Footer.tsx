import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="flex">
      <footer className="w-full px-5 py-12 bg-gray-900 text-gray-300 flex justify-center">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    <Image
                      src="/biailogowithouttext.png"
                      alt="biai"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">Bi.ai</span>
              </div>
              <p>
                F2, Chandaka Industrial Estate Infocity Area, Chandrasekharpur
                Bhubaneswar - 751024
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#technologies" className="hover:text-white">
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Technologies
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Biotechnology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    VLSI & Chip Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    YouTube
                  </Link>
                </li>
                <li>
                  +12 12345 67890
                </li>
                <li>
                  biai@example.com
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.5172552558015!2d85.80745338924652!3d20.340192953652814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1742466442357!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Bi.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
