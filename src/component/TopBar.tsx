export const TopBar = () => {
  return (
    <div
      id="topbar"
      className="fixed-top d-flex align-items-center"
      style={{ height: "40px" }}
    >
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:alanaxelreche@hotmail.com">
            alanaxelreche@hotmail.com
          </a>
          <i className="bi bi-phone"></i> +11 5589 554
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
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
    </div>
  );
};
