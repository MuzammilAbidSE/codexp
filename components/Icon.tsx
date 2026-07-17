"use client";

import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

function toPascalCase(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

type IconMap = Record<string, React.ComponentType<LucideProps>>;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Component = (Icons as unknown as IconMap)[toPascalCase(name)];
  if (!Component) return null;
  return <Component data-lucide-icon="" {...props} />;
}
