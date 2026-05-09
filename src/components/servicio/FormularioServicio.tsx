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
      <TextField
        label="URL"
        variant="outlined"
        placeholder="https://api.ejemplo.com/v1"
      />
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Descripción"
            variant="outlined"
            placeholder="Describe el motivo de la creación del servicio y que es lo que hace"
            minRows={3}
            multiline
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Notas"
            variant="outlined"
            placeholder="Aca puede dejar notas adicionales sobre el servicio, como requisitos para conectarse, usuarios, contraseñas, etc"
            minRows={3}
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="contained" type="submit" startIcon={<SaveIcon />}>
          {id ? "Actualizar servicio" : "Crear servicio"}
        </Button>
        <ButtonLink
          href="/servicio"
          label="Regresar"
          variant="outlined"
          icon={<ArrowBackIcon />}
        />
      </Box>
    </Box>
  );
}
