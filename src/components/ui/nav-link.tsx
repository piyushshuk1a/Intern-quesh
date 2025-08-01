import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

export const NavLink = ({ href, children, isActive, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all duration-300",
        "hover:bg-primary/10 hover:text-primary",
        isActive && "bg-primary text-primary-foreground shadow-glow",
        className
      )}
    >
      {children}
    </a>
  );
};