import { Box, Container, Grid, Typography } from "@mui/material";

export default function AplicativoForm() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Box>
            <Typography variant="h4">Aplicativo</Typography>
            <Typography variant="body1">Formulario de registro</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
