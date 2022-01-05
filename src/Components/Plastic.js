import React from "react";
import "./Plastic.css";

function Plastic() {
  return (
    <>
      <div className="Plastic-Container" id="plastic">
        <div className="pHeading">
          <h1>WHY BETTER PLASTIC?</h1>
        </div>
        <div className="plastic-logo">
          <img src="https://banyannation.com/wp-content/uploads/2014/07/Logo-Better-Plastic-Section.png" alt="" className="plastic-img" />
        </div>
        <div className="plastic-cards">
          <div className="plastic-content">
            <i className="far fa-thumbs-up"></i>
            <h3 className="headings">BETTER QUALITY</h3>
            <p className="paragraph">
              Scientific rigor in segregation, washing and extrusion allows
              Banyan to identify resins with a high degree of accuracy, prevent
              cross-contamination, eliminate product and packaging contaminants
              and produce a consistently high quality product.
            </p>
          </div>
          <div className="plastic-content">
            <i className="fas fa-chart-line"></i>
            <h3 className="headings">BETTER PERFORMANCE</h3>
            <p className="paragraph">
              Addition of performance polymers allows Banyan to meet stringent
              thermal and mechanical properties, a must have in high performance
              applications such as automotive and consumer electronics.
            </p>
          </div>
          <div className="plastic-content">
            <i className="fas fa-user-plus"></i>
            <h3 className="headings">BETTER FOR SOCIETY</h3>
            <p className="paragraph">
              An equal opportunity employer, Banyan provides safe and sanitary
              working conditions, fair wages, retirement benefits, and health
              insurance for its workers, setting a high bar for social
              responsibility, unheard of in a largely informal industry.
            </p>
          </div>
          <div className="plastic-content">
            <i className="fas fa-tree"></i>
            <h3 className="heading">BETTER FOR EARTH</h3>
            <p className="paragraph">
              Stringent adherence to air and water quality indicators mandated
              by the pollution control board, ensures that Banyan's processes
              and products do not negatively impact the environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plastic;
