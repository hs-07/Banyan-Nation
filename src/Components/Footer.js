import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-head">
          <h1>WORLD ECONOMIC FORUM, DAVOS 2018</h1>
        </div>
        <div className="footer-link">
          <a href="https://m.youtube.com/watch?v=DtwI4X5fEgU" target="_blank">
            <i class="fas fa-thumbs-up"></i>
          </a>
        </div>
        <div className="footer-sub-head">
          <h3>WINNER OF THE CIRCULARS PEOPLE'S CHOICE 2018 AWARD</h3>
        </div>
        <div className="footer-para">
          The Circulars, an initiative of the World Economic Forum and the Forum
          of Young Global Leaders, is the <b> world’s premier circular economy award </b>
          program. The awards are open to individuals and organizations from
          commerce and civil society in seven distinct categories and are
          designed to recognize and celebrate, on a prestigious global stage,
          all facets of the circular economy movement. The fourth annual
          iteration of The Circulars was held at the World Economic Forum Annual
          Meeting in Davos on 22nd of January 2018 where Banyan won the People's
          Choice award. Thank you for voting for us.
        </div>
      </div>
    </>
  );
}

export default Footer;
