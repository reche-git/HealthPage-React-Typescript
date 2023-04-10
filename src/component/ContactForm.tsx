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
    errors.name = "This subject is requiered.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "You can only use letters and blank spaces";
  }
  if (!form.email.trim()) {
    errors.email = "This subject is requiered.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Try typing an email like "wearevalidating@email.com"';
  }
  if (!form.comments.trim()) {
    errors.comments = "This subject is requiered.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "You can't exceed the 255 characters";
  }

  return errors;
};

const ContactForm = () => {
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
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>
            Our 24hs customer service will contact you as soon as possible.
            Remember to add the type of Pókemon, race, gender, and any other
            critical information to help us giving you the most accurate
            response.
          </p>
        </div>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 form-group">
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
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
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
              {errors.email && <p>{errors.email}</p>}
            </div>
            {/* <div className="col-md-4 form-group">
              <select name="department" id="department" className="form-select">
                <option value="">Pokémon Type</option>
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Flying">Flying</option>
                <option value="Fighting">Fighting</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Psychic">Psychic</option>
                <option value="Ice">Ice</option>
                <option value="Bug">Bug</option>
                <option value="Ghost">Ghost</option>
                <option value="Steel">Steel</option>
                <option value="Dragon">Dragon</option>
                <option value="Steel">Dark</option>
                <option value="Steel">Dragon</option>
              </select>
            </div> */}
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
            {errors.comments && <p>{errors.comments}</p>}
          </div>
          <div className="text-center">
            <button type="submit" value="Send"></button>
          </div>
        </form>
        {loading && <Loader />}
        {response && (
          <Message msg="Form Submited! Check your email" bgColor="#198754" />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
