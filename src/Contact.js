import React from "react";
import sm from "./img/sm.gif";
import emailjs from "emailjs-com";

function Contact() {
  const { REACT_APP_SERVICE_ID, REACT_APP_USER_ID, REACT_APP_TEMPLATE_ID } =
    process.env;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.
    sendForm("service_bowusee","template_nv3hfra",e.target,"user_UH5ALqQzf7x1VCQiHv30A").
    then(res=>{
      console.log(res);
    }).
    catch(err=>console.log(err))

   
  }

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <form className="formm" onSubmit={sendEmail}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="namee">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="namee">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="namee">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="namee">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="btnn btn-2 btn-2h" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <div className="info">
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    Bhattifraz94@gmail.com <br />
                    mfraz.bscs20seecs@seecs.edu.pk
                  </p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 3014205979</p>
                </div>
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Islamabad, Pakistan</p>
                </div>
                <br />
                <div className="sss2 ">
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
                  <a
                    href="https://twitter.com/Muhamma07220854"
                    className="twitter"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tem"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <img src={sm} alt="djjd"></img>
        </div>
      </section>
    </>
  );
}

export default Contact;
