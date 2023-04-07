const Counter = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-person-heart"></i> <span>120+</span>
              <p className="fs-6">Doctors</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-clipboard-heart"></i>
              <span>750+</span>
              <p className="fs-6">Nurses</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-bookmark-check"></i>
              <span>400+</span>
              <p className="fs-6">Teachers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span>200+</span>
              <p className="fs-6">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
