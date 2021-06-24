import Button from "./Button";

export default {
  title: "Primary Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Button title",
  description: "Button description",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Button title",
  description: "Button description",
  disabled: true,
};
