export default function Blog({ image, role, catagory, description }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4 pb-2">
      <div className="blog-item">
        <div className="position-relative">
          <img className="img-fluid w-100" src={image} alt="" />
          <div className="blog-date">
            <h6 className="font-weight-bold mb-n1">01</h6>
            <small className="text-white text-uppercase">Jan</small>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="d-flex mb-2">
            <a className="text-primary text-uppercase text-decoration-none"
              href="">
              {role}
            </a>
            <span className="text-primary px-2">|</span>
            <a
              className="text-primary text-uppercase text-decoration-none"
              href="">
              {catagory}
            </a>
          </div>
          <a className="h5 m-0 text-decoration-none" href="">
            {description}
          </a>
        </div>
      </div>
    </div>
  );
}
