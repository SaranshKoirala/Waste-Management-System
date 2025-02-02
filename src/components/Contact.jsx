import Subscribe from "./Subscribe";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="h-screen flex flex-col items-center gap-20  ">
      <Subscribe />
      <div className="flex px-40 gap-20 bg-green-950 h-full justify-center items-center text-white rounded-t-4xl border-b-1 border-b-gray-600">
        <div className="text-sm text-white/70">
          <div className="font-semibold text-xl mb-3 text-white">About</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quas tenetur facilis provident assumenda maiores nisi vero? Soluta
            quidem maiores officia incidunt
          </div>
        </div>
        <div className="text-sm w-96 text-white/70">
          <div className="font-semibold text-xl mb-3 text-white">Links</div>
          <div>About Us</div>
          <div>Services</div>
          <div>Schedule Pickup</div>
          <div>Contact Us</div>
        </div>
        <div className="text-sm text-white/70 ">
          <div className="font-semibold text-xl mb-3 text-white">
            Working Hours
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            tempora consectetur nostrum dignissimos officia! Ea tempora, impedit
            hic necessitatibus atque harum mollitia soluta aliquid quo pariatur
            repellat labore id accusantium?
          </div>
        </div>
        <div className="text-sm text-white/70">
          <div className="font-semibold text-xl mb-3 text-white">
            Get In Touch
          </div>
          <div>Email:wastesystem@gmail.com</div>
          <div>Phone:+977-9876543210</div>
          <div className="flex gap-4 mt-3">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
