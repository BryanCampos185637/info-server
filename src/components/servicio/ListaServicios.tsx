"use client";
import { useRouter } from "next/navigation";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

import { Servicio } from "@/interfaces";

interface props {
  servicios: Servicio[];
}

export default function ListaServicios({ servicios }: props) {
  const router = useRouter();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
    >
      {servicios.map((item) => (
        <ListItemButton
          key={item.id}
          onClick={() => router.push(`/servicio/${item.id}`)}
        >
          <ListItemIcon>
            <CloudQueueIcon />
          </ListItemIcon>
          <ListItemText primary={item.nombre} />
        </ListItemButton>
      ))}
    </List>
  );
}
