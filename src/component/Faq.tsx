const Faq = () => {
  return (
    //PUT TERNARY OPERATOR FOR ICON OPEN OR CLOSED
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="accordion-flush faq" id="accordionFlushExample">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <ul>
              <li className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <i className="bi bi-patch-question icon-help"></i>
                    How can I affiliate to PokeCare?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    You just need to go to one of our clinics and ask to get
                    affiliated. Remember to bring your ID.
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <i className="bi bi-patch-question icon-help"></i>
                    Is there a fee for using the PokeCare clinics?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    The urgent care is free for all Pokémon! However, emergency
                    care fees can vary depending of your country Public Pokémon
                    Health Plan. Residents from one country will face the same
                    fees around the world since their plans are tied to their
                    referred countries health plan.
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <i className="bi bi-patch-question icon-help"></i>
                    I'm a tourist/trainer that flew to another country/continent
                    and my Pokémon got hurt. Can I take him to a PokeCare
                    clinic?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Of course! Even if you are not affiliated with us, we' wi'll
                    take care of your Pokémon for you. Please notice that you
                    will be charged for the treatment afterwards.
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <i className="bi bi-patch-question icon-help"></i>
                    I'm an student and I'll like to do my residency with you.
                    Can this be done?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Check with your school, you can probably find us in your
                    affiliated medical center list! If not, we have private
                    residency plans with payment plans and scholarship plans!
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
