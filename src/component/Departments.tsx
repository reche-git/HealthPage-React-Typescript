import pediatrics from "../assets/departments/pediatrics.png";
import cardiology from "../assets/departments/cardiology.png";
import neurology from "../assets/departments/neurology.png";
import eyeCare from "../assets/departments/eyeCare.png";

const Departments = () => {
  return (
    <section id="departments" className="departments">
      <div className="container">
        <div className="section-title">
          <h2>Departments</h2>
          <p>
            here are several departments are found in our centers namely
            Outpatient department (OPD), Inpatient Service (IP), Medical
            Department, Nursing Department, Paramedical Department, Physical
            Medicine and Rehabilitation Department, Operation Theatre Complex
            (OT), Pharmacy Department, Radiology Department (X-ray), Dietary
            Department, Non-professional Services (Business Management), Medical
            Record Department (MRD) and Personnel Department.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  Cardiology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  Neurology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                  Pediatrics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                  Eye Care
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Cardiology</h3>
                    <p className="fst-italic">
                      Qui laudantium consequatur laborum sit qui ad sapiente
                      dila parde sonata raqer a videna mareta paulona marka
                    </p>
                    <p>
                      Et nobis maiores eius. Voluptatibus ut enim blanditiis
                      atque harum sint. Laborum eos ipsum ipsa odit magni.
                      Incidunt hic ut molestiae aut qui. Est repellat minima
                      eveniet eius et quis magni nihil. Consequatur dolorem
                      quaerat quos qui similique accusamus nostrum rem vero
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={cardiology} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Neurology</h3>
                    <p className="fst-italic">
                      Qui laudantium consequatur laborum sit qui ad sapiente
                      dila parde sonata raqer a videna mareta paulona marka
                    </p>
                    <p>
                      Ea ipsum voluptatem consequatur quis est. Illum error
                      ullam omnis quia et reiciendis sunt sunt est. Non aliquid
                      repellendus itaque accusamus eius et velit ipsa
                      voluptates. Optio nesciunt eaque beatae accusamus lerode
                      pakto madirna desera vafle de nideran pal
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={neurology} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Fuga dolores inventore laboriosam ut est accusamus
                      laboriosam dolore
                    </h3>
                    <p className="fst-italic">
                      Totam aperiam accusamus. Repellat consequuntur iure
                      voluptas iure porro quis delectus
                    </p>
                    <p>
                      Eaque consequuntur consequuntur libero expedita in
                      voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                      debitis quis velit. Eum ex maxime error in consequatur
                      corporis atque. Eligendi asperiores sed qui veritatis
                      aperiam quia a laborum inventore
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src={pediatrics}
                      alt="pediatrics"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Eye Care </h3>
                    <p className="fst-italic">
                      Omnis blanditiis saepe eos autem qui sunt debitis porro
                      quia.
                    </p>
                    <p>
                      Exercitationem nostrum omnis. Ut reiciendis repudiandae
                      minus. Omnis recusandae ut non quam ut quod eius qui.
                      Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                      sed est sint aut vitae molestiae voluptate vel
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={eyeCare} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
