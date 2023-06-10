import { Typography, Box } from "@mui/material";
import React from 'react';

const HeaderCmp= (props) => {
  return (
    <React.Fragment>
    <Box mb="30px">
      <Typography variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {props.title}
      </Typography>
      <Typography variant="h5">{props.subtitle}</Typography>
    </Box>
    </React.Fragment>
  );
}
export default HeaderCmp;