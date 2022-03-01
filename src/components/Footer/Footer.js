import React from "react";
import {Button} from "react-bootstrap";
// import logo from "../../image/react-logo-svgrepo-com.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white footer-section py-5">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          {/* <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top "
            alt=""
          /> */}
          <p> ataurrahmannur@gmail.com</p>
          <p> +8801763140857</p>
          <p> Dhaka & Mohakhali, Bangladesh</p>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h5>Our Recent Posts</h5>
          <p>Visit Thailand, Bali And China</p>
          <p>March 1, 2022</p>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h5>Subscribe to our Newsletter</h5>
          <input className="w-75" type="text" placeholder="Name" />
          <input className="w-75" type="email" placeholder="Email" />
          <br />
          <Button variant="outline-info">Subcribe</Button>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h5>Our Instagram</h5>
          <p>
            Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
            Phasellus null
          </p>
        </div>
      </div>
      <div>
        <small className="text-center">Powered by @ Ataur-Rahman 2021</small>
      </div>
    </div>
  );
};

export default Footer;
