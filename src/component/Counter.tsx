const Counter = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-person-heart"></i> <span>70+</span>
              <p className="fs-6">Doctors</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="far fa-hospital"></i>
              <span>70+</span>
              <p className="fs-6">Departments</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="fas fa-flask"></i>
              <span>70+</span>
              <p className="fs-6">Research Labs</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="fas fa-award"></i>
              <span>70+</span>
              <p className="fs-6">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
