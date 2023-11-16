"use client";
import { Button } from "@nextui-org/react";

interface UiButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "default"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  title: string;
  isLoading?: boolean;
  variant?: "solid" | "shadow" | "light" | "ghost" | "flat" | "bordered";
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

export default function UiButton({
  color,
  radius,
  title,
  isLoading,
  variant,
  className,
  fullWidth,
  onClick,
  type,
}: UiButtonProps) {
  return (
    <Button
      color={color}
      radius={radius ?? "none"}
      isLoading={isLoading}
      variant={variant}
      className={className}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
    >
      {title}
    </Button>
  );
}