export default function Banner({ image, title, subtitle }) {
  return (
    <div className="carouselitem">
      <img className="w-100" src={image} alt="Image" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3 w-75">
          <h4 className="text-white text-uppercase mb-md-3">{title}</h4>
          <h1 className="display-3 text-white mb-md-4">{subtitle}</h1>
          <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
