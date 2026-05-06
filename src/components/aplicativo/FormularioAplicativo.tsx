import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ButtonLink from "../ui/ButtonLink";
import { ENVIRONMENTS } from "@/constants/environments";
import { DatosAplicativoForm } from "@/interfaces/aplicacion";

interface Props {
  id?: string;
  aplicativo?: DatosAplicativoForm;
  onSave: (datos: DatosAplicativoForm) => void;
}

export default function FormularioAplicativo({
  id,
  aplicativo,
  onSave,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Nombre del Aplicativo"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Ambiente</InputLabel>
            <Select label="Ambiente">
              <MenuItem value="">Seleccionar un ambiente</MenuItem>
              {ENVIRONMENTS.map((env) => (
                <MenuItem key={env.value} value={env.value}>
                  {env.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField label="Version" variant="outlined" placeholder="1.0.0" />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="contained" type="submit" startIcon={<SaveIcon />}>
          {id ? "Actualizar aplicativo" : "Crear aplicativo"}
        </Button>
        <ButtonLink
          href="/aplicativo"
          label="Regresar"
          variant="outlined"
          icon={<ArrowBackIcon />}
        />
      </Box>
    </Box>
  );
}
