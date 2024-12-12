import { github, instagram, twitter } from "../assets";

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-10">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon bg-black-300 rounded-full p-2">
            <a href="https://github.com/mzaidturabi" target="_blank" rel="noopener noreferrer">
              <img src={[github]} alt="github" className="h-8" />
            </a>
          </div>
          <div className="social-icon bg-black-300 rounded-full p-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={[twitter]} alt="twitter" className="h-8" />
            </a>
          </div>
          <div className="social-icon bg-black-300 rounded-full p-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={[instagram]} alt="instagram" className="h-8" />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Muhammad Zaid Turabi. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  