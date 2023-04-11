import { useForm } from "../hooks/useForm";
import { Loader } from "./Loader";
import Message from "./Message";

interface Form {
  name: string;
  email: string;
  comments: string;
}

const initialForm: Form = {
  name: "",
  email: "",
  comments: "",
};

interface FormErrors {
  name?: string;
  email?: string;
  comments?: string;
}

const validationsForm = (form: Form): FormErrors => {
  let errors: FormErrors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The name is requiered.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "You can only use letters and blank spaces";
  }
  if (!form.email.trim()) {
    errors.email = "The email is requiered.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Try typing an email like "email@email.com"';
  }
  if (!form.comments.trim()) {
    errors.comments = "Message is requiered.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "You can't exceed the 255 characters";
  }

  return errors;
};

const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleSubmit,
    handleChange,
  }: any = useForm(initialForm, validationsForm);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Here you can see our principal locations, all our branches are
            equipped with AI translators if you are not a native speaker.
          </p>
        </div>
      </div>

      <div>
        <iframe
        title="map"
          src="https://my.atlistmaps.com/map/3175cf26-e694-447b-8b77-6e826f3083f3?share=true"
          allow="geolocation 'self' https://my.atlistmaps.com"
          width="100%"
          height="350px"
        ></iframe>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.name}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.subject}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="comments"
                  rows={5}
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.comments}
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
              <br />
              {errors.name && <p className="form-error">*{errors.name}</p>}
              {errors.email && <p className="form-error">*{errors.email}</p>}
              {errors.comments && (
                <p className="form-error">*{errors.comments}</p>
              )}
            </form>
            {loading && <Loader />}
            {response && (
              <Message msg="Form Submited! Check your email" bgColor="#fa3c69" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
