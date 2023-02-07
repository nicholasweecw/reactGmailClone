import "../style/EmailRow.css";
import { StarBorderOutlined } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, subject, description, time }) => {
  // To allow website to navigate between pages
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/mail")} className="emailRow">
      <div className="emailRow__options">
        <IconButton className="checkboxButton">
          <CheckBoxOutlineBlankIcon className="checkbox" />
        </IconButton>
        <IconButton className="starButton">
          <StarBorderOutlined className="star" />
        </IconButton>
        <IconButton className="importantButton">
          <LabelImportantTwoToneIcon className="important" />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h3>
          <span className="emailRow__subject">{subject}</span> -{" "}
          <span className="emailRow__description">{description}</span>
        </h3>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;