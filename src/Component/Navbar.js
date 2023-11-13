import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars2, HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { List } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ListItem from "@mui/material/ListItem";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import MessageIcon from "@mui/icons-material/Message";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const { openMenu, setOpenMenu } = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      // path
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonial",
      icon: <MessageIcon />,
    },
    {
      text: "Contact",
      icon: <AddIcCallIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {/* <links */}
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Testimonial">Testimonial</a>
        <a href="Contact">Contact</a>
        <a href="Cart">
          <BsCart2 className="number-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars2 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
