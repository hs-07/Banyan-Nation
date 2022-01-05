import React from "react";
import './Content.css'

function Content() {
  return (
    <>
      <div className="container-big" id="our-work">
        <div className="header-part">
          <div className="heading">
            <h1>WHAT WE DO</h1>
          </div>
          <div className="para-1">
            <p>
              Banyan is one of India’s first vertically integrated plastic
              recycling companies that helps global brands use more recycled
              plastic instead of virgin plastic. Our proprietary plastic
              cleaning technology converts collected post consumer and post
              industrial plastic waste into high quality recycled granules –
              Better Plastic™ – comparable in quality and performance to virgin
              plastic. Our award winning data intelligence platform integrates
              thousands of informal recyclers into our supply chain and also
              helps cities manage their waste more effectively.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i className="fas fa-flask"></i>
            </div>
            <div className="sub-head">
              <h2>PLASTICS TECHNOLOGY</h2>
            </div>
            <div className="para-2">
              <p>
                Banyan's proprietary plastic cleaning technology removes inks,
                coatings, and other contaminants using environment friendly
                detergents and solvents to supply near virgin quality recycled
                granules to brands, a first in India highly informal, low tech
                industry. Banyan pioneered closed loop recycling initiatives
                with India's leading automotive company (making new bumpers from
                discarded ones) and a global cosmetics company (making new
                bottles from discarded ones), establishing circular economy
                leadership in the automotive and beauty sector respectively,
                that can be extended to other industries.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="sub-head">
              <h2>DATA INTELLIGENCE</h2>
            </div>
            <p className="para-2">
                Banyan is one of the first companies in the country to use
                mobile, cloud and IoT to integrate thousands of informal sector
                last mile collectors into its supply chain to recover post
                consumer as well as post industrial plastic waste. The platform
                has now been extended to help cash-strapped municipalities
                understand waste flows through their cities and use a
                data-centric approach to make waste management more efficient,
                effective, and economical.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
