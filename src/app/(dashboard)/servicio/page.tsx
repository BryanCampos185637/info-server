import {
  Box,
  Container,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import InfoIcon from "@mui/icons-material/Info";

import { ButtonLink, ChipEnv, LabelWithIcon } from "@/components";
import { serviciosSeed } from "@/utils/seed";

export default function ServicesPage() {
  return (
    <Container>
      <Grid container spacing={1}>
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
              Registro de Servicios
              <Typography variant="body1">Listado de servicios</Typography>
            </Typography>

            <ButtonLink
              href="/servicio/formulario"
              icon={<AddIcon />}
              label="Agregar nuevo servicio"
            />
          </Box>
        </Grid>

        <Grid size={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SERVICIO / CONTENEDOR</TableCell>
                  <TableCell>AMBIENTE</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviciosSeed.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <LabelWithIcon
                        icon={<FilterDramaIcon />}
                        label={item.nombre}
                      />
                    </TableCell>
                    <TableCell>
                      <ChipEnv ambiente={item.ambiente} />
                    </TableCell>
                    <TableCell>{item.url}</TableCell>
                    <TableCell>
                      <ButtonLink
                        href={`/servicio/${item.id}`}
                        label={<InfoIcon />}
                        variant="text"
                      />
                      <ButtonLink
                        href={`/servicio/formulario/${item.id}`}
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
