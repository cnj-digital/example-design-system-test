import React from "react";

import ArrowLink from "../ArrowLink/ArrowLink";
import Link from "next/link";
import Image from "next/image";

interface Img {
  src: string;
  alt: string;
}

type Props = {
  img: Img;
  title: string;
  description?: string;
  cta: string;
  onClick?: () => {};
  href: string;
};

function ProductCard({ img, title, description, cta, onClick, href }: Props) {
  return (
    <Link href={href}>
      <a className="w-64 mt-10 cursor-pointer group" onClick={onClick}>
        <div className="transition-transform duration-200 ease-in-out transform group-hover:-translate-y-10">
          <Image
            src={img.src}
            alt={img.alt}
            width={192}
            height={192}
            className="w-48 mx-auto mb-6"
          />
          <div className="flex items-center justify-center w-64 h-64 mx-auto -mt-24 text-center transition-all duration-150 ease-in-out rounded-full group-hover:bg-white group-hover:shadow-productCard">
            <div>
              <div className="mb-1 text-xl font-bold tetx-black">{title}</div>
              <div className="mb-4 text-xs text-black-300 opacity-80">
                {description}
              </div>
              <div className="transition-opacity duration-150 opacity-0 group-hover:opacity-100">
                <ArrowLink>{cta}</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
