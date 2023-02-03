import {
  CheckBox,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

import "../style/EmailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
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
