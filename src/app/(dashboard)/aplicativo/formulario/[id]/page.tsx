import { Box, Container, Grid, Typography } from "@mui/material";

import { FormularioAplicativo } from "@/components";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditarAplicativoForm({ params }: Props) {
  const { id } = await params;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box>
            <Typography variant="h5" component="h1">
              Formulario de modificación de aplicativos
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 8 }}>
          <FormularioAplicativo id={id} onSave={() => {}} />
        </Grid>
      </Grid>
    </Container>
  );
}
