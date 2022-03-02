import React from "react";
import {Container, Accordion, Carousel} from "react-bootstrap";
import day1 from "../../image/saintmartin.jpg";
import day2 from "../../image/resorts/winter (1).jpg";
import day3 from "../../image/saintmartin.jpg";
import day4 from "../../image/resorts/winter (1).jpg";
import "./Tourplan.css";

const Tourplan = () => {
  return (
    <div>
      <Container>
        <h1 className="fw-bold ">
          <b>Tour Package Plan</b>
        </h1>
        <div className="row plan-tittle">
          <div className="col col-lg-6 col-12 gy-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Day-1 Plan</Accordion.Header>
                <Accordion.Body>
                  <div className=" d-lg-flex row ac-img">
                    <div className="col col-lg-6 col-12 gy-5">
                      <img
                        className="d-block w-100"
                        src={day1}
                        alt="First slide"
                      />
                    </div>
                    <div className="col col-lg-6 col-12 gy-5">
                      <p>
                        {" "}
                        Families appreciate the convenience of 6 interconnecting
                        rooms.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Day-2 Plan</Accordion.Header>
                <Accordion.Body>
                  <div className=" d-lg-flex row ac-img">
                    <div className="col col-lg-6 col-12 gy-5">
                      <img
                        className="d-block w-100"
                        src={day2}
                        alt="First slide"
                      />
                    </div>
                    <div className="col col-lg-6 col-12 gy-5">
                      <p>
                        {" "}
                        Families appreciate the convenience of 6 interconnecting
                        rooms.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Day-3 Plan</Accordion.Header>

                <Accordion.Body>
                  <div className=" d-lg-flex row ac-img">
                    <div className="col col-lg-6 col-12 gy-5">
                      <img
                        className="d-block w-100"
                        src={day3}
                        alt="First slide"
                      />
                    </div>
                    <div className="col col-lg-6 col-12 gy-5">
                      <p>
                        {" "}
                        Families appreciate the convenience of 6 interconnecting
                        rooms.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Day-4 Plan </Accordion.Header>
                <Accordion.Body>
                  <div className=" d-lg-flex row ac-img">
                    <div className="col col-lg-6 col-12 gy-5">
                      <img
                        className="d-block w-100"
                        src={day4}
                        alt="First slide"
                      />
                    </div>
                    <div className="col col-lg-6 col-12 gy-5">
                      <p>
                        {" "}
                        Families appreciate the convenience of 6 interconnecting
                        rooms.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col col-lg-6 col-12 gy-5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={day1}
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3 className="text-white">Enjoy Your</h3>
                  <h1 className="fw-bold text-white">Winter Vacation</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, amet?.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 " src={day2} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3 className="text-white">Enjoy Your</h3>
                  <h1 className="fw-bold text-white">Winter Vacation</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, amet?.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 " src={day3} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3 className="text-white">Enjoy Your</h3>
                  <h1 className="fw-bold text-white">Winter Vacation</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, amet?.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 " src={day4} alt="First slide" />
                {/* <Carousel.Caption>
                  <h3 className="text-white">Enjoy Your</h3>
                  <h1 className="fw-bold text-white">Winter Vacation</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, amet?.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>

            {/* <img src={packageplan} alt="" className="img-fluid" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tourplan;
