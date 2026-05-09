import { Container, Divider, Grid, Paper, Typography } from "@mui/material";

import { FormularioServicio } from "@/components";

export default function page() {
  return (
    <Container>
      <Grid container spacing={2} component={Paper} sx={{ p: 2 }}>
        <Grid size={12}>
          <Typography variant="h5" component="h1">
            Crear Servicios
          </Typography>
          <Divider />
        </Grid>
        <Grid size={12}>
          <FormularioServicio />
        </Grid>
      </Grid>
    </Container>
  );
}
