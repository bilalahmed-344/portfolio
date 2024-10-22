import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <div
      id="footer"
      className="footer accent-background fixed bottom-0 left-0 w-full z-10 -mb-[120px]"
    >
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">DevClan</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="credits">
          Designed by <a href="https://devclann.netlify.app/">DevClan</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
