import React from 'react';
import Link from 'next/link';

type Props = {
  as?: 'button' | 'Link';
  children: React.ReactNode;
  onClick?: () => {};
  href?: string;
  color?: 'orange' | 'yellow' | 'black';
};

export default function ArrowLink({
  as = 'button',
  children,
  href,
  onClick,
  color = 'orange',
}: Props) {
  const classNames = `cursor-pointer inline-flex items-center text-sm font-bold tracking-widest uppercase text-${color} group`;

  if (as === 'Link') {
    return (
      <Link href={href}>
        <a className={classNames}>
          <span>{children}</span>
          <Arrow />
        </a>
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={classNames}>
        <span>{children}</span>
        <Arrow />
      </button>
    );
  }
}

function Arrow() {
  return (
    <svg
      className="ml-3 transition duration-300 transform fill-current md:group-hover:translate-x-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 11.2397H23.9805L23.9932 11.2271L17.7666 5L16.1396 6.62598L20.7531 11.2397H0V13.5396H20.7583L16.1162 18.1816L17.7432 19.8076L23.9932 13.5576L23.9751 13.5396H24V11.2397Z" />
    </svg>
  );
}
