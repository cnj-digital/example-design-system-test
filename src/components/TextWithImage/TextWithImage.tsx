import React from "react";
import cx from "classnames";

import SecondaryButton from "../SecondaryButton/SecondaryButton.tsx";

interface Img {
  src: string;
  alt: string;
}

interface CTAbutton {
  title: string;
  as?: "button" | "a";
  onClick?: () => {};
  href?: string;
}

type Props = {
  img: Img;
  title?: string;
  text?: string;
  cta?: CTAbutton;
};

function TextWithRoundImage({ textPosition = "left", img, title, text, cta }) {
  return (
    <div
      className={cx("flex justify-center items-center flex-wrap text-black", {
        "flex-row-reverse": textPosition === "right",
      })}
    >
      <div
        className={cx(
          "w-full lg:w-2/5 mb-6 lg:mb-0",
          textPosition === "left" ? "lg:pr-32" : "lg:pl-32"
        )}
      >
        {title && (
          <div className="mb-8 md:mb-6 font-bold text-3xl md:text-5xl leading-12 md:leading-16">
            {title}
          </div>
        )}
        <div className="w-full mb-4 md:hidden">
          <img src={img.src} className="rounded-xl w-full" alt={img.alt} />
        </div>
        {text && (
          <p className="text-base md:text-lg font-light mb-6 md:mb-10">
            {text}
          </p>
        )}
        {cta && (
          <SecondaryButton
            title={cta.title}
            as={cta.as}
            onClick={cta.onClick}
            href={cta.href}
          ></SecondaryButton>
        )}
      </div>
      <div className="w-full lg:w-3/5 hidden md:block">
        <img src={img.src} className="rounded-xl w-full" alt={img.alt} />
      </div>
    </div>
  );
}

export default TextWithRoundImage;
