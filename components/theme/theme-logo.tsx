"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeLogoProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ThemeLogo({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by showing light logo initially
  if (!mounted) {
    return (
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} />
  );
}
