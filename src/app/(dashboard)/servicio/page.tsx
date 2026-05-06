import {
  Box,
  Button,
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
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonLink } from "@/components";

const dataTemporal = [
  {
    id: 1,
    servicio: "Nombre del servicio",
    ambiente: "Productivo",
    url: "http://localhost:8080",
  },
  {
    id: 2,
    servicio: "Nombre del servicio",
    ambiente: "Desarrollo",
    url: "http://localhost:8080",
  },
  {
    id: 3,
    servicio: "Nombre del servicio",
    ambiente: "QA",
    url: "http://localhost:8080",
  },
];

const page = () => {
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
            <Typography variant="h4">
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
                  <TableCell>SERVICIO</TableCell>
                  <TableCell>AMBIENTE</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTemporal.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.servicio}</TableCell>
                    <TableCell>
                      {item.ambiente === "Productivo" && (
                        <Chip label={item.ambiente} color="success" />
                      )}
                      {item.ambiente === "Desarrollo" && (
                        <Chip label={item.ambiente} color="info" />
                      )}
                      {item.ambiente === "QA" && (
                        <Chip label={item.ambiente} color="warning" />
                      )}
                    </TableCell>
                    <TableCell>{item.url}</TableCell>
                    <TableCell>
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
};

export default page;
