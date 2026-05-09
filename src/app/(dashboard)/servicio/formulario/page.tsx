import { Container, Grid, Typography } from "@mui/material";

import { FormularioServicio } from "@/components";

export default function page() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography variant="h5" component="h1">
            Formulario de creación de Servicios
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 8 }}>
          <FormularioServicio onSave={() => {}} />
        </Grid>
      </Grid>
    </Container>
  );
}
