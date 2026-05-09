import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { FormularioAplicativo } from "@/components";

export default function AplicativoForm() {
  return (
    <Container>
      <Grid container spacing={2} component={Paper} sx={{ p: 2 }}>
        <Grid size={12}>
          <Box>
            <Typography variant="h5" component="h1">
              Crear aplicativo
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <FormularioAplicativo />
        </Grid>
      </Grid>
    </Container>
  );
}
