import { Container, Grid, Typography } from "@mui/material";

import { FormularioServicio } from "@/components";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography variant="h4">
            Formulario de modificación de Servicios
          </Typography>
        </Grid>
        <Grid size={12}>
          <FormularioServicio id={id} onSave={() => {}} />
        </Grid>
      </Grid>
    </Container>
  );
}
