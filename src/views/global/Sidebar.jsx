import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export default function AppSide(){
    // const context = React.useContext();
    const [toggled, setToggled] = React.useState(false);
    return (

    <div style={{ display: 'flex', height: '100vh', minHeight: '400px' }}> 
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" >
        <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {        
          return {
            color: disabled ? '#9e9e9e' : '#233ad1',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}>
           
          <SubMenu label="Charts">
            <MenuItem disabled> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem disabled> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>  
        <div> 
            <IconButton onClick={() => setToggled(!toggled)}>
                <MenuIcon/>          
            </IconButton>   
        </div>
         
    </div>
    
    );
}
