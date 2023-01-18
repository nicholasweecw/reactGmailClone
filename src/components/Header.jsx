import "../style/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="menu-icon" />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt=""
          className="gmail-icon"
        />
      </div>

      <Navbar />

      <div className="header__right">
        <SettingsOutlinedIcon className="icon" />
        <img
          src="https://lh3.googleusercontent.com/ogw/AOh-ky035WJVg_xE7XVzW8a6u_Nx7R4QzV55JiAY0L16=s32-c-mo"
          alt=""
          className="profile-pic"
        ></img>
      </div>
    </div>
  );
};

export default Header;
