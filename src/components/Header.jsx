import "../style/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Navbar from "./Navbar";
import picture from "../profile-pic.png";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import { auth } from "../firebase";

const Header = () => {
  // To import user account data
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Sign out from account
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton className="btn">
          <MenuIcon className="menu-icon" />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt=""
          className="gmail-icon"
        />
      </div>

      <Navbar />

      <div className="header__right">
        <IconButton className="btn">
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton className="btn">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className="btn">
          <AppsOutlinedIcon />
        </IconButton>
        <Avatar
          onClick={signOut}
          src={user?.photoUrl}
          alt=""
          className="profile-pic"
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
