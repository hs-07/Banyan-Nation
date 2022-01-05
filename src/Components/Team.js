import React from "react";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="team-container" id="team">
        <div className="team-head">
          <h1>OUR TEAM</h1>
        </div>
        <div className="team-cards">
        <div className="team-card">
          <div className="team-img">
            <img src="https://banyannation.com/wp-content/uploads/2016/03/Mani-Web.jpg" alt="" className="team-img-sm" />
          </div>
          <div className="team-details">
            <h3>
              MANI VAJIPEY <br/>CEO
            </h3>
            <p className="team-para">
              Seasoned business and technology professional. Prior to Banyan,
              Mani was with Qualcomm Inc. involved in the design, development,
              testing and commercialization activities of mobile technologies.
              Mani holds dual MBAs from UC Berkeley (Haas) and Columbia Business
              Schools, an MS Degree in Electrical Engineering from University of
              Delaware and a BTech Electrical Engineering from NIT, Warangal.
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img src="https://banyannation.com/wp-content/uploads/2016/03/Raj-Web.jpg" alt="" className="team-img-sm" />
          </div>
          <div className="team-details">
            <h3>
              RAJ MADANGOPAL <br/>COO
            </h3>
            <p className="team-para">
              Technologist with global experience. Prior to Banyan, Raj worked
              at Voltari Corp. building teams, architecting technical solutions,
              designing, developing, and driving customer experience for
              $100Million+ products with 10Million+ customers. He holds an MS
              Degree in Mechanical Engineering from the University of Delaware.
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img src="https://banyannation.com/wp-content/uploads/2016/03/Venkat-Web.jpg" alt="" className="team-img-sm" />
          </div>
          <div className="team-details">
            <h3>
              VENKAT VAKA <br/>DIRECTOR, SUPPLY CHAIN
            </h3>
            <p className="team-para">
              Supply chain and informal sector inclusion expert. Venkat was
              previously with SKS Microfinance working directly with Vikram
              Akula leading strategy and new initiatives of non-financial
              products aimed at bottom of the pyramid. He holds a PGPABM Degree
              from IIM Ahmedabad, BSc, Agri from Achrarya N G Ranga Agricultural
              University, Hyderabad
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img src="https://banyannation.com/wp-content/uploads/2016/03/Rashi-Cropped-2.jpg" alt="" className="team-img-sm" />
          </div>
          <div className="team-details">
            <h3>
              RASHI AGRAWAL <br/> DIRECTOR, PARTNERSHIPS
            </h3>
            <p className="team-para">
              Impact investor and strategy consultant. Rashi was previously with
              Impact Investment Exchange, Intellecap (Impact Investing);
              Campbell Alliance (Healthcare Strategy Consulting); NERA
              (Financial Services Consulting) before joining the team of Banyan.
              She is an MBA from Columbia Business School and holds a BS in
              Electrical Engineering and BA Economics (dual major) from the
              University of California, Irvine.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Team;
