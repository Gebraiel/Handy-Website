import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white bg-[url('/pattern.png')]">
      <div className="container border-t-0 py-24 border border-r-0 border-l-0 border-b-1 border-[#1a4755] m-auto">
        <Link to="/" className="block w-52 m-auto">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="text-center py-5">
        <p>
          Copyright By <b>RASANS</b> - 2024
        </p>
      </div>
    </footer>
  );
}
