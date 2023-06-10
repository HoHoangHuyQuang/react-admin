import { Box, IconButton } from "@mui/material";
import React from "react";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
   
  
    return (
      <Box display="flex" justifyContent="space-between" p={2} backgroundColor="#C3D2D7">
        {/* SEARCH BAR */}
        <Box
          display="flex" 
                
          borderRadius="3px"
        >
          <InputBase fullWidth sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
  
        {/* ICONS */}
        <Box display="flex">
          
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };
  
  export default Topbar;