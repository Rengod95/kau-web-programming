import RegisterForm from "../pages/Auth/forms/RegisterForm";

export default {
  title: "components/RegisterForm",
  component: RegisterForm,
};

const Template = (args) => <RegisterForm {...args} />;

export const Basic = Template.bind({});
