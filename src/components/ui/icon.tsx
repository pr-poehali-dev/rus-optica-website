
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons | string;
  size?: number;
  className?: string;
  color?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ 
  name, 
  size = 24, 
  className = "", 
  color,
  fallback = "CircleAlert",
  ...props 
}: IconProps) => {
  // Try to get the icon from lucide-react
  const LucideIcon = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  // If the icon is found, render it
  if (LucideIcon) {
    return (
      <LucideIcon
        size={size}
        className={cn("", className)}
        color={color}
        {...props}
      />
    );
  }

  // Fallback to the CircleAlert icon if the icon is not found
  console.warn(`Icon "${name}" not found, using fallback icon "${fallback}"`);
  const FallbackIcon = (LucideIcons as any)[fallback];
  
  return (
    <FallbackIcon
      size={size}
      className={cn("", className)}
      color={color}
      {...props}
    />
  );
};

export default Icon;
