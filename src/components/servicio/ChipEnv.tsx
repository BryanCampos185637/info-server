import { Chip } from "@mui/material";

import type { TipoAmbiente } from "@/interfaces";
import { ENVIRONMENTS } from "@/constants";

interface Props {
  ambiente: TipoAmbiente;
}

export default function ChipEnv({ ambiente }: Props) {
  if (ambiente === "") return null;

  const color =
    ambiente === "PRD" ? "success" : ambiente === "QA" ? "warning" : "info";

  const label =
    ENVIRONMENTS.find((env) => env.value === ambiente)?.label || ambiente;

  return <Chip label={label} color={color} size="small" />;
}
