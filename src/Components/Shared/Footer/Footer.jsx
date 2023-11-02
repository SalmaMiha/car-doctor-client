import logo from "../../../assets/logo.svg";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black flex text-[#F3F3F3] justify-between p-20">
      <div className="space-y-5">
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div className="flex gap-3 text-xl">
          <div className="bg-gray-800 rounded-full p-2">
            <AiOutlineGoogle></AiOutlineGoogle>
          </div>
          <div className="bg-gray-800 rounded-full p-2">
            <AiOutlineTwitter></AiOutlineTwitter>
          </div>
          <div className="bg-gray-800 rounded-full p-2">
            <AiOutlineInstagram></AiOutlineInstagram>
          </div>
          <div className="bg-gray-800 rounded-full p-2">
            <AiFillLinkedin></AiFillLinkedin>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-bold pb-5">About</h4>
        <p>Home</p>
        <p>Service</p>
        <p>Contact</p>
      </div>
      <div className="space-y-3">
        <h4 className="font-bold pb-5">Company</h4>
        <p>Why Car Doctor</p>
        <p>About</p>
      </div>
      <div className="space-y-3">
        <h4 className="font-bold pb-5">Support</h4>
        <p>Support Center</p>
        <p>Feedback</p>
        <p>Accesbility</p>
      </div>
    </div>
  );
};

export default Footer;
