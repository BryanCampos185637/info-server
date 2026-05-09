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
import { DatosServicioForm } from "@/interfaces";
import { SaveServicio, UpdateServicio } from "@/actions";

interface Props {
  id?: string;
  servicio?: DatosServicioForm;
}

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es requerido"),
  ambiente: Yup.string().required("El ambiente es requerido"),
  url: Yup.string().required("La URL es requerida"),
  descripcion: Yup.string().required("La descripción es requerida"),
});

export default function FormularioServicio({ id, servicio }: Props) {
  const router = useRouter();

  const formik = useFormik<DatosServicioForm>({
    initialValues: {
      nombre: servicio?.nombre || "",
      ambiente: servicio?.ambiente || "",
      url: servicio?.url || "",
      descripcion: servicio?.descripcion || "",
      notas: servicio?.notas || "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (id) {
        await UpdateServicio(id, values);
      } else {
        await SaveServicio(values);
      }

      router.push("/servicio");
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Nombre del Servicio / Contenedor"
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
        label="URL"
        variant="outlined"
        placeholder="https://api.ejemplo.com/v1"
        {...formik.getFieldProps("url")}
        error={formik.touched.url && !!formik.errors.url}
        helperText={formik.touched.url && formik.errors.url}
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
            {...formik.getFieldProps("descripcion")}
            error={formik.touched.descripcion && !!formik.errors.descripcion}
            helperText={formik.touched.descripcion && formik.errors.descripcion}
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
            {...formik.getFieldProps("notas")}
            error={formik.touched.notas && !!formik.errors.notas}
            helperText={formik.touched.notas && formik.errors.notas}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          onClick={() => formik.handleSubmit()}
          startIcon={<SaveIcon />}
          disabled={formik.isSubmitting || !formik.isValid}
          loading={formik.isSubmitting}
        >
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
