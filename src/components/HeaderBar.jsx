
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import React, { useState} from "react";
import {
  InputBase,
  Box,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  
  return (
    <Header open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
               <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
                <MenuIcon />
              </IconButton>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-main.png`}
                alt="Logo"
                style={{ height: "40px", width: "auto" }}
              />
              <Typography variant="h6" color="#5f6368" sx={{ fontWeight: "bold" }}>
                Fundoo-Notes
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                marginLeft: 3,
                marginRight: 3,
                maxWidth: 500,
                backgroundColor: "#f1f3f4",
                borderRadius: "8px",
                paddingLeft: 2,
              }}
            >
              <SearchIcon sx={{color:'black' }}/>
              <InputBase
                placeholder="Search"
                fullWidth
                sx={{ paddingLeft: 1, fontSize: "0.9rem",height:"50px" }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton>
                <RefreshIcon />
              </IconButton>
              <IconButton>
                <ViewListIcon />
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
              <Avatar
                alt="User Profile"
                src={`${process.env.PUBLIC_URL}/images/pavan.jpeg`}
                sx={{ width: 32, height: 32 }}
              />
            </Box>
          </Toolbar>
    </Header>
  )
}

export default HeaderBar;