import React from "react";
import Input from "../../../components/UI/Input";
import classes from "./AddFeed.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SendIcon from "@mui/icons-material/Send";
const AddFeed = () => {
  const formMethods = useForm();

  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div className={classes.Container}>
      <h3 className={classes.CardName}>피드 추가</h3>
      <div className={classes.Layout}>
        <div className={classes.Header}>
          <input
            className={classes.TitleInput}
            type="text"
            placeholder={"피드의 제목을 입력해 주세요!"}
          />
        </div>
        <div className={classes.Middle}>
          <textarea
            className={classes.TextInput}
            type="text"
            placeholder={"피드의 내용을 입력해 주세요!"}
          />
        </div>
        <div className={classes.Bottom}>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <IconButton
            variant={"contained"}
            // sx={{ width: 46, height: 47, minWidth: 46, fontSize: "9px" }}
          >
            <SendIcon color={"warning"} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default AddFeed;
