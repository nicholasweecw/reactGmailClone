import "../style/SendMail.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <div className="options">
          <MinimizeIcon className="sendMail__minimize" />
          <OpenInFullOutlinedIcon className="sendMail__fullScreen" />
          <CloseOutlinedIcon
            className="sendMail__close"
            onClick={() => dispatch(closeSendMessage())}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="sendMail__recipients"
          type="email"
          placeholder="Recipients"
          {...register("to", { required: true })}
        />
        <input
          classname="sendMail__subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <textarea
          className="sendMail__message"
          type="text"
          {...register("message", { required: true })}
        />

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
