import React from "react";
import cx from "classnames";

import ArrowLink from "../ArrowLink/ArrowLink.tsx";

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
          <div className="mb-8 text-3xl font-bold md:mb-6 md:text-5xl leading-12 md:leading-16">
            {title}
          </div>
        )}
        <div className="w-full mb-4 md:hidden">
          <img src={img.src} className="w-full rounded-xl" alt={img.alt} />
        </div>
        {text && (
          <p className="mb-6 text-base font-light md:text-lg md:mb-10">
            {text}
          </p>
        )}
        {cta && (
          <ArrowLink
            as={cta.as}
            onClick={cta.onClick}
            href={cta.href}
          >{cta.title}</ArrowLink>
        )}
      </div>
      <div className="hidden w-full lg:w-3/5 md:block">
        <img src={img.src} className="w-full rounded-xl" alt={img.alt} />
      </div>
    </div>
  );
}

export default TextWithRoundImage;
