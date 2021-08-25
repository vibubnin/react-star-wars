import { UiVideo } from "./UiVideo";
import video from "./video/han-solo.mp4";

export default {
  title: "UI-Kit/UiVideo",
  component: UiVideo,
};

const Template = (args) => {
  return <UiVideo {...args} />;
};

const props = {
  src: video,
  playbackRate: 1.0,
  className: "",
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
