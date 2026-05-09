"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

interface Props {
  href: string;
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  variant?: "text" | "outlined" | "contained";
}

export default function ButtonLink({
  href,
  icon,
  label,
  variant = "contained",
}: Props) {
  const router = useRouter();

  return (
    <Button
      startIcon={icon}
      variant={variant}
      onClick={() => router.push(href)}
    >
      {label}
    </Button>
  );
}
