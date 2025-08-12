export default function Destination({ image, title, subtitle }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="destination-item position-relative overflow-hidden mb-2">
        <img className="img-fluid" src={image} alt="" />
        <a
          className="destination-overlay text-white text-decoration-none"
          href=""
        >
          <h5 className="text-white">{title}</h5>
          <span>{subtitle}</span>
        </a>
      </div>
    </div>
  );
}
