export const Header = () => {
  return (
    <nav id="header" className="fixed-top navbar navbar-expand-lg">
      <div className="container container-fluid d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Medilab</a>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#departments">
                Departments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#doctors">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an</span> Appointment
        </a>
      </div>
    </nav>
  );
};

{
  /* <i className="bi bi-list navbar-toggler"></i> */
}
{
  /* <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an</span> Appointment
        </a> */
}