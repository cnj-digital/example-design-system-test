import React from "react";

import SecondaryButton from "../SecondaryButton/SecondaryButton.tsx";
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
      <a className="group cursor-pointer mt-10 w-64" onClick={onClick}>
        <div className="transform group-hover:-translate-y-10 transition-transform duration-200 ease-in-out">
          <Image
            src={img.src}
            alt={img.alt}
            width={192}
            height={192}
            className="mx-auto w-48 mb-6"
          />
          <div className="text-center group-hover:bg-white group-hover:shadow-productCard transition-all duration-150 ease-in-out w-64 h-64 rounded-full mx-auto flex justify-center items-center -mt-24">
            <div>
              <div className="font-bold text-xl tetx-black mb-1">{title}</div>
              <div className="text-black-300 text-xs mb-4 opacity-80">
                {description}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <SecondaryButton title={cta} />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
