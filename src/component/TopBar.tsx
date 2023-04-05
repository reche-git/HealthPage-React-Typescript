export const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center" style={{height:"40px"}}>
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:alanaxelreche@hotmail.com">
            alanaxelreche@hotmail.com
          </a>
          <i className="bi bi-phone"></i> +1 5589 55488 55
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a
            href="https://twitter.com/home"
            className="twitter"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
