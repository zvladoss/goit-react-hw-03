import { useFormik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact, newContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      addContact(newContact);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          name="number"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
