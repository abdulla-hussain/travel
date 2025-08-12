import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Blog from "./components/Blog.jsx";
import Booking from "./components/Booking.jsx";
import Destination from "./components/Destination.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Package from "./components/Package.jsx";
import Service from "./components/Servive.jsx";
import Signup from "./components/Signup.jsx";
import Team from "./components/Team.jsx";
import Testimonial from "./components/Testominal.jsx";
import {
  BANNER,
  ABOUTUS,
  FEATURES,
  DESTINATION,
  SERVICE,
  PACKAGE,
  SIGNUP,
  TEAM,
  TESTIMONIAL,
  BLOG
} from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Banner Section */}
        <div id="" className="carouselslide">
          <div className="carouselinner">
            <Banner
              title={BANNER[0].title}
              subtitle={BANNER[0].subtitle}
              image={BANNER[0].image}
            />
          </div>
        </div>
        {/* Banner Section End*/}

        {/* Banner Section */}
        <Booking />
        {/* Banner Section End*/}

        {/* About Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5">
            <About
              image={ABOUTUS[0].image}
              title={ABOUTUS[0].title}
              subtitle={ABOUTUS[0].subtitle}
              description={ABOUTUS[0].description}
            />
          </div>
        </div>
        {/* About Section End*/}

        {/* Features Section */}
        <div className="container-fluid pb-5">
          <div className="container pb-5">
            <div className="row">
              <Features
                icon={FEATURES[0].icon}
                title={FEATURES[0].title}
                description={FEATURES[0].description}
              />
              <Features {...FEATURES[1]} />
              <Features {...FEATURES[2]} />
            </div>
          </div>
        </div>
        {/* Features Section End*/}

        {/* Destination Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Destination
              </h6>
              <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
              <Destination {...DESTINATION[0]} />
              <Destination {...DESTINATION[1]} />
              <Destination {...DESTINATION[2]} />
              <Destination {...DESTINATION[3]} />
              <Destination {...DESTINATION[4]} />
              <Destination {...DESTINATION[5]} />
            </div>
          </div>
        </div>
        {/* Destination Section End*/}

        {/* Service Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Services
              </h6>
              <h1>Tours & Travel Services</h1>
            </div>
            <div className="row">
              <Service {...SERVICE[0]} />
              <Service {...SERVICE[1]} />
              <Service {...SERVICE[2]} />
            </div>
          </div>
        </div>
        {/* Service Section End*/}

        {/* Package Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Packages
              </h6>
              <h1>Pefect Tour Packages</h1>
            </div>
            <div className="row">
              <Package {...PACKAGE[0]} />
              <Package {...PACKAGE[1]} />
              <Package {...PACKAGE[2]} />
              <Package {...PACKAGE[3]} />
              <Package {...PACKAGE[4]} />
              <Package {...PACKAGE[5]} />
            </div>
          </div>
        </div>
        {/* Package Section End*/}

        {/* Signup Section */}
        <div className="container-fluid bg-registration py-5 marg9">
          <div className="container py-5">
            <Signup {...SIGNUP[0]} />
          </div>
        </div>
        {/* Signup Section End*/}

        {/* Team Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Guides
              </h6>
              <h1>Our Travel Guides</h1>
            </div>
            <div className="row">
              <Team {...TEAM[0]} />
              <Team {...TEAM[1]} />
              <Team {...TEAM[2]} />
              <Team {...TEAM[3]} />
            </div>
          </div>
        </div>
        {/* Team Section End*/}

        {/* Testimonial Section */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Testimonial
              </h6>
              <h1>What Say Our Clients</h1>
            </div>
            <div className="testimonial-carousel">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <Testimonial {...TESTIMONIAL[0]} />
                  <Testimonial {...TESTIMONIAL[1]} />
                  <Testimonial {...TESTIMONIAL[2]} />
                  <Testimonial {...TESTIMONIAL[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End*/}

        {/* Blog Section */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase letterspace">
                Our Blog
              </h6>
              <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
              <Blog {...BLOG[0]} />
              <Blog {...BLOG[1]} />
              <Blog {...BLOG[2]} />
            </div>
          </div>
        </div>

        {/* Blog Section End*/}
      </main>

      {/* Footer Section */}
      <Footer />
      {/* Footer Section End*/}
    </div>
  );
}

export default App;
