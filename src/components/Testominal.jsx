export default function Testimonial({ image, title, description, subtitle }) {
  return (
    <div className="owl-item">
      <div className="text-center pb-4">
        <img className="img-fluid mx-auto width-height" src={image} />
        <div className="testimonial-text bg-white p-4 mt-n5">
          <p className="mt-5">{description}</p>
          <h5 className="text-truncate">{title}</h5>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
