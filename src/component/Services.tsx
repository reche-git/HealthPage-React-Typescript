const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4>
                <a href="">First Aid</a>
              </h4>
              <p>
                We provide all the necessary treatments for your Pokémons in our
                urgency aisle.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-capsule"></i>
              </div>
              <h4>
                <a href="">Medicine Prescription</a>
              </h4>
              <p>
                Our drug stores are equipped for all common and uncommon Pokémon
                diseases.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-postcard-heart"></i>
              </div>
              <h4>
                <a href="">Specialized doctors</a>
              </h4>
              <p>
                Every urgent care and surgery procedure is performed by PhD
                professionals.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-window-stack"></i>
              </div>
              <h4>
                <a href="">Laboratory Tests</a>
              </h4>
              <p>
                In center laboratories to check your Pokémon health and needs.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <h4>
                <a href="">Stats Tests</a>
              </h4>
              <p>
                For health reasons or for tournaments inscription documentation.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-box2-heart"></i>
              </div>
              <h4>
                <a href="">Care Package</a>
              </h4>
              <p>
                For Pokémons who are in condition to keep their medical
                treatment while traveling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
