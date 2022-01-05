import React from "react";
import "./Testimonial.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

function Testimonial() {
  return (
    <>
      <div className="heading-testimonial">
          <h1>Testimonials</h1>
      </div>
      <div className="contents-big">
        <Carousel breakPoints={breakPoints}>
          <div className="details">
            <div className="para-sm">
              <p>
                "Banyan worked with our polymer experts and R&D teams to meet
                our technical specifications and conduct various engineering
                trails to ensure that recycled plastic granules meet our safety
                requirement. The circular awards could serve as a much needed
                encouragement not just for Banyan for the auto industry to adopt
                a closed-loop circular economy approach for raw material use."
              </p>
            </div>
            <div className="sub">
              <h3>Tata Motors</h3>
            </div>
          </div>
          <div className="details">
            <div className="para-sm">
              <p>
                "Banyan's platform (Data Intelligence) has the potential to
                democratize waste management across the country, empowering
                cities with critical data and insights to improve collection
                efficiencies, maximize landfill diversion, and save costs."
              </p>
            </div>
            <div className="sub">
              <h3>Intel India</h3>
            </div>
          </div>
          <div className="details">
            <div className="para-sm">
              <p>
                "Banyan has exhibited polymer expertise and engineering
                expertise in conducting multiple trials to improve the quality
                of recycled plastics and match our technical specifications. We
                are also impressed with Banyan's sourcing technology which
                allows them to source large quantities of post consumer
                materials from the informal sector."
              </p>
            </div>
            <div className="sub">
              <h3>L'Oreal India</h3>
            </div>
          </div>
          <div className="details">
            <div className="para-sm">
              <p>
                "Banyan has exhibited polymer expertise and engineering
                expertise in conducting multiple trials to improve the quality
                of recycled plastics and match our technical specifications. We
                are also impressed with Banyan's sourcing technology which
                allows them to source large quantities of post consumer
                materials from the informal sector."
              </p>
            </div>
            <div className="sub">
                <h3>KKR India</h3>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Testimonial;
