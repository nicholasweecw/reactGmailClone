import "../style/Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LabelIcon from "@mui/icons-material/Label";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <button className="btn" onClick={() => dispatch(openSendMessage())}>
          <CreateIcon className="icon" />
          <p className="text">Compose</p>
        </button>
      </div>

      <div className="sidebar__bottom">
        <button className="inbox group">
          <InboxOutlinedIcon className="icon" />
          <p className="text">Inbox</p>
        </button>
        <button className="btn group">
          <StarBorderIcon className="icon" />
          <p className="text">Starred</p>
        </button>
        <button className="btn group">
          <AccessTimeIcon className="icon" />
          <p className="text">Snoozed</p>
        </button>
        <button className="btn group">
          <LabelImportantTwoToneIcon className="icon" />
          <p className="text">Important</p>
        </button>
        <button className="btn group">
          <SendOutlinedIcon className="icon" />
          <p className="text">Sent</p>
        </button>
        <button className="btn group">
          <InsertDriveFileOutlinedIcon className="icon" />
          <p className="text">Drafts</p>
        </button>
        <button className="btn group">
          <LabelOutlinedIcon className="icon" />
          <p className="text">Categories</p>
        </button>
        <button className="btn group">
          <KeyboardArrowDownIcon className="icon" />
          <p className="text">More</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
