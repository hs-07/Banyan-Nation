import React from "react";
import "./Action.css";

function Action() {
  return (
    <>
      <div className="action-container" id="action">
        <div className="hAction">
          <h1>ASK FOR BETTER PLASTIC</h1>
        </div>
        <div className="action-cards">
          <div className="action-card">
            <i className="fas fa-industry"></i>
            <h3 className="action-sud-head">BRANDS</h3>
            <p className="action-para">
              Design and manufacture sustainable products and packaging with
              Better Plastic. Make in India sustainably. We offer standard as
              well as custom grades of recycled compounds for your specific
              needs. We specialize in recycled resins for consumer packaging,
              auto components, consumer durables such as furniture, and consumer
              electronics.
            </p>
            <button className="action-btn">BUY BETTER PLASTIC</button>
          </div>
          <div className="action-card">
            <i className="fas fa-recycle"></i>
            <h3 className="action-sud-head">WASTE GENERATORS</h3>
            <p className="action-para">
              Responsibly recycle your discarded plastic with us. It does
              matter. We work with bulk waste generators and aggregators and
              accept post consumer and post industrial scrap plastic. For
              example, post consumer shampoo bottles, auto parts, woven sacks,
              paint pails, etc. For detailed specifications on resins, quantity
              and quality write to us or call us directly.
            </p>
            <button className="action-btn">SELL YOUR PLASTIC SCRAP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Action;
