import { Metadata } from "next";
import { Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "InfoServer | Base de datos",
  description: "Listado de bases de datos por ambiente",
};

export default function DatabasesPage() {
  return (
    <Container>
      <Typography variant="h5" component="h1">
        Base de datos
        <Typography variant="body1">Listado de bases de datos</Typography>
      </Typography>
    </Container>
  );
}
