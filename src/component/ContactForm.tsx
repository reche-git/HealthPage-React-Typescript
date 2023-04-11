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
              
            </div>
            <div className="col-md-4 form-group">
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
            </div>
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
          <div className="text-center">
            <button type="submit">Make an Appointment</button>{" "}
          </div>
          <br />
            {errors.name && <p className="form-error">*{errors.name}</p>}
            {errors.email && <p className="form-error">*{errors.email}</p>}
            {errors.comments && <p className="form-error">*{errors.comments}</p>}
        </form>
        {loading && <Loader />}
        {response && (
          <Message msg="Form Submited! Check your email" bgColor="#fff" />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
