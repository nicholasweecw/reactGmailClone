import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <form className="form">
        <IconButton className="btn">
          <SearchIcon className="search-icon" />
        </IconButton>
        <input className="input" placeholder="Search mail" type="text"></input>
      </form>
    </div>
  );
};

export default Navbar;
