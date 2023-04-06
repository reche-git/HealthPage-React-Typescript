export const Why_Us = () => {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose PokeCare?</h3>
                <p>
                  We are a non profit organization whose purpose is to heal or
                  furry friends in olden to maintain the ecosystem in balance
                  and fight the effects of poke-change. With our team of nurses,
                  teachers and doctors, we actively search for a better future
                  where humans and pokémons can coexist and flourish together!
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bi bi-bandaid"></i>
                      <h4>The best nurses</h4>
                      <p>
                        We are equipped to handle from a little Joltik to a
                        giant Wailord! Leave it to us!
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bi bi-bookmark-heart"></i>{" "}
                      <h4>Bast numbers of Doctors</h4>
                      <p>
                        Our doctors have a vast experience in heavy duty surgery
                        and creating adaptable recuperation plans.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bi bi-journal-bookmark"></i>
                      <h4>A fleet of teachers!</h4>
                      <p>
                        More than 400 teachers adhere to our school program to
                        participate in the formation of new professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
