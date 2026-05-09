import { Box, Container, Grid, Typography } from "@mui/material";

import { FormularioAplicativo } from "@/components";

export default function AplicativoForm() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box>
            <Typography variant="h5" component="h1">
              Formulario de creación de aplicativos
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 8 }}>
          <FormularioAplicativo onSave={() => {}} />
        </Grid>
      </Grid>
    </Container>
  );
}
