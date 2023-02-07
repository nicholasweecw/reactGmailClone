import "../style/Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import picture from "../profile-pic.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";

const Email = () => {
  const navigate = useNavigate();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton
            className="button arrowButton"
            onClick={() => navigate("/")}
          >
            <ArrowBackSharpIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <ArchiveOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <ReportGmailerrorredOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <DeleteForeverOutlinedIcon className="icon" />
          </IconButton>
          <div className="vl"></div>
          <IconButton className="button">
            <EmailOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <AccessTimeOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <AddTaskOutlinedIcon className="icon" />
          </IconButton>
          <div className="vl"></div>
          <IconButton className="button">
            <DriveFileMoveOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <LabelOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <MoreVertOutlinedIcon className="icon" />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton className="olderNewerButton">
            <KeyboardArrowLeftOutlinedIcon className="olderNewerIcon" />
          </IconButton>
          <IconButton className="olderNewerButton">
            <KeyboardArrowRightOutlinedIcon className="olderNewerIcon" />
          </IconButton>
          <KeyboardIcon className="select" />
          <ArrowDropDownIcon className="arrow" />
        </div>
      </div>
      <div className="mail__subject">
        <div className="mail__subjectLeft">
          <p className="subject">
            Hello my name is Me I am you what else can I type here? I am not
            sure, so I will continue to type now. This should be enough bah.
            Okay I will stop here now{" "}
            <IconButton className="importantButton">
              <LabelImportantIcon className="importantIcon" />
            </IconButton>
          </p>
        </div>
        <div className="mail__subjectRight">
          <IconButton className="button">
            <PrintOutlinedIcon className="icon" />
          </IconButton>
          <IconButton className="button">
            <OpenInNewOutlinedIcon className="icon" />
          </IconButton>
        </div>
      </div>

      <div className="mail__message">
        <div className="mail__messageTop">
          <div className="mail__messageTopLeft">
            <img src={picture} alt="" className="profile-pic"></img>
          </div>
          <div className="mail__messageTopMiddle">
            <p className="sender">
              <span className="name">Nic W</span> {"<nicholasweecw@gmail.com>"}
            </p>
            <p className="to">
              to me
              <ArrowDropDownIcon className="arrow" />
            </p>
          </div>
          <div className="mail__messageTopRight">
            <p className="dateTime">
              Feb 6, 2023, 8:40 AM {"("}1 day ago{")"}
              <div className="icons">
                <IconButton className="button">
                  <StarBorderIcon className="icon" />
                </IconButton>
                <IconButton className="button">
                  <KeyboardReturnRoundedIcon className="icon replyIcon" />
                </IconButton>
                <IconButton className="button">
                  <MoreVertOutlinedIcon className="icon" />
                </IconButton>
              </div>
            </p>
          </div>
        </div>
        <div className="mail__messageBottom"></div>
      </div>
    </div>
  );
};

export default Email;
