import Aboutimg1 from "../assets/img/about-1.jpg";
import Aboutimg2 from "../assets/img/about-2.jpg";

export default function About({ image, title, subtitle, description }) {
  return (
    <div className="row">
      <div className="col-lg-6 height5">
        <div className="position-relative h-100">
          <img
            className="objectfit position-absolute w-100 h-100"
            src={image}
          />
        </div>
      </div>
      <div className="col-lg-6 pt-5 pb-lg-5">
        <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
          <h6 className="text-primary text-uppercase letterspace">{title}</h6>
          <h1 className="mb-3">{subtitle}</h1>
          <p>{description}</p>
          <div className="row mb-4">
            <div className="col-6">
              <img className="img-fluid" src={Aboutimg1} alt="" />
            </div>
            <div className="col-6">
              <img className="img-fluid" src={Aboutimg2} alt="" />
            </div>
          </div>
          <a href="" className="btn btn-primary mt-1">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
