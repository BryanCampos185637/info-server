import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AddLinkIcon from "@mui/icons-material/AddLink";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import PolylineIcon from "@mui/icons-material/Polyline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { ButtonLink, ListaServicios, TituloDetalle } from "@/components";
import { ServicioService } from "@/services";

const styleBox: SxProps<Theme> = { p: 2, border: "1px dashed grey" };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const service = await ServicioService.getServicioById(+id);
  //TODO: Temporalmente
  const servicios = await ServicioService.getServicios();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TituloDetalle
              nombre={service?.nombre || ""}
              ambiente={service?.ambiente || ""}
            />
            <ButtonLink
              variant="outlined"
              href="/servicio"
              icon={<ArrowBackIcon />}
              label="Regresar"
            />
          </Box>
        </Grid>
        <Grid size={8}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
                color="primary"
              >
                <InfoOutlinedIcon /> Descripción General
              </Typography>
              <Box component="section" sx={styleBox}>
                <Typography variant="body2">{service?.descripcion}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2}>
                <Grid size={12}>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", gap: 1, alignItems: "center" }}
                    color="primary"
                  >
                    <AddLinkIcon /> URL del servicio / contenedor
                  </Typography>
                  <Box
                    component="section"
                    sx={{
                      ...styleBox,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">{service?.url}</Typography>
                    <a href={service?.url} target="_blank">
                      <InsertLinkIcon />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
                color="primary"
              >
                <EditNoteIcon />
                Notas
              </Typography>

              <Box
                component="section"
                sx={{
                  ...styleBox,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <Typography variant="body2">
                  {service?.notas?.length === 0
                    ? "No hay notas para este servicio"
                    : service?.notas}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
                color="primary"
              >
                <PolylineIcon />
                Servicios que consume
              </Typography>

              <Divider />
              <ListaServicios
                servicios={servicios.filter((s) => s.id !== service.id)}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
