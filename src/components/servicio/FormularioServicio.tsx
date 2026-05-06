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

import ButtonLink from "../ui/ButtonLink";
import { ENVIRONMENTS } from "@/constants/environments";
import { DatosServicioForm } from "@/interfaces";

interface Props {
  id?: string;
  servicio?: DatosServicioForm;
  onSave: (datos: DatosServicioForm) => void;
}

export default function FormularioServicio({ id, servicio, onSave }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Nombre del Servicio / Contenedor"
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
      <TextField label="URL" variant="outlined" />
      <TextField
        label="Descripción"
        variant="outlined"
        placeholder="Aca puede dar instrucciones de como se utiliza o que necesita para conectarse al servicio"
        minRows={3}
        multiline
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="contained" type="submit">
          {id ? "Actualizar servicio" : "Crear servicio"}
        </Button>
        <ButtonLink href="/servicio" label="Cancelar" variant="outlined" />
      </Box>
    </Box>
  );
}
