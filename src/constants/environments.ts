import type { TipoAmbiente } from "@/interfaces";

interface Environments {
  label: string;
  value: TipoAmbiente;
}

export const ENVIRONMENTS: Environments[] = [
  { label: "Producción", value: "PRD" },
  { label: "QA", value: "QA" },
  { label: "Desarrollo", value: "DEV" },
];
