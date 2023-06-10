import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import HeaderCmp from "../../components/HeaderComponent";
import * as yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fName: yup.string().required("required"),
  age:  yup.number().required().positive().integer(),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),  
});

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
    validationSchema: {checkoutSchema},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <HeaderCmp title="Create contacts" subtitle="" />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
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
            label="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            sx={{ mb: 4 }}
          />
        </Stack>
        <TextField
          type="text"
          variant="outlined"
          label="Address"
          onChange={formik.handleChange}
          value={formik.values.address}
          multiline
          fullWidth
          required
        />
        <Box justifyContent="end" display="flex">
          <Button variant="contained" type="submit" color="success">
            Create
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};
export default CreateForm;
