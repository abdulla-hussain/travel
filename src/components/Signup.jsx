
export default function Signup({ title, percentage, subtitle, description }) {
  return (
    <div className="row align-items-center">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="mb-4">
          <h6 className="text-primary text-uppercase letterspace">{title}</h6>
          <h1 className="text-white">
            <span className="text-primary">{percentage} OFF</span> {subtitle}
          </h1>
        </div>
        <p className="text-white">{description}</p>
        <ul className="list-inline text-white m-0">
          <li className="py-2">
            <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
            dolor amet diam
          </li>
          <li className="py-2">
            <i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor
            amet ipsum
          </li>
          <li className="py-2">
            <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
            elitripsum vero.
          </li>
        </ul>
      </div>
      <div className="col-lg-5">
        <div className="card border-0">
          <div className="card-header bg-primary text-center p-4">
            <h1 className="text-white m-0">Sign Up Now</h1>
          </div>
          <div className="card-body rounded-bottom bg-white p-5">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Your name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Your email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <select className="custom-select px-3">
                  <option selected>Select a destination</option>
                  <option value="1">destination 1</option>
                  <option value="2">destination 1</option>
                  <option value="3">destination 1</option>
                </select>
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block py-3"
                  type="submit"
                >
                  Sign Up Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
