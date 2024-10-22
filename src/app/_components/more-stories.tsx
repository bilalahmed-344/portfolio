import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import aboutImage from "../../../public/assets/img/bilalBhaiAboutImg.jpg";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <main className="main">
      <section
        id="about"
        className="about section container-fluid container-xl"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="row justify-content-between gy-4">
                <div className="col-lg-5">
                  <Image src={aboutImage} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-7 about-info flex flex-col gap-3">
                  <p>
                    <strong>Name: </strong> <span>Bilal Ahmed</span>
                  </p>
                  <p>
                    <strong>Profile: </strong>{" "}
                    <span>Senior Software Engineer</span>
                  </p>
                  <p>
                    <strong>Email: </strong> <span>bilalrana344@gmail.com</span>
                  </p>
                  <p>
                    <strong>Phone: </strong> <span>+92.344.8603334</span>
                  </p>
                </div>
              </div>

              <div className="skills-content skills-animation">
                <h5>Skills</h5>

                <div className="progress">
                  <span className="skill">
                    <span>Ruby on Rails</span> <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>ReactJS, StimulusJS, VueJS</span>{" "}
                    <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>ETL(SingleStore, SnowFlake, Redshift) </span>{" "}
                    <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={90}
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>Databases (psql, mysql) </span>{" "}
                    <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-me">
                <h4>About me</h4>
                <div>
                  As a highly motivated and dedicated software engineer, I bring
                  a passion for problem-solving and a strong work ethic to every
                  project. With 7 years of experience in web development, I
                  specialize in leveraging technologies like ReactJS, NodeJS,
                  VueJS, and Ruby on Rails to build dynamic, user-centric
                  applications. My expertise spans RESTful API development,
                  frontend and server-side programming, and database management
                  with MySQL, PostgreSQL, and MongoDB. I am proficient in
                  frameworks such as NestJS, ExpressJS, and Ruby on Rails, which
                  enables me to architect and deliver robust software solutions
                  tailored to client and user needs. My solid understanding of
                  testing methodologies and tools ensures that the software I
                  develop is not only functional but also reliable and
                  high-quality. Committed to continuous learning and
                  professional growth, I strive to deliver innovative solutions
                  that exceed expectations and drive success
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
