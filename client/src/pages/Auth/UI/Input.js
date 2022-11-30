import React, { useEffect } from "react";
import classes from "./Input.module.scss";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Input = ({ name, openToast, type, ...otherProps }) => {
  const { control, formState, register } = useFormContext();

  const { errors } = formState;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          label={name}
          {...field}
          {...register(name, {
            minLength: 2,
          })}
          type={type}
          variant="outlined"
          sx={{ mb: "1.5rem" }}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name]?.message : ""}
        />
      )}
    />
  );
};

export default Input;
