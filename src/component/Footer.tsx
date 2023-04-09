const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>PokeCare</h3>
              <p>
                601 Union St <br />
                Seattle, WA 98101
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 5
                <br />
                <strong>Email:</strong> pokecare@mail.com
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links"></div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Receive all the latest news about PokeCare!</p>
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>PokeCare</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a
            href="https://www.linkedin.com/in/alan-reche/"
            className="twitter"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alan-reche/"
            className="facebook"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alan-reche/"
            className="instagram"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alan-reche/"
            className="linkedin"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/reche-git"
            className="github"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
