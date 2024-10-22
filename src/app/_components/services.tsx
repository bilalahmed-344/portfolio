import React from "react";

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Web Development</h3>
              </a>
              <p>
                Frontend Development: Building responsive and dynamic web
                applications using modern JavaScript frameworks like React.js,
                Vue.js, and Next.js. Backend Development: Developing robust
                server-side applications and APIs with Node.js (Express, NestJs)
                and Ruby on Rails. Full Stack Development: Offering end-to-end
                solutions, from user interfaces to server-side logic, database
                integration, and deployment.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Mobile App Development</h3>
              </a>
              <p>
                React Native Development: Developing cross-platform mobile
                applications for both iOS and Android. Backend Integration:
                Connecting mobile apps to backend APIs, cloud services, and
                databases.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>API Development & Integration</h3>
              </a>
              <p>
                RESTful API Development: Designing and building APIs for
                scalable web and mobile applications. API Integration:
                Integrating third-party services like payment gateways, social
                login, and external data sources.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Cloud & DevOps Services</h3>
              </a>
              <p>
                AWS & Docker Deployments: Deploying scalable applications using
                AWS services (EC2, ECS, S3, RDS) and Docker. CI/CD Pipelines:
                Setting up automated build, test, and deployment pipelines with
                GitHub Actions, CircleCI, and Jenkins.
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Data Processing & ETL Services</h3>
              </a>
              <p>
                Data Extraction and Transformation: Developing ETL pipelines to
                collect, process, and transform data from multiple sources. Data
                Warehousing: Designing data warehouses and managing ETL
                processes to maintain data integrity.
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Search and Data Indexing</h3>
              </a>
              <p>
                Elasticsearch Integration: Implementing Elasticsearch for
                full-text search, filtering, and data analysis. Data Indexing &
                Query Optimization: Optimizing large datasets with efficient
                indexing and search solutions.
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
