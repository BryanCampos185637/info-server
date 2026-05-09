"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface Props {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function ItemAppDrawer({ label, href, icon }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => router.push(href)}
          selected={pathname === href}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}
