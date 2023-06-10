import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
const validate = (values) => {
  const errors = {};
  if (!values.fName) {
    errors.name = "Required";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (values.age < 18) {
    errors.lastName = "Must be 18+";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const CreateForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fName: "",
      email: "",
      age: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Name"
          onChange={formik.handleChange}
          value={formik.values.fName}
          fullWidth
          required
        />
        {formik.errors.fName ? <div>{formik.errors.fName}</div> : null}

        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="Age"
            onChange={formik.handleChange}
            value={formik.values.age}
            required
            sx={{ mb: 4 }}
          />
          {formik.errors.age ? <div>{formik.errors.age}</div> : null}
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            sx={{ mb: 4 }}
          />
        </Stack>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Address"
          onChange={formik.handleChange}
          value={formik.values.address}
          multiline
          required
        />
        <Button variant="outlined" color="secondary" type="submit">
          Create
        </Button>
      </form>
    </React.Fragment>
  );
};
export default CreateForm;
