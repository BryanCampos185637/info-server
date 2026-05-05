"use client";
import { useRouter } from "next/navigation";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import HomeIcon from "@mui/icons-material/Home";

export default function AppDrawer() {
  const router = useRouter();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 220, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ width: 210, overflow: "auto" }} role="presentation">
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => router.push(item.href)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

const menuItems = [
  {
    label: "Inicio",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Servidores",
    href: "/servidor",
    icon: <DnsIcon />,
  },
  {
    label: "Bases de datos",
    href: "/basedato",
    icon: <StorageIcon />,
  },
];
