import React from "react";
import logo from "../logo.svg";
import "./Navbar.css";

const navClass = 'd-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-black text-white border-bottom box-shadow'

const Navbar = () => {
	return (
		<div className={navClass}>
      <img src={logo} className="img-logo-brand" />
      <h5 className="my-0 mr-md-auto font-weight-normal">Seputar Putar</h5>
			<nav className="my-2 my-md-0 mr-md-3">
				<a className="p-2 text-white" href="#"> Video </a>
				<a className="p-2 text-white" href="#"> Honor </a>
				<a className="p-2 text-white" href="#"> News </a>
				<a className="p-2 text-white" href="#"> Sepak Bola </a>
				<a className="p-2 text-white" href="#"> Ekonomi </a>
				<a className="p-2 text-white" href="#"> Politik </a>
				<a className="p-2 text-white" href="#"> Hiburan </a>
				<a className="p-2 text-white" href="#"> Hiburan </a>
        <a className="p-2 text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Teknologi</a>
            <a className="dropdown-item" href="#">Sport</a>
            <a className="dropdown-item" href="#">Internasional</a>
            <a className="dropdown-item" href="#">Viral</a>
            <a className="dropdown-item" href="#">Otomotif</a>
            <a className="dropdown-item" href="#">Travel</a>
          </div>
									
			</nav>
		</div>
	);
};

export default Navbar;
