import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  title: string;
  href: string;
  secondary?: boolean;
  children: React.ReactNode;
};

export const LinkButton = ({ title, href, secondary, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      title={title}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-md border px-1 py-3 text-center font-bold uppercase transition-all ${
        secondary
          ? "border-green hover:border-green hover:text-black"
          : "bg-green text-black outline-offset-2 outline-black hover:outline"
      }`}
    >
      {children}
    </Link>
  );
};
