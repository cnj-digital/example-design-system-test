import ArrowLink from "./ArrowLink.tsx";
import { withDesign } from 'storybook-addon-designs'


export default {
  title: "Buttons/ArrowLink",
  component: ArrowLink,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [withDesign],
};

export const Template = (args) => <ArrowLink {...args}>Arrow Link text</ArrowLink>;

Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2332',
  },
}

export const Default = Template.bind({});
Default.args = {
  as: "button",
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2332',
  },
}

export const Link = Template.bind({});
Link.args = {
  as: "Link",
  href: "https://cnj.si/",
};

Link.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2332',
  },
}
