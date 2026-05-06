import {
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
import EditIcon from "@mui/icons-material/Edit";
import LaptopIcon from "@mui/icons-material/Laptop";

import { ButtonLink, ChipEnv, LabelWithIcon } from "@/components";
import { aplicacionesSeed } from "@/utils/seed";

const page = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">
            Aplicativos
            <Typography variant="body1">Listado de aplicativos</Typography>
          </Typography>
        </Grid>

        <Grid size={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NOMBRE</TableCell>
                  <TableCell>VERSION</TableCell>
                  <TableCell>ENTORNO</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {aplicacionesSeed.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <LabelWithIcon
                        icon={<LaptopIcon />}
                        label={item.nombre}
                      />
                    </TableCell>
                    <TableCell>{item.version}</TableCell>
                    <TableCell>
                      <ChipEnv ambiente={item.ambiente} />
                    </TableCell>
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
};

export default page;
