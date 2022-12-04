import React, { useEffect } from "react";
import classes from "./Input.module.scss";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

//name으로 라벨 설정 및 form 값 추적 시 사용
// form이 필요한 모든 곳에서 사용 가능
const Input = ({ name, type, size }) => {
  //상위 hook form context를 불러오는 메소드
  const { control, formState, register } = useFormContext();
  const error = formState.errors[name];
  const style = { ...textFieldStyle, ...size };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          label={inputLabel[name]}
          type={type}
          variant="outlined"
          sx={style}
          error={!!error}
          helperText={error ? error?.message : ""}
          {...field}
          {...register(name)}
        />
      )}
    />
  );
};

const textFieldStyle = {
  mb: "1.5rem",
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: "2px solid #6c63ff",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiOutlinedLabel-root.Mui-focused": {
    color: "rgb(0,176,131)",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#00bf8e",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)" }, // 라벨 관리
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "2px solid #424890",
      borderRadius: "8px",
      bgcolor: "#2e3267",
    },
    "& > input": {
      zIndex: 3, //배경 색 설정시 텍스트가 가려지는 문제 해결
      color: "#fff",
    },
  },
};
export default Input;

const inputLabel = {
  name: "이름",
  phone_number: "휴대전화 번호",
  auth_key: "인증키",
  password: "비밀번호",
  comment: "당신의 생각을 표현해 보세요!",
  search: "무엇이든 검색 해 보세요!",
  add_feed_title: "피드의 제목을 입력해 주세요!",
  add_feed_text: "피드의 내용을 입력해 주세요!",
};
