import React from "react";
import {Accordion, Container} from "react-bootstrap";
import faq from "../../image/faq.jpg";

const Faq = () => {
  return (
    <div>
      <Container>
        <h3 className="mt-5 component-headings pb-2">Asked Questions</h3>
        <h1 className="fw-bold">Frequently Asked Question</h1>
        <div className="row">
          <div className="col col-lg-6 col-12 gy-5">
            <img src={faq} alt="" className="img-fluid" />
          </div>
          <div className="col col-lg-6 col-12 gy-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Where Should I Book a Service
                </Accordion.Header>
                <Accordion.Body>
                  Bangladesh's tourist attractions include historical monuments,
                  resorts, beaches, picnic spots, forests and tribal people,
                  wildlife of various species. Activities for tourists include
                  angling, water skiing, river cruising, hiking, rowing,
                  yachting, and sea bathing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How much money should I bring?
                </Accordion.Header>
                <Accordion.Body>
                  The local currency is Bangladeshi Taka (BDT). ATMs accepting
                  international cards are widely available, and most major
                  currencies can be exchanged nearby.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>When Should Eat</Accordion.Header>
                <Accordion.Body>
                  Families appreciate the convenience of 6 interconnecting
                  rooms. Guests may also request handicap-accessible, smoking
                  and non-smoking rooms. All rooms include complimentary access
                  to the hotel's fitness facilities, swimming pool.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Can I book bus, train, or boat tickets online?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  No, despite the promotion for online ticketing, most websites
                  don’t work properly, or you need a Bangladeshi bank card or
                  local Bkash number to pay. You’ll have to visit the ticket
                  offices when you’re here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
