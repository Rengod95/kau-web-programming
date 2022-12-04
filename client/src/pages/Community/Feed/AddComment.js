import React from "react";
import classes from "./Feed.module.scss";
import Input from "../../../components/UI/Input";
import AuthButton from "../../../components/UI/AuthButton";
import { FormProvider, useForm } from "react-hook-form";

const AddComment = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit}
        className={classes.FormContainer}
      >
        <Input
          name={"comment"}
          type={"text"}
          size={{
            width: "100%",
            marginBottom: "none",
            color: "rgba(255,255,255,0.2)",
          }}
          // label={"comment"}
        />
        <AuthButton
          onClick={formMethods.handleSubmit()}
          size={{ width: "100%", height: "55px" }}
        >
          추가
        </AuthButton>
      </form>
    </FormProvider>
  );
};

export default AddComment;
