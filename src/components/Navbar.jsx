import SearchIcon from "@mui/icons-material/Search";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <form className="form">
        <button className="btn">
          <SearchIcon className="search-icon" />
        </button>
        <input className="input" placeholder="Search mail" type="text"></input>
      </form>
    </div>
  );
};

export default Navbar;
