import TextWithImage from "./TextWithImage";
import SecondaryButton from "./SecondaryButton";

export default {
  title: "Text with image",
  component: TextWithImage,
};

const Template = (args) => (
  <div className="container mx-auto">
    <TextWithImage {...args} />
  </div>
);

export const TextLeft = Template.bind({});
TextLeft.args = {
  title: "Text positioned to the left",
  imgSrc: "https://i.insider.com/5de5784979d757159d0b6838?width=700",
  imgAlt: "img alt text",
  children: (
    <div>
      <div className="mb-6 font-bold text-5xl">Zaveza uporabnikom</div>
      <div className="text-lg font-light mb-10">
        Želimo ponuditi najboljše možne izdelke z visoko kakovostnimi
        sestavinami, brez aditivov, v varnem pakiranju in za vse okuse.
      </div>
      <SecondaryButton title="Želim izvedeti več"></SecondaryButton>
    </div>
  ),
};

export const TextRight = Template.bind({});
TextRight.args = {
  title: "Text positioned to the left",
  textLeft: false,
  imgSrc: "https://i.insider.com/5de5784979d757159d0b6838?width=700",
  imgAlt: "img alt text",
  children: (
    <div>
      <div className="mb-6 font-bold text-5xl">Zaveza uporabnikom</div>
      <div className="text-lg font-light mb-10">
        Želimo ponuditi najboljše možne izdelke z visoko kakovostnimi
        sestavinami, brez aditivov, v varnem pakiranju in za vse okuse.
      </div>
      <SecondaryButton title="Želim izvedeti več"></SecondaryButton>
    </div>
  ),
};
