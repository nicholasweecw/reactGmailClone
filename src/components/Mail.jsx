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
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
          <KeyboardIcon className="select" />
          <ArrowDropDownIcon className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Email;
