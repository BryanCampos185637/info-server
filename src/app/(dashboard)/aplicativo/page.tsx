import { Metadata } from "next";
import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import LaptopIcon from "@mui/icons-material/Laptop";

import { ButtonLink, ChipEnv, LabelWithIcon } from "@/components";
import { AplicacionService } from "@/services";

export const metadata: Metadata = {
  title: "InfoServer | Aplicativos",
  description: "Listado de aplicativos por ambiente",
};

export default async function ApplicationsPage() {
  const aplicaciones = await AplicacionService.getAplicaciones();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="h5" component="h1">
              Aplicativos
              <Typography variant="body1">Listado de aplicativos</Typography>
            </Typography>

            <ButtonLink
              href="/aplicativo/formulario"
              icon={<AddIcon />}
              label="Agregar aplicativo"
            />
          </Box>
        </Grid>

        <Grid size={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NOMBRE</TableCell>
                  <TableCell>ENTORNO</TableCell>
                  <TableCell>VERSION</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {aplicaciones.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <LabelWithIcon
                        icon={<LaptopIcon />}
                        label={item.nombre}
                      />
                    </TableCell>
                    <TableCell>
                      <ChipEnv ambiente={item.ambiente} />
                    </TableCell>
                    <TableCell>{item.version}</TableCell>
                    <TableCell>
                      <ButtonLink
                        href={`/aplicativo/formulario/${item.id}`}
                        label={<EditIcon />}
                        variant="text"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
