import React from "react";
import {Container} from "react-bootstrap";
import about1 from "../../image/banner1.jpg";
import about2 from "../../image/banner2.jpg";
import about3 from "../../image/banner3 (1).jpg";
import about4 from "../../image/banner4.jpg";

const About = () => {
  return (
    <>
      <div>
        <Container>
          <div className="d-lg-flex mt-5">
            <div>
              <h3 className="mt-5 component-headings pb-2">About Us</h3>
              <h1 className="fw-bold">Learn About Us</h1>
              <p className="pe-4 word-break text-start">
                Bangladesh's tourist attractions include historical monuments,
                resorts, beaches, picnic spots, forests and tribal people,
                wildlife of various species. Activities for tourists include
                angling, water skiing, river cruising, hiking, rowing, yachting,
                and sea bathing.
              </p>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <img src={about1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-4">
                  <img src={about2} alt="" className="img-fluid" />
                </div>
                <div className="col-4">
                  <img src={about3} alt="" className="img-fluid" />
                </div>
                <div className="col-4">
                  <img src={about4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
