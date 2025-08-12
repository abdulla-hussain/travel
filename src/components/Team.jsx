export default function Team({ image, title, designation }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
      <div className="team-item bg-white mb-4">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={image} alt="" />
          <div className="team-social">
            <a className="btn btn-outline-primary btn-square" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-primary btn-square" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-primary btn-square" href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-outline-primary btn-square" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <h5 className="text-truncate">{title}</h5>
          <p className="m-0">{designation}</p>
        </div>
      </div>
    </div>
  );
}
