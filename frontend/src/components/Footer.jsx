import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-lg-6">
          <p>&copy; All rights reserved by Landmark Realty Group.</p>
        </div>

        <div className="col-lg-6">
          <div className="social-media">
            <a href="#">
              <i className="icon-style fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="icon-style  fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="icon-style  fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="icon-style  fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="icon-style fas fa-arrow-up"> </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
