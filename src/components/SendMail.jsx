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
        <MinimizeIcon className="sendMail__minimize" />
        <OpenInFullOutlinedIcon className="sendMail__fullScreen" />
        <CloseOutlinedIcon className="sendMail__close" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

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
