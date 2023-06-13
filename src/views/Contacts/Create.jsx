import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import HeaderCmp from "../../components/HeaderComponent";
import * as yup from "yup";

const CreateForm = () => {
  const initialValues = {
    fName: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    fName: yup.string().required("required"),
    age: yup.number().required().positive().integer(),
    email: yup.string().email("invalid email").required("required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <HeaderCmp title="Create contacts" subtitle="" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fName}
                name="fName"
                error={!!touched.fName && !!errors.fName}
                helperText={touched.fName && errors.fName}
                sx={{ gridColumn: "span 2" }}
              />             
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />             
              <Stack spacing={2} direction="row"  >
              <TextField                
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField    
                fullWidth            
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              </Stack>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="address2"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};
export default CreateForm;
