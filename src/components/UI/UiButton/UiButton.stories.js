import { UiButton } from "./UiButton";

export default {
  title: "UI-Kit/UiButton",
  component: UiButton,
};

const Template = (args) => <UiButton {...args} />;

const props = {
  className: "",
  text: "Hello",
  disabled: false,
  theme: "light",
  onClick: () => console.log("click"),
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true,
};
