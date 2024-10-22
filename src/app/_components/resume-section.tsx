import React from "react";

const ResumeSection = () => {
  return (
    <div id="resume" className="resume section container-fluid container-xl">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Skills</h4>
              <div>
                • Vue.js <br /> • Ruby on Rails <br />• ReactJS, StimulusJS
                <br /> • Node • Laravel • JavaScript • ETL(SingleStore,
                SnowFlake, Redshift)
                <br /> • Dockerizing <br />• Deployment(Heroku, Aws EC2)
                <br /> • Databases (psql, mysql) <br />• Bootstrap, TailwindCSS
              </div>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>COMSATS Institute of Information Technology</h4>
              <h5>2018</h5>
              <p>
                <em>Bachelors in Science , Software Engineering</em>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Software Engineer</h4>
              <h5>Jan 2024 - Present</h5>
              <p>
                <em>Rechain, Pays de la Loire, France</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Full stack developer</h4>
              <h5>May 2023 - Dec 2023</h5>
              <p>
                <em>POPFAME, Newark, USA</em>
              </p>
            </div>
            <div className="resume-item">
              <h4> Senior software Engineer </h4>
              <h5>Jul 2021 - Jul 2023</h5>
              <p>
                <em>Strategic Systems International, Lahore, Pakistan</em>
              </p>
            </div>
            <div className="resume-item">
              <h4> Ruby on Rails Developer</h4>
              <h5>May 2018 - Jul 2021</h5>
              <p>
                <em>TechCreatix Pvt Ltd, Lahore, Pakistan</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
