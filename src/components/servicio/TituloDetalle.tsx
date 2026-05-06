import { Box, Typography } from "@mui/material";

import { TipoAmbiente } from "@/interfaces";
import ChipEnv from "./ChipEnv";

export default function TituloDetalle({
  nombre,
  ambiente,
}: {
  nombre: string;
  ambiente: TipoAmbiente;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">{nombre}</Typography>
      <ChipEnv ambiente={ambiente} />
    </Box>
  );
}
