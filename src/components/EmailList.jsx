import "../style/EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const EmailList = () => {
  return (
    <div>
      <div className="emailList__settings flow-root">
        <div className="emailList__settingsLeft">
          <CheckBoxOutlineBlankIcon className="select" />
          <ArrowDropDownIcon className="arrow" />
          <RefreshIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
        <div className="emailList__settingsRight">
          <KeyboardIcon className="select" />
          <ArrowDropDownIcon className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default EmailList;
