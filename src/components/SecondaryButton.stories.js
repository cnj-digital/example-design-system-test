import SecondaryButton from "./SecondaryButton";

export default {
  title: "Secondary Button",
  component: SecondaryButton,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Secondary Button Text",
  as: "button",
};

export const Link = Template.bind({});
Link.args = {
  title: "Secondary Button Text",
  as: "a",
  href: "https://cnj.si/",
};
