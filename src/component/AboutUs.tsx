const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            {/* <a
              href="https://www.youtube.com/watch?v=eMobkagZu64&ab"
              className="play-btn mb-4"
            ></a> */}
            <iframe
              style={{ marginTop: "3.8rem" }}
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eMobkagZu64"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>
              A Pokémon friendly and ecological organization to make the planet
              a better place.
            </h3>
            <p>
              Founded in 1987 by John Doe, PokeCare have grown into a global
              phenomenon with more than 70 clinics across the world and a large
              number of professors working in association with more than 120
              universities.
            </p>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-fingerprint"></i>{" "}
              </div>
              <h4 className="title">
                <a href="">World recognition</a>
              </h4>
              <p className="description">
                Being recognized as a Pokémon center by 12 global health
                organizations, PokeCare is a pioneer in global relationships
                with personalised medical treatment plans recognized in 124
                countries.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-house-heart"></i>
              </div>
              <h4 className="title">
                <a href="">Care plan</a>
              </h4>
              <p className="description">
                All our sucursals provide the same health plan for Pokémons.
                This is in order to continue the treatment of a Pokémon even if
                you are traveling for a competition.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-gear"></i>
              </div>
              <h4 className="title">
                <a href="">State of the art technology</a>
              </h4>
              <p className="description">
                Tanks to governments foundings, the PokeCare center is integrated with
                state of the art technology for Pokémons with each center
                specialized, but not limited to, the Pokémon types of their
                area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
