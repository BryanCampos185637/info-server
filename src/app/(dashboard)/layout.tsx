import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { AppNavbar, AppDrawer } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <header>
        <AppNavbar />
        <AppDrawer />
      </header>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
