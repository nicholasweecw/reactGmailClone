import "../style/SendMail.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <div className="options">
          <MinimizeIcon className="sendMail__minimize" />
          <OpenInFullOutlinedIcon className="sendMail__fullScreen" />
          <CloseOutlinedIcon className="sendMail__close" />
        </div>
      </div>

      <form>
        <input
          className="sendMail__recipients"
          type="text"
          placeholder="Recipients"
        />
        <input
          classname="sendMail__subject"
          type="text"
          placeholder="Subject"
        />
        <textarea className="sendMail__message" type="text" />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
