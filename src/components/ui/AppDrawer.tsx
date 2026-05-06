import { Drawer, Toolbar, Box, List } from "@mui/material";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import HomeIcon from "@mui/icons-material/Home";
import LaptopIcon from "@mui/icons-material/Laptop";

import ItemAppDrawer from "./ItemAppDrawer";

const menuItems = [
  {
    label: "Inicio",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Aplicativos",
    href: "/aplicativo",
    icon: <LaptopIcon />,
  },
  {
    label: "Servicios",
    href: "/servicio",
    icon: <DnsIcon />,
  },
  {
    label: "Bases de datos",
    href: "/basedato",
    icon: <StorageIcon />,
  },
];

export default function AppDrawer() {
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
            <ItemAppDrawer key={item.label} {...item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
