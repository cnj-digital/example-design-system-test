import ProductCard from "./ProductCard";

export default {
  title: "Product Card",
  component: ProductCard,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  productImg:
    "https://www.argeta.com/app/uploads/2019/01/Kokosja-front-1-320x0-c-default.png",
  title: "Argeta",
  description: "Bogata izbira dobrot.",
  cta: "odkrij okuse",
};
