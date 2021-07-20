import TextWithImage from "./TextWithImage.tsx";

export default {
  title: "Text with image",
  component: TextWithImage,
};

const Template = (args) => (
  <div className="container mx-auto">
    <TextWithImage {...args} />
  </div>
);

Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2156',
  },
}

export const TextLeft = Template.bind({});
TextLeft.args = {
  img: {
    src: "https://i.insider.com/5de5784979d757159d0b6838?width=700",
    alt: "img alt text",
  },
  title: "Zaveza uporabnikom",
  text: "Želimo ponuditi najboljše možne izdelke z visoko kakovostnimi sestavinami, brez aditivov, v varnem pakiranju in za vse okuse.",
  cta: {
    title: "Rezerviraj svoj termin",
  },
};

TextLeft.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2156',
  },
}

export const TextRight = Template.bind({});
TextLeft.args = {
  textPosition: "right",
  img: {
    src: "https://i.insider.com/5de5784979d757159d0b6838?width=700",
    alt: "img alt text",
  },
  title: "Zaveza uporabnikom",
  text: "Želimo ponuditi najboljše možne izdelke z visoko kakovostnimi sestavinami, brez aditivov, v varnem pakiranju in za vse okuse.",
  cta: {
    title: "Rezerviraj svoj termin",
  },
};

TextRight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HL2UpqRKOcTewgoGDKrDwP/Argeta-Website-Homepage-2021?node-id=2160%3A2156',
  },
}
