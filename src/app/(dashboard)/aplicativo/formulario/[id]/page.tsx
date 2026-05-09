import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { FormularioAplicativo } from "@/components";
import { AplicacionService } from "@/services";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditarAplicativoForm({ params }: Props) {
  const { id } = await params;

  const aplicativo = await AplicacionService.getAplicacionById(+id);

  return (
    <Container>
      <Grid container spacing={2} component={Paper} sx={{ p: 2 }}>
        <Grid size={12}>
          <Box>
            <Typography variant="h5" component="h1">
              Modificar aplicativo
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <FormularioAplicativo id={id} aplicativo={aplicativo} />
        </Grid>
      </Grid>
    </Container>
  );
}
