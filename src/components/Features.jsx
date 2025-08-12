export default function Features({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="d-flex mb-4 mb-lg-0">
        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 wight-height">
          <i className="fa fa-2x fa-money-check-alt text-white"></i>
          {/* {icon} */}
        </div>
        <div className="d-flex flex-column">
          <h5 className="">{title}</h5>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
