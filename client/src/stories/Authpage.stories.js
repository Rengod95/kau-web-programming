import AuthPage from "../pages/Auth/AuthPage";
import { Meta } from "@storybook/react";

export default {
  title: "Pages/Auth",
  component: AuthPage,
};

const Template = (args) => <AuthPage {...args} />;

export const Basic = Template.bind({});
