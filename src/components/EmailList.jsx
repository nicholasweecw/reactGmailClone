import "../style/EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import EmailItem from "./EmailItem";

const EmailList = () => {
  const [mails, setMails] = useState([]);

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

      <div className="emailList">
        <div className="emailList__unread">
          <div className="emailList__unread__top">
            <div className="emailList__unread__topLeft">
              <KeyboardArrowUpIcon className="arrow" />
              <p className="text">Unread</p>
            </div>
            <div className="emailList__unread__topRight">
              <MoreVertIcon className="more" />
            </div>
            <hr className="hr" />
          </div>
          <div className="emailList__unread__bottom">
            {mails.length > 0 ? (
              <div className="mails">
                {mails.map(() => (
                  <EmailItem />
                ))}
              </div>
            ) : (
              <p className="text">
                Woohoo! You've read all the messages in your inbox.
              </p>
            )}
            <hr className="hr" />
          </div>
        </div>

        <div className="emailList__others">
          <div className="emailList__others__top">
            <div className="emailList__others__topLeft">
              <KeyboardArrowUpIcon className="arrow" />
              <p className="text">Everything else</p>
            </div>
            <div className="emailList__others__topRight">
              <MoreVertIcon className="more" />
            </div>
            <hr className="hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
