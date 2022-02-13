import React from "react";
import { FaFileDownload } from "react-icons/fa";

function Resume() {
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row skills-content">
            <div
              className="col-lg-6"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="bbb">
                <a
                  href="https://nustedupk0-my.sharepoint.com/:b:/g/personal/mfraz_bscs20seecs_student_nust_edu_pk/ERUG_Nfx6PFEgYP77j-ICUIBU2zVWvABz1Fz_YpDyFwH9A?e=1v4Vyg"
                  className="btnn btn-2 btn-2h"
                >
                  {" "}
                  <FaFileDownload size="30" /> &nbsp;Download Resume
                </a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h2>Technical Skills </h2>
              <br />
              <div className="col-lg-12">
                <h5 className="ski">C++</h5>
                <h5 className="ski">C</h5>
                <h5 className="ski">Python</h5>
                <h5 className="ski">JavaScript</h5>
                <h5 className="ski">ReactJS</h5>
                <h5 className="ski">NodeJS</h5>
                <h5 className="ski">ExpressJS</h5>
                <h5 className="ski">MongoDB</h5>
                <h5 className="ski">MySQL</h5>
                <h5 className="ski">Git</h5>

                
              </div>
            </div>
          </div>

          <br />
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <h3 className="resume-title">EDUCATION</h3>
              <div className="resume-item">
                <h3>BS in Computer  &amp; Science</h3>
                <h5>2020 - Present</h5>
                <p style={{ fontSize: "20px" }}>
                  <i>NUST, Islamabad, Pakistan</i>
                </p>
                <ul>
                  <li>Received Web Dev Certificate</li>
                </ul>
              </div>

              <h3 className="resume-title">EXPERIENCE</h3>

              <div className="resume-item">
                <h3>Front End Developer</h3>
                <h4>Freelance</h4>
                <h5>Oct 2021 – Present</h5>
                <p>
                  <em>Islamabad, Pakistan</em>
                </p>
                <ul>
                  
                  <li>
                    Collaborated with team members using version control systems
                    such as Git to organize modifications and assign tasks.
                  </li>
                  <li>
                    Working on building a product for a startup called Clothes Charity.
                  </li>
                  <li>
                    Technologies used - ReactJS, MongoDB, TailwindCSS, NodeJS,
                    ExpresJS.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Back End Developer </h3>
                <h4>Freelance</h4>
                <h5>Jan 2022 – Present</h5>
                <p>
                  <em>Islamabad, Pakistan</em>
                </p>
                <ul>
              
                  <li>Developing and maintaining full stack web applications</li>
                  <li>
                    Collaborated with team members using version control systems
                    such as Git to organize modifications and assign tasks.
                  </li>
                  <li>
                    Working on redesign of the website using ReactJS,
                    TailwindCSS. Maintaining backend using
                    NodeJS and ExpressJS.
                  </li>
                </ul>
              </div>

            
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up-left"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
            
              <h3 className="resume-title"> POSITIONS OF RESPONSIBILITY</h3>

              <div className="resume-item">
                <h3>Project Manager</h3>
                <h4>Core Team Member</h4>
                <h5>Oct 2021 – Dec 2021</h5>
                <p>
                  <em>Islamabad, Pakistan</em>
                </p>
                <ul>
              
                  <li>
                    لباس خیرہ was a clothes Charity website
                  </li>
                  <li>
                    Developing it from scratch and then connecting it with backend and SQL(the database)
                  </li>
                  <li>
                    Learnt Many new things like to deal with APIs and collaborative work.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h3>Senior Developer</h3>
                <h4>Team lead for Developing Search Engine رعد(Thunder)</h4>
                <h5>Oct 2021 – Jan 2022</h5>
                <p>
                  <em>Islamabad, Pakistan</em>
                </p>
                <ul>
                  <li>
                    Raeed is a search enigine developed in python. 
                  </li>
                  <li>
                    It was built by implementing the research paper of google and it's scalability and algorithm was also developed in view of that search Engine
                  </li>
                </ul>
              </div>

           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
