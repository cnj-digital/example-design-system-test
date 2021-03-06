import PrimaryButton from "./PrimaryButton.tsx";

export default {
  title: "Buttons/Primary Button",
  component: PrimaryButton,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
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
