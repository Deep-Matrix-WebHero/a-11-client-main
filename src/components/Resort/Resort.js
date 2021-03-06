import React from "react";
import {Button} from "react-bootstrap";
import "./Resort.css";
const Resort = () => {
  return (
    <>
      <div className=" container my-5 py-5 bg-primary text-white">
        <h5 className="text-center ">Choose Your</h5>
        <h1>Resorts</h1>
        <p className="text-start">
          A hotel is frequently a central feature of a resort, such as the Grand
          Hotel at Mackinac Island, Michigan. Some resorts are also condominium
          complexes that are timeshares or owned fractionally or wholly owned
          condominium. A resort is not always a commercial establishment
          operated by a single company, but in the late 20th century, that sort
          of facility became more common.
        </p>
      </div>
      <div>
        <h1>Choose your seasonal resorts</h1>
      </div>

      <div className="container">
        <div className="row resort py-5">
          <div className="col-lg-4 col-sm-12">
            <img
              className="resort-image"
              src="https://i.ibb.co/59BcV59/winter-1.jpg"
              alt=""
            />
            <h4 className="text-center text-info m-3">Winter</h4>
            <Button className="mb-4" variant="outline-secondary">
              View details
            </Button>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img
              className="resort-image"
              src="https://i.ibb.co/tKPHDY6/summer-1.jpg"
              alt=""
            />
            <h4 className="text-center text-info m-3">Summer</h4>
            <Button className="mb-4" variant="outline-secondary">
              View details
            </Button>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img
              className="resort-image"
              src="https://i.ibb.co/DgNdMnm/rainy-1.jpg"
              alt=""
            />
            <h4 className="text-center text-info m-3">Rainy</h4>
            <Button className="mb-4" variant="outline-secondary">
              View details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resort;
