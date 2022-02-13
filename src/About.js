import React from "react";
import pp from "./img/pp.png";

function About() {
  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p className="foo" data-aos="fade-in">
            I am an energetic and ambitious person who has developed a mature
            and responsible approach to any task that i undertake. I am a
            hardcore <strong>programming</strong> and{" "}
            <strong>technology</strong> enthusiast.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4"
            data-aos="fade-up-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src={pp} className="iii" alt="sdcs" />
          </div>
          <div
            className="col-lg-8 pt-4 pt-lg-0 content"
            data-aos="fade-up-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h3>Computer  &amp; Science</h3>
            <h4>NUST Pakistan</h4>
            <br />
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>27 August 2002</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>www.vaibhavvemula.netlify.app</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+92 3014205979</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location:</strong>
                    <span>Islamabad, Pakistan</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>19</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>BSCS</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>
                      Bhattifraz94@gmail.com <br />
                      mfraz.bscs20seecs@seecs.edu.pk
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sss ">
                <a
                  href="https://www.instagram.com/frazbhattiiii/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fraz-bhatti-6824a0211/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/frazbhattiiii"
                  className="linkedin"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://twitter.com/Muhamma07220854" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
