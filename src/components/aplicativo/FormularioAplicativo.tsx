"use client";
import { useRouter } from "next/navigation";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ButtonLink from "../ui/ButtonLink";
import { ENVIRONMENTS } from "@/constants/environments";
import { DatosAplicativoForm } from "@/interfaces/aplicacion";
import { SaveAplicativo, UpdateAplicativo } from "@/actions";

interface Props {
  id?: string;
  aplicativo?: DatosAplicativoForm;
}

export default function FormularioAplicativo({ id, aplicativo }: Props) {
  const router = useRouter();

  const formik = useFormik<DatosAplicativoForm>({
    initialValues: {
      nombre: aplicativo?.nombre || "",
      version: aplicativo?.version || "",
      ambiente: aplicativo?.ambiente || "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Nombre es requerido"),
      version: Yup.string().required("Version es requerida"),
      ambiente: Yup.string().required("Ambiente es requerido"),
    }),
    onSubmit: async (values) => {
      try {
        if (id) {
          await UpdateAplicativo(id, values);
        } else {
          await SaveAplicativo(values);
        }
        router.push("/aplicativo");
      } catch (error) {
        console.error("Error al guardar el aplicativo:", error);
      }
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Nombre del Aplicativo"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps("nombre")}
            error={formik.touched.nombre && !!formik.errors.nombre}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />
        </Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Ambiente</InputLabel>
            <Select
              label="Ambiente"
              {...formik.getFieldProps("ambiente")}
              error={formik.touched.ambiente && !!formik.errors.ambiente}
            >
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
        label="Version"
        variant="outlined"
        placeholder="1.0.0"
        {...formik.getFieldProps("version")}
        error={formik.touched.version && !!formik.errors.version}
        helperText={formik.touched.version && formik.errors.version}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          type="submit"
          startIcon={<SaveIcon />}
          onClick={() => formik.handleSubmit()}
          disabled={formik.isSubmitting || !formik.isValid}
          loading={formik.isSubmitting}
        >
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
