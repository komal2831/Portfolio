import "./App.css";
import logo from "./img/komal_photo.jpeg";
import resume from "./komal_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ProjectData from "./project.json";
import ExperienceData from "./experience.json";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Modal from "react-modal";

const App = () => {
  const lang = [
    { percent: "80", language: "React JS" },
    { percent: "85", language: "Vue JS" },
    { percent: "70", language: "Java" },
    { percent: "90", language: "JavaScript/Jquery" },
    { percent: "80", language: "HTML/CSS" },
    { percent: "75", language: "TypeScript" },
    { percent: "70", language: "FireBase" },
  ];

  const percentage = [
    { percent: "80", featurs: "Communication" },
    { percent: "85", featurs: "Team Work" },
    { percent: "90", featurs: "Management" },
    { percent: "95", featurs: "Creativity" },
  ];

  const [dialogVisible, setDialogVisible] = useState(null);

  const openDialog = (id) => {
    setDialogVisible(id);
  };

  const closeDialog = () => {
    setDialogVisible(null);
  };

  return (
    <div className="App">
      <section id="home" className="home parallax one-page-section">
        <div className="page-table">
          <div className="table-cell text-center">
            <nav className="navbar navimg navbar-expand-md">
              <div className="container-fluid">
                <a className="navbar-brand">{/* <img src={navlogo} /> */}</a>

                <div className="d-flex justify-content-between">
                  <a
                    className="btn-fill btn-primary"
                    href="mailto:komalsingh2881995@gmail.com"
                    style={{ marginRight: "10px" }}
                  >
                    Mail Me{" "}
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </a>

                  <a href={resume} className="btn-fill btn-primary">
                    Download CV <i className="fa fa-download"></i>
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto font-weight-bold">
                    <li className="nav-item active">
                      <a
                        href="#home"
                        className="nav-link active"
                        data-speed="800"
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link" data-speed="1000">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#education"
                        className="nav-link"
                        data-speed="1200"
                      >
                        EDUCATION
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#skills" className="nav-link" data-speed="1400">
                        SKILLS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#experience"
                        className="nav-link"
                        data-speed="1600"
                      >
                        EXPERIENCE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#project" className="nav-link" data-speed="1700">
                        PROJECTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="nav-link" data-speed="1800">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div style={{ marginTop: "170px" }}>
              <div className="avatar-hero">
                <img src={logo} alt="avatar-hero" />
              </div>
              <h1>Hi, I'm Komal Singh</h1>
              <h2 className="typer-title">I'm full stack Developer</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section one-page-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-content">
                <h2>Hi! I'm Komal Singh</h2>
                <p>
                  I am a Full Stack Developer based in Uttar Pradesh, India,
                  with hands-on experience in self-initiated projects utilizing
                  JavaScript. Proficient in developing secure and dynamic web
                  applications, I am skilled in utilizing React.js and Vue.js.
                  Additionally, I excel in implementing efficient and scalable
                  solutions, ensuring optimal performance and a seamless user
                  experience.
                </p>

                <div className="about-tag">
                  <ul>
                    <li>
                      <span>React Js</span>
                    </li>
                    <li>
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <span>Java</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                    <li>
                      <span>Vue js</span>
                    </li>
                    <li>
                      <span>Boostarp 5</span>
                    </li>
                    <li>
                      <span>HTML</span>
                    </li>
                    <li>
                      <span>CSS</span>
                    </li>
                    <li>
                      <span>Data Structure</span>
                    </li>
                    <li>
                      <span>Jenkins</span>
                    </li>
                    <li>
                      <span>Git</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div className="about-content">
                <ul id="about-data">
                  <li>
                    <span>
                      <FontAwesomeIcon icon="fa-duotone fa-envelope" /> Email :{" "}
                    </span>
                    <a href="mailto:komalsingh2881995@gmail.com">
                      komalsingh2881995@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-phone"></i> Phone :{" "}
                    </span>
                    <a href="tel:+91 9718407710">+91 9718407710</a>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon="fa-sharp fa-solid fa-location-dot" />{" "}
                      Location :{" "}
                    </span>
                    Village- Belwari, Chunar, Mirzapur, Uttar Pradesh (231305)
                  </li>
                </ul>

                <ul className="social-list">
                  <li>
                    <a
                      className="text-primary"
                      href="https://www.facebook.com/profile.php?id=100007750026200&mibextid=LQQJ4d"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-info"
                      href="https://twitter.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-twitter" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-danger"
                      href="https://www.instagram.com/___komal_singh/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary"
                      href="https://www.linkedin.com/in/komal-singh-100298149/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-linkedin" />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-danger"
                      href="https://github.com/komal2831"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <center>
            <a href={resume} className="btn-fill btn-primary">
              Download CV <i className="fa fa-download"></i>
            </a>
          </center>
        </div>
      </section>

      <section id="education" className="section one-page-section second-bg">
        <div className="container">
          <div className="section-title">
            <h2>EDUCATION</h2>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="single-service">
                <div className="display-5 text-secondary">
                  <i className="fas fa-graduation-cap effect"></i>
                </div>
                <div className="service-content">
                  <h3>
                    STD 10<sup>th</sup>
                  </h3>
                  <p>2010 - 2012</p>
                  <div className="s-line"></div>
                  <p>
                    I completed my 10<sup>th</sup> - grade education from UP
                    Board in 2012 at Madhav Gyan Kendra Inter College,
                    Allahabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-4 service-bordered">
              <div className="single-service">
                <div className="text-warning display-5">
                  <i className="fas fa-university effect"></i>
                </div>
                <div className="service-content">
                  <h3>
                    STD 12<sup>th</sup>
                  </h3>
                  <p>2012-2014</p>
                  <div className="s-line"></div>
                  <p>
                    I completed my 12<sup>th</sup> - grade education from UP
                    Board in 2014 at Madhav Gyan Kendra Inter College,
                    Allahabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-4 service-bordered">
              <div className="single-service">
                <div className="display-5 text-primary">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="service-content">
                  <h3>B.Tech - CSE</h3>
                  <p>2015-2019</p>
                  <div className="s-line"></div>
                  <p>
                    I completed my Bachelor's Degree in Computer Science &
                    Engineering from IMS Engineering College, Ghaziabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section one-page-section">
        <div className="container">
          <div className="section-title">
            <h2>SKILLS</h2>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 skills-section">
              <div className="professional-skills">
                <h3>Professional Skills</h3>
                <ul className="professional-progress">
                  {percentage.map((item) => (
                    <li
                      className="px-4"
                      style={{ height: 165, width: 165, margin: 30 }}
                    >
                      <CircularProgressbarWithChildren value={item.percent}>
                        <img
                          style={{ width: 30, marginTop: -5 }}
                          src="https://i.imgur.com/b9NyUGm.png"
                          alt="doge"
                        />
                        <div style={{ fontSize: 13, marginTop: -5 }}>
                          <strong>{item.percent}%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                      <div className="professional-text">{item.featurs}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <h3>Technical Skills</h3>
              {lang.map((item) => (
                <div>
                  <p className="progress-bar-text">{item.language}</p>
                  <div className="progress-cont">
                    <span>{item.percent}%</span>
                  </div>
                  <div className="mainDiv">
                    <div
                      className="childDiv"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="section one-page-section second-bg">
        <div className="container">
          <div className="section-title">
            <h2>PROJECTS</h2>
          </div>
          <div className="row">
            {ProjectData.map((item) => (
              <div className="col-xs-12 col-sm-4">
                <div>
                  <div className="display-4 text-success">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="service-content">
                    <h3>{item.project}</h3>
                    <p>{item.technology}</p>
                    <div className="s-line"></div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container section one-page-section">
        {/* ... (Your existing JSX code) */}
        <div className="container row">
          {ExperienceData.map((experience) => (
            <div className="col-md-4 py-2" key={experience.id}>
              <div className="card p-1 bg-light">
                <img
                  style={{ height: 200 }}
                  className="card-img-top"
                  src={experience.image}
                />
                <div>
                  <h4 className="card-body">{experience.company}</h4>
                  <p className="card-text font-weight-bold">
                    Designation :
                    <span className="font-weight-normal">
                      {" "}
                      {experience.designation}
                    </span>
                  </p>
                  <p className="card-text font-weight-bold">
                    Duration :
                    <span className="font-weight-normal">
                      {" "}
                      {experience.duration}
                    </span>
                  </p>
                  <p className="card-text font-weight-bold">
                    Location :
                    <span className="font-weight-normal">
                      {" "}
                      {experience.location}
                    </span>
                  </p>
                  <a
                    className="btn btn-outline-secondary"
                    onClick={() => openDialog(experience.id)}
                  >
                    See Profile
                  </a>
                </div>
              </div>
              {dialogVisible === experience.id && (
                <Modal
                  isOpen={dialogVisible === experience.id}
                  onRequestClose={closeDialog}
                  style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                    },
                    content: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                      maxWidth: "600px",
                      overflow: "auto",
                      padding: "25px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <button
                    className="btn-primary rounded"
                    onClick={closeDialog}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                  >
                    X
                  </button>
                  {experience.details.map((item) => (
                    <div
                      className="service-content text-left"
                      key={item.project}
                    >
                      <h2>{item.project}</h2>
                      <h6>( {item.technology} )</h6>
                      {item.highlights.map((highlight, index) => (
                        <p key={index}>{highlight}</p>
                      ))}
                    </div>
                  ))}
                </Modal>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section one-page-section">
        <div className="container">
          <div className="section-title">
            <h2>CONTACT ME</h2>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="mb-30">
                <div className="display-6 py-3 text-info">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="c-text">
                  <h5>PHONE</h5>
                  <h6>
                    <a href="tel:+91 9455229550">+91 9718407710</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="mb-30">
                <div className="display-6 py-3 text-primary">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="c-text">
                  <h5>LOCATION</h5>
                  <h6>
                    Village- Belwari, Chunar, Mirzapur, Uttar Pradesh (231305),
                    India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="mb-30">
                <div className="display-6 py-3 text-danger">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="c-text">
                  <h5>EMAIL</h5>
                  <h6>
                    <a href="mailto:komalsingh2881995@gmail.com">
                      komalsingh2881995@gmail.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="map">
                <form action="https://formspree.io/f/mbjnlykn" method="post">
                  <div className="row py-2">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="First Name"
                        id="Fname"
                        className="input-field rounded"
                        required="required"
                        placeholder="First Name"
                      />
                      {/* <span className="Fname-error text-center mb-30"></span> */}
                    </div>
                    <div className="col-sm-6 ">
                      <input
                        type="text"
                        name="Last Name"
                        id="Lname"
                        className="input-field rounded"
                        required="required"
                        placeholder="Last Name"
                      />
                      {/* <span className="Lname-error text-center mb-30"></span> */}
                    </div>
                  </div>

                  <div className="row  py-2">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        name="Email"
                        id="email"
                        className="input-field rounded"
                        required="required"
                        placeholder="Email"
                      />
                      {/* <span className="email-error text-center mb-30"></span> */}
                    </div>
                  </div>

                  <div className="row  py-2">
                    <div className="col-sm-12">
                      <input
                        type="number"
                        name="Phone"
                        id="phone"
                        className="input-field rounded"
                        placeholder="Phone No."
                      />
                      {/* <span className="phone-error text-center mb-30"></span> */}
                    </div>
                  </div>

                  <div className="row  py-2">
                    <div className="col-sm-12">
                      <textarea
                        name="Message"
                        id="message"
                        className="input-field rounded"
                        required="required"
                        placeholder="Message"
                      ></textarea>
                      {/* <span className="message-error text-center mb-30"></span> */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <button type="submit" className="submit-btn btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="map">
                <div id="map" className="shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.690585487206!2d77.04312769628028!3d28.398411991233115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23086ad05983%3A0x9e6f90a688f17d8b!2sRoyal%20PG%20%7C%20PG%20in%20Gurgaon%20%7C%20Best%20Boys%20%26%20Girls%20PG%20Sector%2069%20Gurgaon%20%7C%20PG%20Near%20Genpact%20Badshahpur%20%7C%20Luxury%20Furnished%20PG!5e0!3m2!1sen!2sin!4v1705293170079!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <a href="index.html" className="footer-title">
              Komal Singh
            </a>
            <div className="footer-social">
              <ul className="footer-social-list">
                <li>
                  <a
                    className="text-primary"
                    href="https://www.facebook.com/profile.php?id=100007750026200&mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-facebook-f"
                      style={{ fontSize: "34px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-info"
                    href="https://twitter.com/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-twitter"
                      style={{ fontSize: "34px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-danger"
                    href="https://www.instagram.com/___komal_singh/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      style={{ fontSize: "34px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://www.linkedin.com/in/komal-singh-100298149/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      style={{ fontSize: "34px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-danger"
                    href="https://github.com/komal2831/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-github"
                      style={{ fontSize: "34px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <p className="copy-text">
              Copyright &copy; 2024. All Right Reserved, Designed By
              <strong>
                <a href="index.html"> Komal Singh</a>
              </strong>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
