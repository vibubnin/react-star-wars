import { useState } from "react";
import { UiInput } from "./UiInput";

export default {
  title: "UI-Kit/UiInput",
  component: UiInput,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  const onChange = (value) => setValue(value);

  return <UiInput {...args} value={value} onChange={onChange} />;
};

const props = {
  value: "",
  onChange: () => console.log("input changed"),
  placeholder: "Placeholder",
  className: "",
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
