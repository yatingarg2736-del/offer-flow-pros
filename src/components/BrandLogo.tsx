import { useState } from "react";

interface BrandLogoProps {
  name: string;
  logo: string | null;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 w-8 rounded-lg text-sm",
  md: "h-10 w-10 rounded-lg text-base",
  lg: "h-20 w-20 rounded-2xl text-3xl",
};

const BrandLogo = ({ name, logo, size = "md" }: BrandLogoProps) => {
  const [failed, setFailed] = useState(false);
  const box = sizes[size];
  if (!logo || failed) {
    return (
      <span
        aria-hidden="true"
        className={`grid ${box} shrink-0 place-items-center bg-accent-gradient font-extrabold text-accent-foreground shadow-glow`}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }
  return (
    <img
      src={logo}
      alt={`${name} logo`}
      width={size === "lg" ? 80 : size === "md" ? 40 : 32}
      height={size === "lg" ? 80 : size === "md" ? 40 : 32}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${box} shrink-0 border border-border bg-white object-contain p-1`}
    />
  );
};

export default BrandLogo;
