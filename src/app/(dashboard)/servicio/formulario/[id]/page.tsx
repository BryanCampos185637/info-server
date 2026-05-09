import { Container, Divider, Grid, Paper, Typography } from "@mui/material";

import { FormularioServicio } from "@/components";
import { ServicioService } from "@/services";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const servicio = await ServicioService.getServicioById(+id);

  return (
    <Container>
      <Grid container spacing={2} component={Paper} sx={{ p: 2 }}>
        <Grid size={12}>
          <Typography variant="h5" component="h1">
            Modificar Servicios
          </Typography>
          <Divider />
        </Grid>
        <Grid size={12}>
          <FormularioServicio id={id} servicio={servicio} />
        </Grid>
      </Grid>
    </Container>
  );
}
