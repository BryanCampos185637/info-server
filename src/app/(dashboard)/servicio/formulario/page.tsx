import { Container, Grid, Typography } from "@mui/material";

import { FormularioServicio } from "@/components";

export default function page() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography variant="h4">
            Formulario de creación de Servicios
          </Typography>
        </Grid>
        <Grid size={12}>
          <FormularioServicio onSave={() => {}} />
        </Grid>
      </Grid>
    </Container>
  );
}
